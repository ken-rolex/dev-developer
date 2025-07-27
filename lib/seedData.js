import connectDB from '@/lib/mongodb';
import { Event, Resource, Testimonial } from '@/lib/models';

export async function seedDatabase() {
  try {
    await connectDB();

    // Sample Events
    const sampleEvents = [
      {
        title: "Full-Stack Web Development Workshop",
        description: "Build a complete web app using React, Node.js, and MongoDB. Perfect for intermediate developers looking to level up their full-stack skills.",
        date: "March 15, 2024",
        time: "2:00 PM - 6:00 PM",
        location: "Tech Hub, Room 301",
        tags: ["React", "Node.js", "MongoDB"],
        attendees: 45,
        maxAttendees: 50
      },
      {
        title: "AI/ML Study Group Kickoff",
        description: "Join our new AI/ML study group! We'll explore machine learning fundamentals and work on exciting projects together.",
        date: "March 20, 2024",
        time: "7:00 PM - 9:00 PM",
        location: "Virtual (Discord)",
        tags: ["Python", "TensorFlow", "AI/ML"],
        attendees: 32,
        maxAttendees: 40
      },
      {
        title: "48-Hour Hackathon: Climate Solutions",
        description: "Build innovative solutions to combat climate change. Prizes, mentorship, and networking opportunities await!",
        date: "March 25-27, 2024",
        time: "Friday 6PM - Sunday 6PM",
        location: "Innovation Center",
        tags: ["Hackathon", "Climate Tech", "Innovation"],
        attendees: 120,
        maxAttendees: 150
      }
    ];

    // Sample Resources
    const sampleResources = [
      {
        title: "JavaScript ES6+ Cheat Sheet",
        description: "Complete reference for modern JavaScript features and syntax",
        type: "pdf",
        downloads: 1240,
        tags: ["JavaScript", "ES6", "Cheat Sheet"]
      },
      {
        title: "React Hooks Quick Reference",
        description: "Essential hooks with examples and best practices",
        type: "pdf",
        downloads: 890,
        tags: ["React", "Hooks", "Reference"]
      },
      {
        title: "Full-Stack Development Bootcamp",
        description: "Complete 6-hour workshop on building modern web applications",
        type: "video",
        duration: "6h 23m",
        views: 3400,
        tags: ["Full-Stack", "Workshop", "Web Development"]
      },
      {
        title: "Machine Learning for Beginners",
        description: "Introduction to ML concepts with hands-on Python examples",
        type: "video",
        duration: "4h 15m",
        views: 2100,
        tags: ["Machine Learning", "Python", "Beginner"]
      }
    ];

    // Sample Testimonials
    const sampleTestimonials = [
      {
        name: "Emily Zhang",
        role: "Computer Science Student",
        company: "Interning at Microsoft",
        content: "This community completely changed my college experience! I went from being a shy beginner to leading my own projects and landing my dream internship. The mentorship and support here is unreal.",
        rating: 5,
        image: "/placeholder.svg?height=80&width=80",
        status: "approved"
      },
      {
        name: "Marcus Johnson",
        role: "Self-taught Developer",
        company: "Now at Stripe",
        content: "As someone without a CS degree, I was intimidated by coding communities. But this group welcomed me with open arms and helped me build the skills and confidence to break into tech.",
        rating: 5,
        image: "/placeholder.svg?height=80&width=80",
        status: "featured"
      },
      {
        name: "Sofia Gonzalez",
        role: "Bootcamp Graduate",
        company: "Frontend Developer at Airbnb",
        content: "The collaborative projects here gave me real-world experience that bootcamp couldn't provide. I built my entire portfolio through community projects and made lifelong friends.",
        rating: 5,
        image: "/placeholder.svg?height=80&width=80",
        status: "approved"
      }
    ];

    // Insert sample data
    await Event.insertMany(sampleEvents);
    await Resource.insertMany(sampleResources);
    await Testimonial.insertMany(sampleTestimonials);

    console.log('Sample data seeded successfully!');
    return true;
  } catch (error) {
    console.error('Error seeding database:', error);
    return false;
  }
}