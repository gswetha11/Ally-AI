import React from 'react'
import { Users, MessageCircle, Calendar, Award, ExternalLink, Heart, Star, Globe } from 'lucide-react'
import { motion } from 'framer-motion'

const Community = () => {
  const communities = [
    {
      name: 'Women Who Code',
      description: 'Global nonprofit dedicated to inspiring women to excel in technology careers',
      members: '300K+',
      focus: 'All Tech Fields',
      type: 'Global Network',
      url: 'https://womenwhocode.com',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      features: ['Networking Events', 'Mentorship', 'Job Board', 'Study Groups'],
      rating: 4.9
    },
    {
      name: 'Black Girls CODE',
      description: 'Changing the face of technology by introducing girls of color to computer science',
      members: '50K+',
      focus: 'Youth & Education',
      type: 'Nonprofit',
      url: 'https://blackgirlscode.com',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      features: ['Workshops', 'Coding Camps', 'Mentorship', 'Scholarships'],
      rating: 4.8
    },
    {
      name: 'Latinas in Tech',
      description: 'Connecting, supporting and empowering Latina women working in technology',
      members: '25K+',
      focus: 'Latina Professionals',
      type: 'Professional Network',
      url: 'https://latinasintech.org',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      features: ['Career Support', 'Networking', 'Mentorship', 'Events'],
      rating: 4.7
    },
    {
      name: 'AnitaB.org',
      description: 'Connecting, inspiring, and guiding women in computing and organizations',
      members: '100K+',
      focus: 'Women in Computing',
      type: 'Professional Org',
      url: 'https://anitab.org',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      features: ['Grace Hopper Conference', 'Mentorship', 'Research', 'Advocacy'],
      rating: 4.8
    },
    {
      name: 'Code2040',
      description: 'Activating, connecting, and mobilizing the largest racial equity community in tech',
      members: '15K+',
      focus: 'Racial Equity',
      type: 'Nonprofit',
      url: 'https://code2040.org',
      image: 'https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      features: ['Fellowship Program', 'Career Support', 'Community', 'Advocacy'],
      rating: 4.6
    },
    {
      name: 'TechLadies',
      description: 'Community for women in tech in Asia to connect, learn, and advance together',
      members: '8K+',
      focus: 'Women in Asia',
      type: 'Regional Community',
      url: 'https://techladies.co',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      features: ['Bootcamp', 'Mentorship', 'Job Board', 'Networking'],
      rating: 4.7
    }
  ]

  const events = [
    {
      title: 'Women in Tech Virtual Meetup',
      date: 'Every Tuesday',
      time: '7:00 PM EST',
      type: 'Networking',
      description: 'Weekly virtual meetup for women in tech to share experiences and network',
      attendees: '50-100'
    },
    {
      title: 'Coding Workshop: React Basics',
      date: 'March 15, 2025',
      time: '2:00 PM EST',
      type: 'Workshop',
      description: 'Hands-on workshop for beginners to learn React fundamentals',
      attendees: '30'
    },
    {
      title: 'Career Panel: Breaking into Data Science',
      date: 'March 22, 2025',
      time: '6:00 PM EST',
      type: 'Panel',
      description: 'Panel discussion with data scientists sharing their career journeys',
      attendees: '200+'
    },
    {
      title: 'Mentorship Speed Networking',
      date: 'March 29, 2025',
      time: '5:00 PM EST',
      type: 'Mentorship',
      description: 'Connect with potential mentors and mentees in a structured format',
      attendees: '80'
    }
  ]

  const successStories = [
    {
      name: 'Sarah Chen',
      role: 'Software Engineer at Google',
      story: 'Through Women Who Code, I found my mentor who helped me prepare for technical interviews. Now I\'m paying it forward!',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      community: 'Women Who Code'
    },
    {
      name: 'Maria Rodriguez',
      role: 'Data Scientist at Netflix',
      story: 'The Latinas in Tech community gave me the confidence and connections I needed to transition from marketing to data science.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      community: 'Latinas in Tech'
    },
    {
      name: 'Aisha Johnson',
      role: 'UX Designer at Airbnb',
      story: 'Black Girls CODE inspired me to pursue tech as a teenager. Their mentorship program changed my life trajectory completely.',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      community: 'Black Girls CODE'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 section-padding">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">
            Find Your <span className="gradient-text">Tech Community</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with supportive communities, attend inspiring events, and build meaningful relationships 
            with people who understand your journey in tech.
          </p>
        </motion.div>

        {/* Communities Grid */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold mb-4">Inclusive Tech Communities</h2>
            <p className="text-gray-600">
              Join communities that celebrate diversity and provide support for underrepresented groups in tech
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communities.map((community, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden card-hover"
              >
                <div className="relative">
                  <img
                    src={community.image}
                    alt={community.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{community.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{community.name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {community.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Members:</span>
                      <span className="font-medium">{community.members}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Focus:</span>
                      <span className="font-medium">{community.focus}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Type:</span>
                      <span className="font-medium">{community.type}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium mb-2 text-sm">What they offer:</h4>
                    <div className="flex flex-wrap gap-1">
                      {community.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={community.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full btn-primary flex items-center justify-center"
                  >
                    Join Community
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-gray-600">
              Join virtual and in-person events to learn, network, and grow your career
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 card-hover"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{event.time}</span>
                      </div>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-secondary-100 text-secondary-700 text-sm rounded-full">
                    {event.type}
                  </span>
                </div>

                <p className="text-gray-600 mb-4">{event.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Users className="h-4 w-4" />
                    <span>{event.attendees} attendees</span>
                  </div>
                  <button className="btn-secondary text-sm py-2 px-4">
                    Register
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Success Stories */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold mb-4">Community Success Stories</h2>
            <p className="text-gray-600">
              Real stories from women who found their path through community support
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary-50 to-secondary-50 p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-semibold">{story.name}</div>
                    <div className="text-sm text-gray-600">{story.role}</div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">"{story.story}"</p>
                <div className="text-sm text-primary-600 font-medium">
                  via {story.community}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Community Guidelines */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Community Guidelines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Heart className="h-5 w-5 text-red-500 mr-2" />
                Our Values
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Inclusivity and respect for all backgrounds</li>
                <li>• Support and encouragement over competition</li>
                <li>• Constructive feedback and mentorship</li>
                <li>• Celebrating diverse perspectives and experiences</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Users className="h-5 w-5 text-primary-500 mr-2" />
                How to Engage
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Introduce yourself and share your goals</li>
                <li>• Ask questions and offer help to others</li>
                <li>• Attend events and participate actively</li>
                <li>• Share your journey and celebrate wins</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl p-8 text-center"
        >
          <h3 className="text-2xl font-semibold mb-4">Ready to Connect? 🤝</h3>
          <p className="text-lg mb-6 opacity-90">
            Your tech journey doesn't have to be lonely. Join a community that understands your challenges 
            and celebrates your successes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/assessment" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
              Find My Path
            </a>
            <a href="/mentorship" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-6 rounded-lg transition-all duration-300">
              Find a Mentor
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Community