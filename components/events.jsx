import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users } from "lucide-react"
import { useState, useEffect } from "react"

export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [registering, setRegistering] = useState({});

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch('/api/events');
      const data = await response.json();
      if (response.ok) {
        setEvents(data.events || []);
      }
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleRegistration = async (event) => {
    const userName = prompt('Enter your name:');
    const userEmail = prompt('Enter your email:');
    
    if (!userName || !userEmail) return;

    setRegistering({ ...registering, [event._id]: true });

    try {
      const response = await fetch('/api/events/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          eventId: event._id,
          eventTitle: event.title,
          userName,
          userEmail
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Successfully registered for the event!');
        // Refresh events to update attendee count
        fetchEvents();
      } else {
        alert(data.error || 'Failed to register for event');
      }
    } catch (error) {
      console.error('Error registering for event:', error);
      alert('Failed to register for event');
    } finally {
      setRegistering({ ...registering, [event._id]: false });
    }
  };

  // Fallback to hardcoded events if no dynamic events are available
  const fallbackEvents = [
    {
      _id: 'fallback-1',
      title: "Full-Stack Web Development Workshop",
      date: "March 15, 2024",
      time: "2:00 PM - 6:00 PM",
      location: "Tech Hub, Room 301",
      attendees: 45,
      description:
        "Build a complete web app using React, Node.js, and MongoDB. Perfect for intermediate developers looking to level up their full-stack skills.",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      _id: 'fallback-2',
      title: "AI/ML Study Group Kickoff",
      date: "March 20, 2024",
      time: "7:00 PM - 9:00 PM",
      location: "Virtual (Discord)",
      attendees: 32,
      description:
        "Join our new AI/ML study group! We'll explore machine learning fundamentals and work on exciting projects together.",
      tags: ["Python", "TensorFlow", "AI/ML"],
    },
    {
      _id: 'fallback-3',
      title: "48-Hour Hackathon: Climate Solutions",
      date: "March 25-27, 2024",
      time: "Friday 6PM - Sunday 6PM",
      location: "Innovation Center",
      attendees: 120,
      description:
        "Build innovative solutions to combat climate change. Prizes, mentorship, and networking opportunities await!",
      tags: ["Hackathon", "Climate Tech", "Innovation"],
    },
  ];

  const displayEvents = events.length > 0 ? events : fallbackEvents;

  return (
    <section id="events" className="py-12 sm:py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 fade-in-section">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-flipInX">
            Upcoming Events
          </h2>
          <p className="text-base sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fadeInUp animation-delay-300">
            Join us for workshops, hackathons, study groups, and networking events. There's always something exciting
            happening in our community!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {loading ? (
            <div className="col-span-3 text-center py-8">
              <p className="text-gray-600 dark:text-gray-300">Loading events...</p>
            </div>
          ) : (
            displayEvents.map((event, index) => (
              <div
                key={event._id || index}
                className={`bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden card-hover stagger-item animate-slideInUp`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="p-4 sm:p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {event.tags?.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full animate-bounceIn`}
                        style={{ animationDelay: `${index * 0.2 + tagIndex * 0.1}s` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 animate-fadeInLeft animation-delay-400">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm animate-fadeInRight animation-delay-500">
                    {event.description}
                  </p>
                  <div className="space-y-1 mb-4">
                    <div className="flex items-center text-gray-500 dark:text-gray-400 animate-fadeInUp animation-delay-600">
                      <Calendar className="h-4 w-4 mr-2 animate-pulse" />
                      <span className="text-xs">{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 animate-fadeInUp animation-delay-700">
                      <Clock className="h-4 w-4 mr-2 animate-pulse" />
                      <span className="text-xs">{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 animate-fadeInUp animation-delay-800">
                      <MapPin className="h-4 w-4 mr-2 animate-pulse" />
                      <span className="text-xs">{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 animate-fadeInUp animation-delay-900">
                      <Users className="h-4 w-4 mr-2 animate-pulse" />
                      <span className="text-xs">{event.attendees} registered</span>
                    </div>
                  </div>
                  <Button 
                    onClick={() => handleRegistration(event)}
                    disabled={registering[event._id]}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white btn-animate animate-scaleIn animation-delay-1000 text-sm py-2 disabled:opacity-50"
                  >
                    {registering[event._id] ? 'Registering...' : 'Register Now'}
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="text-center bg-white dark:bg-gray-900 rounded-xl p-6 sm:p-8 shadow-sm border border-gray-200 dark:border-gray-700 scale-in-section">
          {" "}
          {/* Adjusted padding */}
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 animate-bounceInDown">
            {" "}
            {/* Adjusted text size */}
            Why Attend Our Events?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {" "}
            {/* Adjusted spacing */}
            <div className="animate-zoomInLeft stagger-child">
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">Learn by Doing</h4>{" "}
              {/* Adjusted text size */}
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {" "}
                {/* Adjusted text size */}
                Hands-on workshops and practical sessions that build real skills
              </p>
            </div>
            <div className="animate-zoomIn stagger-child">
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Network & Connect
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Meet fellow developers, mentors, and potential collaborators
              </p>
            </div>
            <div className="animate-zoomInRight stagger-child">
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Build Your Portfolio
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Create projects and gain experience that impresses employers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
