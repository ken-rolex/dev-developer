import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { Testimonial } from '@/lib/models';

export async function GET() {
  try {
    await connectDB();
    
    const testimonials = await Testimonial.find({ 
      status: { $in: ['approved', 'featured'] } 
    })
      .sort({ createdAt: -1 })
      .limit(12);

    return NextResponse.json({ testimonials }, { status: 200 });
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return NextResponse.json(
      { error: 'Failed to fetch testimonials' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const { 
      name, 
      role, 
      company, 
      content, 
      rating, 
      image 
    } = await request.json();

    // Validate required fields
    if (!name || !role || !company || !content) {
      return NextResponse.json(
        { error: 'Name, role, company, and content are required' },
        { status: 400 }
      );
    }

    // Connect to database
    await connectDB();

    // Create new testimonial
    const testimonial = new Testimonial({
      name,
      role,
      company,
      content,
      rating: rating || 5,
      image: image || '/placeholder.svg'
    });

    await testimonial.save();

    return NextResponse.json(
      { message: 'Testimonial submitted successfully!', id: testimonial._id },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error saving testimonial:', error);
    return NextResponse.json(
      { error: 'Failed to submit testimonial. Please try again.' },
      { status: 500 }
    );
  }
}