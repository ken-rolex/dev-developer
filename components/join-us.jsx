import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Users, MessageCircle, Instagram, Github } from "lucide-react"

export default function JoinUs() {
  return (
    <section id="join" className="py-20 bg-slate-900 dark:bg-slate-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-flipInY">Join Our Community</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto animate-fadeInUp animation-delay-300">
            Ready to connect with fellow developers? Apply to join our vibrant community and start building amazing
            things together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Application Form */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 slide-in-left">
            <div className="flex items-center gap-3 mb-8">
              <Users className="h-6 w-6 text-white animate-bounceIn" />
              <h3 className="text-2xl font-bold text-white animate-fadeInRight animation-delay-200">Apply to Join</h3>
            </div>

            <form className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="animate-slideInLeft animation-delay-300">
                  <label className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
                  <Input
                    placeholder="John Doe"
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-purple-500 focus:ring-purple-500/20"
                  />
                </div>
                <div className="animate-slideInRight animation-delay-400">
                  <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="john@university.edu"
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-purple-500 focus:ring-purple-500/20"
                  />
                </div>
              </div>

              {/* University and Academic Year Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="animate-slideInLeft animation-delay-500">
                  <label className="block text-sm font-medium text-slate-300 mb-2">University</label>
                  <Input
                    placeholder="Stanford University"
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-purple-500 focus:ring-purple-500/20"
                  />
                </div>
                <div className="animate-slideInRight animation-delay-600">
                  <label className="block text-sm font-medium text-slate-300 mb-2">Academic Year</label>
                  <Select>
                    <SelectTrigger className="bg-slate-700/50 border-slate-600 text-white focus:border-purple-500 focus:ring-purple-500/20 data-[state=open]:border-purple-500">
                      <SelectValue placeholder="Select your year" className="text-white" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-slate-600 text-white">
                      <SelectItem
                        value="freshman"
                        className="text-white hover:bg-slate-700 focus:bg-slate-700 focus:text-white data-[highlighted]:bg-slate-700 data-[highlighted]:text-white"
                      >
                        Freshman
                      </SelectItem>
                      <SelectItem
                        value="sophomore"
                        className="text-white hover:bg-slate-700 focus:bg-slate-700 focus:text-white data-[highlighted]:bg-slate-700 data-[highlighted]:text-white"
                      >
                        Sophomore
                      </SelectItem>
                      <SelectItem
                        value="junior"
                        className="text-white hover:bg-slate-700 focus:bg-slate-700 focus:text-white data-[highlighted]:bg-slate-700 data-[highlighted]:text-white"
                      >
                        Junior
                      </SelectItem>
                      <SelectItem
                        value="senior"
                        className="text-white hover:bg-slate-700 focus:bg-slate-700 focus:text-white data-[highlighted]:bg-slate-700 data-[highlighted]:text-white"
                      >
                        Senior
                      </SelectItem>
                      <SelectItem
                        value="graduate"
                        className="text-white hover:bg-slate-700 focus:bg-slate-700 focus:text-white data-[highlighted]:bg-slate-700 data-[highlighted]:text-white"
                      >
                        Graduate
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Areas of Interest */}
              <div className="animate-fadeInUp animation-delay-700">
                <label className="block text-sm font-medium text-slate-300 mb-2">Areas of Interest</label>
                <Input
                  placeholder="Web Development, AI/ML, Mobile Apps, etc"
                  className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-purple-500 focus:ring-purple-500/20"
                />
              </div>

              {/* Experience Level */}
              <div className="animate-fadeInUp animation-delay-800">
                <label className="block text-sm font-medium text-slate-300 mb-2">Experience Level</label>
                <Select>
                  <SelectTrigger className="bg-slate-700/50 border-slate-600 text-white focus:border-purple-500 focus:ring-purple-500/20 data-[state=open]:border-purple-500">
                    <SelectValue placeholder="Select your experience level" className="text-white" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-slate-600 text-white">
                    <SelectItem
                      value="beginner"
                      className="text-white hover:bg-slate-700 focus:bg-slate-700 focus:text-white data-[highlighted]:bg-slate-700 data-[highlighted]:text-white"
                    >
                      Beginner
                    </SelectItem>
                    <SelectItem
                      value="intermediate"
                      className="text-white hover:bg-slate-700 focus:bg-slate-700 focus:text-white data-[highlighted]:bg-slate-700 data-[highlighted]:text-white"
                    >
                      Intermediate
                    </SelectItem>
                    <SelectItem
                      value="advanced"
                      className="text-white hover:bg-slate-700 focus:bg-slate-700 focus:text-white data-[highlighted]:bg-slate-700 data-[highlighted]:text-white"
                    >
                      Advanced
                    </SelectItem>
                    <SelectItem
                      value="expert"
                      className="text-white hover:bg-slate-700 focus:bg-slate-700 focus:text-white data-[highlighted]:bg-slate-700 data-[highlighted]:text-white"
                    >
                      Expert
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Why Join */}
              <div className="animate-fadeInUp animation-delay-900">
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Why do you want to join? (Optional)
                </label>
                <Textarea
                  placeholder="Tell us about your goals and what you hope to achieve..."
                  rows={4}
                  className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-purple-500 focus:ring-purple-500/20 resize-none"
                />
              </div>

              <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white py-3 text-lg font-semibold rounded-xl border-0 btn-animate animate-bounceIn animation-delay-1000">
                Submit Application
              </Button>
            </form>
          </div>

          {/* Benefits Section */}
          <div className="space-y-8 slide-in-right">
            {/* What You'll Get */}
            <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-8 text-white animate-scaleIn animation-delay-300">
              <h3 className="text-2xl font-bold mb-8 animate-bounceInDown">What You'll Get</h3>

              <div className="space-y-6">
                <div className="animate-fadeInLeft stagger-child">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <h4 className="text-lg font-semibold">Skill Development</h4>
                  </div>
                  <p className="text-purple-100 ml-5">Learn from industry experts and experienced peers</p>
                </div>

                <div className="animate-fadeInLeft stagger-child">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <h4 className="text-lg font-semibold">Project Experience</h4>
                  </div>
                  <p className="text-purple-100 ml-5">Build real applications with a supportive team</p>
                </div>

                <div className="animate-fadeInLeft stagger-child">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <h4 className="text-lg font-semibold">Networking</h4>
                  </div>
                  <p className="text-purple-100 ml-5">Connect with future colleagues and industry professionals</p>
                </div>

                <div className="animate-fadeInLeft stagger-child">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <h4 className="text-lg font-semibold">Career Support</h4>
                  </div>
                  <p className="text-purple-100 ml-5">Resume reviews, interview prep, and job referrals</p>
                </div>

                <div className="animate-fadeInLeft stagger-child">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <h4 className="text-lg font-semibold">Exclusive Resources</h4>
                  </div>
                  <p className="text-purple-100 ml-5">Access to premium courses, tools, and learning materials</p>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 animate-scaleIn animation-delay-500">
              <h3 className="text-xl font-bold text-white mb-6 animate-bounceInDown">Quick Stats</h3>

              <div className="grid grid-cols-2 gap-8">
                <div className="text-center animate-zoomIn animation-delay-600">
                  <div className="text-3xl font-bold text-white mb-2 animate-heartbeat">48h</div>
                  <div className="text-sm text-slate-400">Average response time</div>
                </div>
                <div className="text-center animate-zoomIn animation-delay-700">
                  <div className="text-3xl font-bold text-blue-400 mb-2 animate-heartbeat">90%</div>
                  <div className="text-sm text-slate-400">Acceptance rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Connect With Us - Image Style */}
        <div className="text-center mb-12 scale-in-section">
          <h3 className="text-3xl font-bold text-white mb-4 animate-rotateIn">Join Our Community</h3>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-12 animate-fadeInUp animation-delay-300">
            Ready to connect with fellow developers? Join our vibrant community through your favorite platform and start
            building amazing things together!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* WhatsApp */}
            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 text-white card-hover-intense animate-bounceInUp stagger-item shadow-xl">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-float">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-4">WhatsApp</h4>
              <p className="text-green-100 mb-6 leading-relaxed">
                Join our active WhatsApp community for instant updates and quick discussions.
              </p>
              <Button className="w-full bg-green-500 hover:bg-green-400 text-white border-0 rounded-xl py-3 font-semibold btn-animate">
                <MessageCircle className="h-4 w-4 mr-2" />
                Join Group
              </Button>
            </div>

            {/* Discord */}
            <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-8 text-white card-hover-intense animate-bounceInUp stagger-item shadow-xl">
              <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-float animation-delay-200">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-4">Discord</h4>
              <p className="text-indigo-100 mb-6 leading-relaxed">
                Connect on Discord for voice chats, screen sharing, and coding sessions.
              </p>
              <Button className="w-full bg-indigo-500 hover:bg-indigo-400 text-white border-0 rounded-xl py-3 font-semibold btn-animate">
                <MessageCircle className="h-4 w-4 mr-2" />
                Join Server
              </Button>
            </div>

            {/* Instagram */}
            <div className="bg-gradient-to-br from-pink-600 to-rose-700 rounded-2xl p-8 text-white card-hover-intense animate-bounceInUp stagger-item shadow-xl">
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-float animation-delay-400">
                <Instagram className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-4">Instagram</h4>
              <p className="text-pink-100 mb-6 leading-relaxed">
                Follow us for behind-the-scenes content, event highlights, and showcases.
              </p>
              <Button className="w-full bg-pink-500 hover:bg-pink-400 text-white border-0 rounded-xl py-3 font-semibold btn-animate">
                <Instagram className="h-4 w-4 mr-2" />
                Follow Us
              </Button>
            </div>

            {/* GitHub */}
            <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl p-8 text-white card-hover-intense animate-bounceInUp stagger-item shadow-xl">
              <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-float animation-delay-600">
                <Github className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold mb-4">GitHub</h4>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Contribute to our open-source projects and showcase your coding skills.
              </p>
              <Button className="w-full bg-gray-600 hover:bg-gray-500 text-white border-0 rounded-xl py-3 font-semibold btn-animate">
                <Github className="h-4 w-4 mr-2" />
                Follow Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
