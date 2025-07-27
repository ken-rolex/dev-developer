"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageCircle, Twitter, Instagram, Github, MapPin } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-flipInX">
            Let's Connect!
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fadeInUp animation-delay-300">
            Have questions? Want to collaborate? Or just want to say hi? We'd love to hear from you and build something
            amazing together! 🚀
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700 slide-in-left">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 animate-bounceInLeft">
              Send us a Message
            </h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              {submitStatus === 'success' && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                  Failed to send message. Please try again.
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="animate-slideInLeft animation-delay-300">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500/20 focus:ring-2 transition-all duration-200"
                  />
                </div>
                <div className="animate-slideInRight animation-delay-400">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500/20 focus:ring-2 transition-all duration-200"
                  />
                </div>
              </div>

              <div className="animate-fadeInUp animation-delay-500">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                  className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500/20 focus:ring-2 transition-all duration-200"
                />
              </div>

              <div className="animate-fadeInUp animation-delay-600">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us what's on your mind..."
                  rows={5}
                  required
                  className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500/20 focus:ring-2 resize-none transition-all duration-200"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 btn-animate animate-bounceIn animation-delay-700 disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="slide-in-right">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 animate-bounceInRight">
              Get in Touch
            </h3>

            <div className="space-y-6">
              <div className="flex items-center animate-fadeInRight stagger-child">
                <div className="bg-blue-100 rounded-full p-3 mr-4 animate-bounceIn">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Email Us</h4>
                  <p className="text-gray-600 dark:text-gray-300">hello@devcommunity.org</p>
                </div>
              </div>

              <div className="flex items-center animate-fadeInRight stagger-child">
                <div className="bg-purple-100 rounded-full p-3 mr-4 animate-bounceIn animation-delay-200">
                  <MessageCircle className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Discord Server</h4>
                  <p className="text-gray-600 dark:text-gray-300">Join our active community chat</p>
                </div>
              </div>

              <div className="flex items-center animate-fadeInRight stagger-child">
                <div className="bg-green-100 rounded-full p-3 mr-4 animate-bounceIn animation-delay-400">
                  <MapPin className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Location</h4>
                  <p className="text-gray-600 dark:text-gray-300">University Campus, Tech Building</p>
                </div>
              </div>
            </div>

            <div className="mt-8 animate-fadeInUp animation-delay-600">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors btn-animate animate-bounceIn stagger-child"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition-colors btn-animate animate-bounceIn stagger-child"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-900 transition-colors btn-animate animate-bounceIn stagger-child"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="bg-purple-600 text-white p-3 rounded-full hover:bg-purple-700 transition-colors btn-animate animate-bounceIn stagger-child"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl animate-scaleIn animation-delay-800">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 animate-bounceInDown">
                Quick Response Promise
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-2 animate-fadeInLeft stagger-child">
                📧 <strong>Email:</strong> We respond within 24 hours
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-2 animate-fadeInLeft stagger-child">
                💬 <strong>Discord:</strong> Usually within a few hours
              </p>
              <p className="text-gray-600 dark:text-gray-300 animate-fadeInLeft stagger-child">
                🚀 <strong>Urgent matters:</strong> Reach out on multiple channels
              </p>
            </div>

            <div className="mt-6 text-center animate-bounceIn animation-delay-1000">
              <p className="text-lg text-gray-700 dark:text-gray-300 font-medium animate-pulse">
                "Let's connect and build something amazing!" ✨
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
