import { Star, Quote } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Emily Zhang",
      role: "Computer Science Student",
      company: "Interning at Microsoft",
      content:
        "This community completely changed my college experience! I went from being a shy beginner to leading my own projects and landing my dream internship. The mentorship and support here is unreal.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Marcus Johnson",
      role: "Self-taught Developer",
      company: "Now at Stripe",
      content:
        "As someone without a CS degree, I was intimidated by coding communities. But this group welcomed me with open arms and helped me build the skills and confidence to break into tech.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Sofia Gonzalez",
      role: "Bootcamp Graduate",
      company: "Frontend Developer at Airbnb",
      content:
        "The collaborative projects here gave me real-world experience that bootcamp couldn't provide. I built my entire portfolio through community projects and made lifelong friends.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "David Park",
      role: "Engineering Student",
      company: "Startup Founder",
      content:
        "I found my co-founder and first team members in this community. The entrepreneurial spirit and technical expertise here helped me turn my idea into a real business.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Aisha Williams",
      role: "Career Changer",
      company: "Data Scientist at Netflix",
      content:
        "Switching from marketing to tech felt impossible until I found this community. The study groups and project collaborations made learning fun and achievable.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Ryan O'Connor",
      role: "High School Student",
      company: "Accepted to MIT",
      content:
        "Even as a high schooler, I felt welcomed and challenged. The advanced projects and mentorship helped me build a portfolio that got me into my dream college.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-flipInX">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fadeInUp animation-delay-300">
            Hear from our community members who've landed dream jobs, started companies, and built amazing careers with
            the help of our supportive network.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 card-hover stagger-item animate-zoomIn`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 text-blue-400 fill-current animate-bounceIn`}
                    style={{ animationDelay: `${index * 0.15 + i * 0.05}s` }}
                  />
                ))}
              </div>

              <Quote className="h-8 w-8 text-blue-600 mb-4 animate-rotateIn animation-delay-200" />

              <p className="text-gray-700 dark:text-gray-300 mb-6 italic animate-fadeInUp animation-delay-400">
                "{testimonial.content}"
              </p>

              <div className="flex items-center">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover animate-scaleIn animation-delay-500"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white animate-fadeInLeft animation-delay-600">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 animate-fadeInLeft animation-delay-700">
                    {testimonial.role}
                  </p>
                  <p className="text-sm text-blue-600 font-medium animate-fadeInLeft animation-delay-800">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 rounded-xl p-8 text-center text-white scale-in-section">
          <h3 className="text-2xl font-bold mb-4 animate-bounceInDown">Ready to Write Your Success Story?</h3>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto animate-fadeInUp animation-delay-300">
            Join hundreds of students who've transformed their careers through our community. Your journey to tech
            success starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors btn-animate animate-slideInLeft animation-delay-500">
              Join Our Community
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors btn-animate animate-slideInRight animation-delay-700">
              View More Stories
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
