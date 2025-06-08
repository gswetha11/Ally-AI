import React, { useState } from 'react'
import { Search, Filter, Star, MapPin, Clock, MessageCircle, Award, Users, Heart, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const Mentorship = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedExpertise, setSelectedExpertise] = useState('all')
  const [selectedAvailability, setSelectedAvailability] = useState('all')

  const expertiseAreas = [
    { id: 'all', name: 'All Areas' },
    { id: 'frontend', name: 'Frontend Development' },
    { id: 'backend', name: 'Backend Development' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'data', name: 'Data Science' },
    { id: 'design', name: 'UI/UX Design' },
    { id: 'mobile', name: 'Mobile Development' },
    { id: 'career', name: 'Career Transition' }
  ]

  const availabilityOptions = [
    { id: 'all', name: 'Any Availability' },
    { id: 'weekly', name: 'Weekly Sessions' },
    { id: 'biweekly', name: 'Bi-weekly Sessions' },
    { id: 'monthly', name: 'Monthly Check-ins' },
    { id: 'asneeded', name: 'As Needed' }
  ]

  const mentors = [
    {
      id: 1,
      name: 'Sarah Kim',
      role: 'Senior Frontend Engineer',
      company: 'Google',
      expertise: ['frontend', 'career'],
      experience: '8 years',
      location: 'San Francisco, CA',
      availability: 'weekly',
      rating: 4.9,
      reviews: 47,
      languages: ['English', 'Korean'],
      bio: 'Passionate about helping women break into tech. Specializes in React, JavaScript, and career transitions from non-tech backgrounds.',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      mentees: 23,
      successStories: 'Helped 15+ women land their first tech jobs',
      focusAreas: ['Technical Skills', 'Interview Prep', 'Career Planning'],
      price: 'Free',
      responseTime: '< 24 hours'
    },
    {
      id: 2,
      name: 'Maria Rodriguez',
      role: 'Data Science Manager',
      company: 'Netflix',
      expertise: ['data', 'career'],
      experience: '10 years',
      location: 'Los Angeles, CA',
      availability: 'biweekly',
      rating: 4.8,
      reviews: 32,
      languages: ['English', 'Spanish'],
      bio: 'Former marketing professional turned data scientist. Loves helping career changers navigate the transition to data science.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      mentees: 18,
      successStories: 'Guided 12 career changers into data roles',
      focusAreas: ['Python/R', 'SQL', 'Portfolio Building'],
      price: 'Free',
      responseTime: '< 48 hours'
    },
    {
      id: 3,
      name: 'Aisha Johnson',
      role: 'Principal UX Designer',
      company: 'Airbnb',
      expertise: ['design', 'career'],
      experience: '12 years',
      location: 'New York, NY',
      availability: 'monthly',
      rating: 4.9,
      reviews: 28,
      languages: ['English'],
      bio: 'Self-taught designer who climbed from junior to principal level. Passionate about design systems and inclusive design practices.',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      mentees: 15,
      successStories: 'Mentored 10+ designers to senior roles',
      focusAreas: ['Design Systems', 'User Research', 'Leadership'],
      price: 'Free',
      responseTime: '< 72 hours'
    },
    {
      id: 4,
      name: 'Priya Patel',
      role: 'Full Stack Developer',
      company: 'Stripe',
      expertise: ['fullstack', 'backend'],
      experience: '6 years',
      location: 'Austin, TX',
      availability: 'weekly',
      rating: 4.7,
      reviews: 41,
      languages: ['English', 'Hindi'],
      bio: 'Bootcamp graduate who now mentors others through their coding journey. Specializes in JavaScript, Node.js, and system design.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      mentees: 31,
      successStories: 'Helped 20+ bootcamp grads get hired',
      focusAreas: ['Full Stack Development', 'System Design', 'Job Search'],
      price: 'Free',
      responseTime: '< 24 hours'
    },
    {
      id: 5,
      name: 'Jennifer Chen',
      role: 'Mobile Engineering Lead',
      company: 'Uber',
      expertise: ['mobile', 'career'],
      experience: '9 years',
      location: 'Seattle, WA',
      availability: 'biweekly',
      rating: 4.8,
      reviews: 25,
      languages: ['English', 'Mandarin'],
      bio: 'iOS and Android expert who transitioned from web development. Helps developers expand their skill set into mobile.',
      image: 'https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      mentees: 19,
      successStories: 'Guided 14 web devs into mobile roles',
      focusAreas: ['iOS/Android', 'React Native', 'App Architecture'],
      price: 'Free',
      responseTime: '< 48 hours'
    },
    {
      id: 6,
      name: 'Lisa Thompson',
      role: 'Engineering Director',
      company: 'Microsoft',
      expertise: ['career', 'fullstack'],
      experience: '15 years',
      location: 'Redmond, WA',
      availability: 'monthly',
      rating: 4.9,
      reviews: 19,
      languages: ['English'],
      bio: 'From individual contributor to director. Passionate about helping women advance to leadership roles in tech.',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      mentees: 12,
      successStories: 'Coached 8 women into leadership roles',
      focusAreas: ['Leadership', 'Career Growth', 'Technical Strategy'],
      price: 'Free',
      responseTime: '< 72 hours'
    }
  ]

  const filteredMentors = mentors.filter(mentor => {
    const matchesSearch = mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mentor.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mentor.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mentor.bio.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesExpertise = selectedExpertise === 'all' || mentor.expertise.includes(selectedExpertise)
    const matchesAvailability = selectedAvailability === 'all' || mentor.availability === selectedAvailability
    
    return matchesSearch && matchesExpertise && matchesAvailability
  })

  const mentorshipBenefits = [
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Personalized Guidance',
      description: 'Get tailored advice based on your unique background and career goals'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Industry Insights',
      description: 'Learn from professionals who understand the current tech landscape'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Emotional Support',
      description: 'Navigate challenges with someone who has walked a similar path'
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: 'Accountability',
      description: 'Stay motivated and on track with regular check-ins and goal setting'
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
            Find Your <span className="gradient-text">Tech Mentor</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with experienced professionals who understand your journey and are passionate 
            about helping underrepresented individuals succeed in tech.
          </p>
        </motion.div>

        {/* Benefits Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Why Mentorship Matters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mentorshipBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg text-center card-hover"
              >
                <div className="bg-gradient-to-r from-primary-500 to-secondary-500 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 text-white">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search mentors by name, role, or company..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Expertise Filter */}
            <select
              value={selectedExpertise}
              onChange={(e) => setSelectedExpertise(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {expertiseAreas.map((area) => (
                <option key={area.id} value={area.id}>
                  {area.name}
                </option>
              ))}
            </select>

            {/* Availability Filter */}
            <select
              value={selectedAvailability}
              onChange={(e) => setSelectedAvailability(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {availabilityOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredMentors.length} mentors
            {searchTerm && ` for "${searchTerm}"`}
          </p>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredMentors.map((mentor, index) => (
            <motion.div
              key={mentor.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden card-hover"
            >
              <div className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{mentor.name}</h3>
                    <p className="text-gray-600 text-sm">{mentor.role}</p>
                    <p className="text-primary-600 text-sm font-medium">{mentor.company}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1 mb-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{mentor.rating}</span>
                    </div>
                    <p className="text-xs text-gray-500">({mentor.reviews} reviews)</p>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {mentor.bio}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Experience:</span>
                    <span className="font-medium">{mentor.experience}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Mentees:</span>
                    <span className="font-medium">{mentor.mentees}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Response Time:</span>
                    <span className="font-medium">{mentor.responseTime}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium mb-2 text-sm">Focus Areas:</h4>
                  <div className="flex flex-wrap gap-1">
                    {mentor.focusAreas.map((area) => (
                      <span
                        key={area}
                        className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-3 w-3" />
                      <span>{mentor.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{availabilityOptions.find(opt => opt.id === mentor.availability)?.name}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-success-50 p-3 rounded-lg mb-4">
                  <p className="text-success-700 text-sm font-medium">
                    ✨ {mentor.successStories}
                  </p>
                </div>

                <button className="w-full btn-primary flex items-center justify-center">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Connect with {mentor.name.split(' ')[0]}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredMentors.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">No mentors found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search terms or filters to find the right mentor for you.
            </p>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedExpertise('all')
                setSelectedAvailability('all')
              }}
              className="btn-primary"
            >
              Clear Filters
            </button>
          </motion.div>
        )}

        {/* How It Works */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-16"
        >
          <h2 className="text-2xl font-bold text-center mb-8">How Mentorship Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                1
              </div>
              <h3 className="font-semibold mb-2">Browse & Connect</h3>
              <p className="text-gray-600 text-sm">Find mentors that match your goals and send a connection request</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                2
              </div>
              <h3 className="font-semibold mb-2">Initial Chat</h3>
              <p className="text-gray-600 text-sm">Have a brief conversation to ensure you're a good fit</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                3
              </div>
              <h3 className="font-semibold mb-2">Set Goals</h3>
              <p className="text-gray-600 text-sm">Work together to define clear, achievable objectives</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                4
              </div>
              <h3 className="font-semibold mb-2">Regular Sessions</h3>
              <p className="text-gray-600 text-sm">Meet regularly to track progress and get guidance</p>
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
          <h3 className="text-2xl font-semibold mb-4">Ready to Accelerate Your Growth? 🚀</h3>
          <p className="text-lg mb-6 opacity-90">
            Don't navigate your tech journey alone. Connect with a mentor who believes in your potential 
            and wants to see you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/assessment" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
              Find My Path First
            </a>
            <a href="/community" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-6 rounded-lg transition-all duration-300">
              Join Community
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Mentorship