import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { Resource } from '@/lib/models';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type'); // 'pdf' or 'video'

    await connectDB();
    
    let query = { status: 'active' };
    if (type) {
      query.type = type;
    }

    const resources = await Resource.find(query)
      .sort({ createdAt: -1 })
      .limit(20);

    return NextResponse.json({ resources }, { status: 200 });
  } catch (error) {
    console.error('Error fetching resources:', error);
    return NextResponse.json(
      { error: 'Failed to fetch resources' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const { 
      title, 
      description, 
      type, 
      url, 
      fileSize, 
      duration, 
      tags 
    } = await request.json();

    // Validate required fields
    if (!title || !description || !type) {
      return NextResponse.json(
        { error: 'Title, description, and type are required' },
        { status: 400 }
      );
    }

    // Connect to database
    await connectDB();

    // Create new resource
    const resource = new Resource({
      title,
      description,
      type,
      url,
      fileSize,
      duration,
      tags: tags || []
    });

    await resource.save();

    return NextResponse.json(
      { message: 'Resource added successfully!', resource },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating resource:', error);
    return NextResponse.json(
      { error: 'Failed to add resource. Please try again.' },
      { status: 500 }
    );
  }
}