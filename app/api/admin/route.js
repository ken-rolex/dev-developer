import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { Contact, Application, EventRegistration, Event, Testimonial, Resource } from '@/lib/models';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type'); // 'contacts', 'applications', 'registrations', etc.

    await connectDB();

    let data = {};

    switch (type) {
      case 'contacts':
        data.contacts = await Contact.find({}).sort({ createdAt: -1 }).limit(50);
        break;
      
      case 'applications':
        data.applications = await Application.find({}).sort({ createdAt: -1 }).limit(100);
        break;
      
      case 'registrations':
        data.registrations = await EventRegistration.find({}).sort({ registrationDate: -1 }).limit(100);
        break;
      
      case 'events':
        data.events = await Event.find({}).sort({ createdAt: -1 });
        break;
      
      case 'testimonials':
        data.testimonials = await Testimonial.find({}).sort({ createdAt: -1 });
        break;
      
      case 'resources':
        data.resources = await Resource.find({}).sort({ createdAt: -1 });
        break;
      
      case 'stats':
        const [contactCount, applicationCount, registrationCount, eventCount] = await Promise.all([
          Contact.countDocuments(),
          Application.countDocuments(),
          EventRegistration.countDocuments(),
          Event.countDocuments()
        ]);
        
        data.stats = {
          contacts: contactCount,
          applications: applicationCount,
          registrations: registrationCount,
          events: eventCount
        };
        break;
      
      default:
        // Return all data for dashboard
        const [contacts, applications, registrations, events, testimonials] = await Promise.all([
          Contact.find({}).sort({ createdAt: -1 }).limit(10),
          Application.find({}).sort({ createdAt: -1 }).limit(10),
          EventRegistration.find({}).sort({ registrationDate: -1 }).limit(10),
          Event.find({}).sort({ createdAt: -1 }).limit(10),
          Testimonial.find({}).sort({ createdAt: -1 }).limit(10)
        ]);
        
        data = {
          contacts,
          applications,
          registrations,
          events,
          testimonials,
          summary: {
            totalContacts: await Contact.countDocuments(),
            totalApplications: await Application.countDocuments(),
            totalRegistrations: await EventRegistration.countDocuments(),
            totalEvents: await Event.countDocuments(),
            totalTestimonials: await Testimonial.countDocuments()
          }
        };
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Error fetching admin data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch data' },
      { status: 500 }
    );
  }
}

// Update status of applications, testimonials etc.
export async function PATCH(request) {
  try {
    const { id, type, status } = await request.json();

    if (!id || !type || !status) {
      return NextResponse.json(
        { error: 'ID, type, and status are required' },
        { status: 400 }
      );
    }

    await connectDB();

    let result;
    switch (type) {
      case 'application':
        result = await Application.findByIdAndUpdate(id, { status }, { new: true });
        break;
      
      case 'testimonial':
        result = await Testimonial.findByIdAndUpdate(id, { status }, { new: true });
        break;
      
      case 'contact':
        result = await Contact.findByIdAndUpdate(id, { status }, { new: true });
        break;
      
      default:
        return NextResponse.json(
          { error: 'Invalid type' },
          { status: 400 }
        );
    }

    if (!result) {
      return NextResponse.json(
        { error: 'Record not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: 'Status updated successfully', data: result },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error updating status:', error);
    return NextResponse.json(
      { error: 'Failed to update status' },
      { status: 500 }
    );
  }
}