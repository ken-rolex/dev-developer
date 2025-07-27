import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { Application } from '@/lib/models';

export async function POST(request) {
  try {
    const { 
      fullName, 
      email, 
      university, 
      academicYear, 
      interests, 
      experienceLevel, 
      whyJoin 
    } = await request.json();

    // Validate required fields
    if (!fullName || !email || !university || !academicYear || !interests || !experienceLevel) {
      return NextResponse.json(
        { error: 'All required fields must be filled' },
        { status: 400 }
      );
    }

    // Connect to database
    await connectDB();

    // Check if email already exists
    const existingApplication = await Application.findOne({ email });
    if (existingApplication) {
      return NextResponse.json(
        { error: 'An application with this email already exists' },
        { status: 400 }
      );
    }

    // Create new application
    const application = new Application({
      fullName,
      email,
      university,
      academicYear,
      interests,
      experienceLevel,
      whyJoin
    });

    await application.save();

    return NextResponse.json(
      { message: 'Application submitted successfully!', id: application._id },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error saving application:', error);
    return NextResponse.json(
      { error: 'Failed to submit application. Please try again.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectDB();
    
    const applications = await Application.find({})
      .sort({ createdAt: -1 })
      .limit(100);

    return NextResponse.json({ applications }, { status: 200 });
  } catch (error) {
    console.error('Error fetching applications:', error);
    return NextResponse.json(
      { error: 'Failed to fetch applications' },
      { status: 500 }
    );
  }
}