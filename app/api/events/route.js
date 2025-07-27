import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { Event } from '@/lib/models';

export async function GET() {
  try {
    await connectDB();
    
    const events = await Event.find({ status: 'upcoming' })
      .sort({ date: 1 })
      .limit(20);

    return NextResponse.json({ events }, { status: 200 });
  } catch (error) {
    console.error('Error fetching events:', error);
    return NextResponse.json(
      { error: 'Failed to fetch events' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const { 
      title, 
      description, 
      date, 
      time, 
      location, 
      tags, 
      maxAttendees 
    } = await request.json();

    // Validate required fields
    if (!title || !description || !date || !time || !location) {
      return NextResponse.json(
        { error: 'All required fields must be filled' },
        { status: 400 }
      );
    }

    // Connect to database
    await connectDB();

    // Create new event
    const event = new Event({
      title,
      description,
      date,
      time,
      location,
      tags: tags || [],
      maxAttendees: maxAttendees || 100
    });

    await event.save();

    return NextResponse.json(
      { message: 'Event created successfully!', event },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating event:', error);
    return NextResponse.json(
      { error: 'Failed to create event. Please try again.' },
      { status: 500 }
    );
  }
}