import { Github, Linkedin, Twitter } from "lucide-react"

export default function Team() {
  const coreTeam = [
    {
      name: "Alex Chen",
      role: "Community Lead",
      bio: "Full-stack developer passionate about building inclusive tech communities. Currently interning at Google.",
      image: "/placeholder.svg?height=300&width=300",
      skills: ["React", "Node.js", "Community Building"],
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Maya Patel",
      role: "Technical Director",
      bio: "AI/ML enthusiast and hackathon winner. Leading our technical workshops and project mentorship programs.",
      image: "/placeholder.svg?height=300&width=300",
      skills: ["Python", "TensorFlow", "Data Science"],
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Jordan Kim",
      role: "Events Coordinator",
      bio: "UX designer turned developer. Organizing amazing events and ensuring everyone feels welcome in our community.",
      image: "/placeholder.svg?height=300&width=300",
      skills: ["JavaScript", "UI/UX", "Event Planning"],
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Sam Rodriguez",
      role: "Outreach Manager",
      bio: "Mobile app developer and social media guru. Connecting with other communities and spreading the word about our mission.",
      image: "/placeholder.svg?height=300&width=300",
      skills: ["React Native", "Flutter", "Marketing"],
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#",
      },
    },
  ]

  return (
    <section id="team" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-rotateIn">
            Meet Our Core Team
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fadeInUp animation-delay-300">
            The passionate individuals who make our community thrive. We're students just like you, working together to
            create something amazing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {coreTeam.map((member, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden card-hover-intense stagger-item animate-flipInY`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 animate-fadeInLeft animation-delay-400">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3 animate-fadeInRight animation-delay-500">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 animate-fadeInUp animation-delay-600">
                  {member.bio}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {member.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded animate-bounceIn`}
                      style={{ animationDelay: `${0.7 + skillIndex * 0.1}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <a
                    href={member.social.github}
                    className="text-gray-400 hover:text-gray-600 transition-colors duration-200 animate-scaleIn animation-delay-800"
                  >
                    <Github className="h-5 w-5 hover:animate-bounce" />
                  </a>
                  <a
                    href={member.social.linkedin}
                    className="text-gray-400 hover:text-blue-600 transition-colors duration-200 animate-scaleIn animation-delay-900"
                  >
                    <Linkedin className="h-5 w-5 hover:animate-bounce" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 animate-scaleIn animation-delay-1000"
                  >
                    <Twitter className="h-5 w-5 hover:animate-bounce" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-xl p-8 text-center shadow-sm border border-gray-200 dark:border-gray-700 scale-in-section">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 animate-bounceInDown">
            Join Our Leadership Team
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto animate-fadeInUp animation-delay-300">
            We're always looking for passionate students to help lead our community. Whether you're into development,
            design, marketing, or event planning – we have a place for you!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
            <div className="p-4 bg-blue-50 rounded-lg card-hover-subtle animate-slideInLeft stagger-child">
              <h4 className="font-semibold text-blue-900 mb-2">Developer Roles</h4>
              <p className="text-blue-700">Lead technical workshops and mentor junior developers</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg card-hover-subtle animate-slideInUp stagger-child">
              <h4 className="font-semibold text-purple-900 mb-2">Design Roles</h4>
              <p className="text-purple-700">Create amazing visuals and improve user experiences</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg card-hover-subtle animate-slideInDown stagger-child">
              <h4 className="font-semibold text-green-900 mb-2">Content Roles</h4>
              <p className="text-green-700">Write tutorials, manage social media, and create resources</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg card-hover-subtle animate-slideInRight stagger-child">
              <h4 className="font-semibold text-blue-900 mb-2">Outreach Roles</h4>
              <p className="text-blue-700">Build partnerships and grow our community reach</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
