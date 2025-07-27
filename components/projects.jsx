import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Star, GitFork } from "lucide-react"

export default function Projects() {
  const featuredProjects = [
    {
      title: "EcoTracker",
      description:
        "A mobile app helping students track their carbon footprint and compete in sustainability challenges.",
      category: "Mobile Development",
      tech: ["React Native", "Node.js", "MongoDB", "Firebase"],
      contributors: 8,
      stars: 156,
      forks: 32,
      status: "Active",
      statusColor: "bg-slate-600",
    },
    {
      title: "StudyBuddy AI",
      description: "An AI-powered study companion that creates personalized quizzes and study plans for students.",
      category: "AI/ML",
      tech: ["Python", "TensorFlow", "Flask", "React"],
      contributors: 12,
      stars: 203,
      forks: 45,
      status: "Featured",
      statusColor: "bg-white text-slate-900",
    },
    {
      title: "Campus Connect",
      description:
        "A social platform connecting students across universities for project collaboration and networking.",
      category: "Web Development",
      tech: ["Next.js", "Prisma", "PostgreSQL", "Tailwind"],
      contributors: 15,
      stars: 89,
      forks: 28,
      status: "Active",
      statusColor: "bg-slate-600",
    },
  ]

  return (
    <section
      id="projects"
      className="relative py-20 bg-slate-900 dark:bg-slate-900 transition-all duration-500 overflow-hidden"
    >
      {/* Subtle Grid Background Pattern */}
      <div className="absolute inset-0 opacity-10 animate-float">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <pattern id="grid-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" className="text-slate-700" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6 tracking-tight animate-flipInY">
            Collaborative Projects
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed animate-fadeInUp animation-delay-400">
            Real-world projects built by our community members. Join ongoing projects or propose your own ideas to build
            something amazing together.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={`group bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 overflow-hidden card-hover-intense stagger-item animate-slideInUp`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="p-8">
                {/* Header with Status and Category */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${project.statusColor} ${
                      project.status === "Featured" ? "text-slate-900" : "text-white"
                    } animate-bounceIn animation-delay-200`}
                  >
                    {project.status}
                  </span>
                  <span className="text-sm text-slate-400 font-medium animate-fadeInRight animation-delay-300">
                    {project.category}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300 animate-fadeInLeft animation-delay-400">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 mb-6 leading-relaxed text-sm animate-fadeInUp animation-delay-500">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-lg border border-slate-600/30 hover:bg-slate-600/50 transition-colors duration-200 animate-scaleIn`}
                      style={{ animationDelay: `${0.6 + techIndex * 0.1}s` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between mb-8 text-sm text-slate-400">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 animate-fadeInLeft animation-delay-700">
                      <Star className="h-4 w-4 animate-pulse" />
                      <span>{project.stars}</span>
                    </div>
                    <div className="flex items-center gap-1 animate-fadeInLeft animation-delay-800">
                      <GitFork className="h-4 w-4 animate-pulse" />
                      <span>{project.forks}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 animate-fadeInRight animation-delay-900">
                    <span>{project.contributors} contributors</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    className="flex-1 bg-transparent border-slate-600 text-slate-300 hover:bg-slate-700/50 hover:text-white hover:border-slate-500 transition-all duration-300 btn-animate animate-slideInLeft animation-delay-1000"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button className="flex-1 bg-gradient-to-r from-purple-600 to-emerald-600 hover:from-purple-500 hover:to-emerald-500 text-white border-0 transition-all duration-300 btn-animate animate-slideInRight animation-delay-1100">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="relative bg-slate-800/30 backdrop-blur-sm rounded-3xl p-12 text-center border border-slate-700/30 overflow-hidden scale-in-section">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5 animate-morphing">
            <svg className="w-full h-full" viewBox="0 0 400 200">
              <defs>
                <pattern id="cta-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="1" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cta-dots)" className="text-blue-400" />
            </svg>
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white mb-6 animate-bounceInDown">Want to Start Your Own Project?</h3>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed animate-fadeInUp animation-delay-300">
              Have an idea that could change the world? We'll help you find collaborators, mentors, and resources to
              bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 text-lg font-semibold rounded-2xl border-0 btn-animate shadow-xl animate-zoomInLeft animation-delay-500">
                🚀 Propose a Project
              </Button>
              <Button
                variant="outline"
                className="border-2 border-slate-600 text-slate-300 hover:bg-slate-700/50 hover:text-white hover:border-slate-500 bg-transparent px-8 py-4 text-lg font-semibold rounded-2xl btn-animate animate-zoomInRight animation-delay-700"
              >
                🤝 Join Existing Project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
