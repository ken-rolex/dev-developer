import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { EventRegistration } from '@/lib/models';

export async function POST(request) {
  try {
    const { eventId, eventTitle, userName, userEmail } = await request.json();

    // Validate required fields
    if (!eventId || !eventTitle || !userName || !userEmail) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Connect to database
    await connectDB();

    // Check if user already registered for this event
    const existingRegistration = await EventRegistration.findOne({ 
      eventId, 
      userEmail 
    });

    if (existingRegistration) {
      return NextResponse.json(
        { error: 'You are already registered for this event' },
        { status: 400 }
      );
    }

    // Create new registration
    const registration = new EventRegistration({
      eventId,
      eventTitle,
      userName,
      userEmail
    });

    await registration.save();

    return NextResponse.json(
      { message: 'Successfully registered for the event!', id: registration._id },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error registering for event:', error);
    return NextResponse.json(
      { error: 'Failed to register for event. Please try again.' },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const eventId = searchParams.get('eventId');

    await connectDB();
    
    let query = {};
    if (eventId) {
      query.eventId = eventId;
    }

    const registrations = await EventRegistration.find(query)
      .sort({ registrationDate: -1 });

    return NextResponse.json({ registrations }, { status: 200 });
  } catch (error) {
    console.error('Error fetching registrations:', error);
    return NextResponse.json(
      { error: 'Failed to fetch registrations' },
      { status: 500 }
    );
  }
}