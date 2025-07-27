import { Target, Heart, Users, Lightbulb } from "lucide-react"

export default function About() {
  return (
    <section
      id="about"
      className="relative py-12 sm:py-16 lg:py-20 bg-white dark:bg-slate-900 transition-all duration-500 overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <pattern id="about-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="2" fill="currentColor" />
              <path d="M15,15 L45,45 M45,15 L15,45" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-pattern)" className="text-blue-600" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 fade-in-section">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 animate-fadeInDown tracking-tight">
            About Our Community
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto animate-fadeInUp animation-delay-200 leading-relaxed">
            We're more than just a coding club – we're a family of passionate developers, designers, and innovators
            building the future together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
          <div className="slide-in-left">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 animate-bounceInLeft">
              Our Mission
            </h3>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-4 sm:mb-6 leading-relaxed animate-fadeInUp animation-delay-300">
              To create an inclusive, collaborative environment where student developers can learn, grow, and build
              amazing projects together. We believe in learning by doing, sharing knowledge freely, and supporting each
              other's journey in tech.
            </p>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed animate-fadeInUp animation-delay-500">
              Through workshops, hackathons, project collaborations, and mentorship programs, we're building the next
              generation of tech leaders.
            </p>
          </div>
          <div className="relative bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-blue-900/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 slide-in-right card-hover border border-slate-200 dark:border-slate-700">
            {/* DNA Helix Decoration */}
            <div className="absolute top-4 right-4 opacity-20 animate-float">
              <svg width="40" height="40" viewBox="0 0 60 60" className="sm:w-[60px] sm:h-[60px]">
                <path
                  d="M15,15 Q30,7.5 45,15 Q30,22.5 15,15 M15,45 Q30,37.5 45,45 Q30,52.5 15,45"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="text-blue-600 animate-pulse"
                />
                <circle cx="15" cy="15" r="2" fill="currentColor" className="text-blue-600" />
                <circle cx="45" cy="15" r="2" fill="currentColor" className="text-purple-600" />
                <circle cx="15" cy="45" r="2" fill="currentColor" className="text-blue-600" />
                <circle cx="45" cy="45" r="2" fill="currentColor" className="text-purple-600" />
              </svg>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 animate-bounceInRight">
              What Makes Us Different
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start card-hover-subtle stagger-child">
                <div className="bg-blue-100 dark:bg-blue-900/30 rounded-xl p-2 sm:p-3 mr-3 sm:mr-4 mt-1 animate-scaleIn flex-shrink-0">
                  <Lightbulb className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base">
                    Project-First Learning
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
                    Learn by building real projects that solve actual problems
                  </p>
                </div>
              </li>
              <li className="flex items-start card-hover-subtle stagger-child">
                <div className="bg-purple-100 dark:bg-purple-900/30 rounded-xl p-2 sm:p-3 mr-3 sm:mr-4 mt-1 animate-scaleIn animation-delay-200 flex-shrink-0">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base">
                    Peer-to-Peer Mentorship
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
                    Everyone teaches, everyone learns – no hierarchy, just collaboration
                  </p>
                </div>
              </li>
              <li className="flex items-start card-hover-subtle stagger-child">
                <div className="bg-emerald-100 dark:bg-emerald-900/30 rounded-xl p-2 sm:p-3 mr-3 sm:mr-4 mt-1 animate-scaleIn animation-delay-400 flex-shrink-0">
                  <Heart className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base">
                    Inclusive Community
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
                    Welcoming space for all skill levels, backgrounds, and interests
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative bg-slate-50 dark:bg-slate-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 scale-in-section card-hover border border-slate-200 dark:border-slate-700 overflow-hidden">
          {/* Tech Network Background */}
          <div className="absolute inset-0 opacity-5 animate-morphing">
            <svg className="w-full h-full" viewBox="0 0 800 400">
              <defs>
                <pattern id="network-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <circle cx="50" cy="50" r="2" fill="currentColor" />
                  <path
                    d="M25,25 L75,75 M75,25 L25,75 M50,0 L50,100 M0,50 L100,50"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    opacity="0.3"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#network-pattern)" className="text-blue-600" />
            </svg>
          </div>

          <div className="relative z-10 text-center mb-6 sm:mb-8">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-50 dark:bg-blue-900/20 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 animate-bounceIn">
              <Target className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 animate-fadeInDown">
              Who We're For
            </h3>
          </div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center card-hover-subtle stagger-child animate-zoomIn">
              <h4 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white mb-2 sm:mb-3">
                Beginner Developers
              </h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                Just starting your coding journey? Perfect! We'll help you build your first projects and connect with
                supportive peers.
              </p>
            </div>
            <div className="text-center card-hover-subtle stagger-child animate-zoomIn animation-delay-200">
              <h4 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white mb-2 sm:mb-3">
                Experienced Coders
              </h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                Ready to tackle complex challenges? Join our advanced projects and mentor newcomers while expanding your
                skills.
              </p>
            </div>
            <div className="text-center card-hover-subtle stagger-child animate-zoomIn animation-delay-400">
              <h4 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white mb-2 sm:mb-3">
                Career-Focused Students
              </h4>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                Looking to break into tech? Build your portfolio, network with industry professionals, and land your
                dream internship.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
