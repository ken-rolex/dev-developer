import mongoose from 'mongoose';

// Contact Messages Schema
const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  status: { type: String, enum: ['new', 'read', 'replied'], default: 'new' },
  createdAt: { type: Date, default: Date.now }
});

// Community Applications Schema
const ApplicationSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  university: { type: String, required: true },
  academicYear: { type: String, required: true },
  interests: { type: String, required: true },
  experienceLevel: { type: String, required: true },
  whyJoin: { type: String },
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});

// Event Registrations Schema
const EventRegistrationSchema = new mongoose.Schema({
  eventId: { type: String, required: true },
  eventTitle: { type: String, required: true },
  userName: { type: String, required: true },
  userEmail: { type: String, required: true },
  registrationDate: { type: Date, default: Date.now },
  status: { type: String, enum: ['registered', 'attended', 'cancelled'], default: 'registered' }
});

// Events Schema (for dynamic event management)
const EventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  location: { type: String, required: true },
  tags: [{ type: String }],
  attendees: { type: Number, default: 0 },
  maxAttendees: { type: Number },
  status: { type: String, enum: ['upcoming', 'ongoing', 'completed', 'cancelled'], default: 'upcoming' },
  createdAt: { type: Date, default: Date.now }
});

// Testimonials Schema (for dynamic testimonials)
const TestimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  company: { type: String, required: true },
  content: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5, default: 5 },
  image: { type: String },
  status: { type: String, enum: ['pending', 'approved', 'featured'], default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});

// Resources Schema (for tracking downloads/views)
const ResourceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, enum: ['pdf', 'video', 'link'], required: true },
  url: { type: String },
  fileSize: { type: String },
  duration: { type: String }, // for videos
  downloads: { type: Number, default: 0 },
  views: { type: Number, default: 0 },
  tags: [{ type: String }],
  status: { type: String, enum: ['active', 'inactive'], default: 'active' },
  createdAt: { type: Date, default: Date.now }
});

// Export models
export const Contact = mongoose.models.Contact || mongoose.model('Contact', ContactSchema);
export const Application = mongoose.models.Application || mongoose.model('Application', ApplicationSchema);
export const EventRegistration = mongoose.models.EventRegistration || mongoose.model('EventRegistration', EventRegistrationSchema);
export const Event = mongoose.models.Event || mongoose.model('Event', EventSchema);
export const Testimonial = mongoose.models.Testimonial || mongoose.model('Testimonial', TestimonialSchema);
export const Resource = mongoose.models.Resource || mongoose.model('Resource', ResourceSchema);