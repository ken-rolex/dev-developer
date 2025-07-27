import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { Resource } from '@/lib/models';

export async function POST(request) {
  try {
    const { resourceId, action } = await request.json(); // action: 'download' or 'view'

    if (!resourceId || !action) {
      return NextResponse.json(
        { error: 'Resource ID and action are required' },
        { status: 400 }
      );
    }

    await connectDB();

    // Find and update the resource
    const updateField = action === 'download' ? 'downloads' : 'views';
    
    const resource = await Resource.findByIdAndUpdate(
      resourceId,
      { $inc: { [updateField]: 1 } },
      { new: true }
    );

    if (!resource) {
      return NextResponse.json(
        { error: 'Resource not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: `${action} tracked successfully`, resource },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error tracking resource:', error);
    return NextResponse.json(
      { error: 'Failed to track resource action' },
      { status: 500 }
    );
  }
}