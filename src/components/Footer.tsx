import React from 'react'
import { Heart, Github, Twitter, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">AI Ally</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering underrepresented individuals to break into tech through personalized guidance, 
              inclusive resources, and supportive community connections.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/assessment" className="text-gray-300 hover:text-white transition-colors">Career Assessment</a></li>
              <li><a href="/learning-path" className="text-gray-300 hover:text-white transition-colors">Learning Paths</a></li>
              <li><a href="/resources" className="text-gray-300 hover:text-white transition-colors">Free Resources</a></li>
              <li><a href="/community" className="text-gray-300 hover:text-white transition-colors">Community</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="/mentorship" className="text-gray-300 hover:text-white transition-colors">Find a Mentor</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 AI Ally. Made with ❤️ for breaking barriers in tech.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer