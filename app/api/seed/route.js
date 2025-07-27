import { NextResponse } from 'next/server';
import { seedDatabase } from '@/lib/seedData';

export async function POST() {
  try {
    const success = await seedDatabase();
    
    if (success) {
      return NextResponse.json(
        { message: 'Database seeded successfully!' },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: 'Failed to seed database' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error in seed API:', error);
    return NextResponse.json(
      { error: 'Failed to seed database' },
      { status: 500 }
    );
  }
}