import React, { useState } from 'react'
import { Search, Filter, ExternalLink, Star, Clock, DollarSign, BookOpen, Video, Code, Award } from 'lucide-react'
import { motion } from 'framer-motion'

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedType, setSelectedType] = useState('all')

  const categories = [
    { id: 'all', name: 'All Categories', icon: <BookOpen className="h-4 w-4" /> },
    { id: 'frontend', name: 'Frontend', icon: <Code className="h-4 w-4" /> },
    { id: 'backend', name: 'Backend', icon: <Code className="h-4 w-4" /> },
    { id: 'data', name: 'Data Science', icon: <Award className="h-4 w-4" /> },
    { id: 'design', name: 'UI/UX Design', icon: <Star className="h-4 w-4" /> },
    { id: 'career', name: 'Career Prep', icon: <Award className="h-4 w-4" /> }
  ]

  const types = [
    { id: 'all', name: 'All Types' },
    { id: 'course', name: 'Courses' },
    { id: 'tutorial', name: 'Tutorials' },
    { id: 'book', name: 'Books' },
    { id: 'tool', name: 'Tools' },
    { id: 'community', name: 'Communities' }
  ]

  const resources = [
    {
      id: 1,
      title: 'freeCodeCamp',
      description: 'Learn to code for free with interactive lessons and projects',
      category: 'frontend',
      type: 'course',
      url: 'https://freecodecamp.org',
      rating: 4.9,
      duration: 'Self-paced',
      price: 'Free',
      level: 'Beginner to Advanced',
      tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: 2,
      title: 'The Odin Project',
      description: 'A free full-stack curriculum supported by an open source community',
      category: 'frontend',
      type: 'course',
      url: 'https://theodinproject.com',
      rating: 4.8,
      duration: '6-9 months',
      price: 'Free',
      level: 'Beginner to Intermediate',
      tags: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'Rails'],
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: 3,
      title: 'Coursera - Google Data Analytics',
      description: 'Professional certificate program to become a data analyst',
      category: 'data',
      type: 'course',
      url: 'https://coursera.org',
      rating: 4.7,
      duration: '3-6 months',
      price: 'Free (audit)',
      level: 'Beginner',
      tags: ['SQL', 'R', 'Tableau', 'Excel', 'Data Viz'],
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: 4,
      title: 'MDN Web Docs',
      description: 'Comprehensive documentation for web technologies',
      category: 'frontend',
      type: 'tutorial',
      url: 'https://developer.mozilla.org',
      rating: 4.9,
      duration: 'Reference',
      price: 'Free',
      level: 'All Levels',
      tags: ['HTML', 'CSS', 'JavaScript', 'Web APIs'],
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: 5,
      title: 'Women Who Code',
      description: 'Global nonprofit dedicated to inspiring women to excel in technology careers',
      category: 'career',
      type: 'community',
      url: 'https://womenwhocode.com',
      rating: 4.8,
      duration: 'Ongoing',
      price: 'Free',
      level: 'All Levels',
      tags: ['Networking', 'Mentorship', 'Events', 'Support'],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: 6,
      title: 'Figma',
      description: 'Free design tool for creating user interfaces and prototypes',
      category: 'design',
      type: 'tool',
      url: 'https://figma.com',
      rating: 4.7,
      duration: 'Tool',
      price: 'Free tier',
      level: 'Beginner to Advanced',
      tags: ['UI Design', 'Prototyping', 'Collaboration'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: 7,
      title: 'Eloquent JavaScript',
      description: 'A modern introduction to programming and JavaScript',
      category: 'frontend',
      type: 'book',
      url: 'https://eloquentjavascript.net',
      rating: 4.6,
      duration: '4-6 weeks',
      price: 'Free online',
      level: 'Beginner to Intermediate',
      tags: ['JavaScript', 'Programming', 'Fundamentals'],
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: 8,
      title: 'Python.org Tutorial',
      description: 'Official Python tutorial for beginners',
      category: 'backend',
      type: 'tutorial',
      url: 'https://docs.python.org/3/tutorial/',
      rating: 4.5,
      duration: '2-4 weeks',
      price: 'Free',
      level: 'Beginner',
      tags: ['Python', 'Programming', 'Backend'],
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: 9,
      title: 'GitHub Student Pack',
      description: 'Free developer tools and resources for students',
      category: 'career',
      type: 'tool',
      url: 'https://education.github.com/pack',
      rating: 4.9,
      duration: 'While student',
      price: 'Free for students',
      level: 'All Levels',
      tags: ['Tools', 'Student', 'Development', 'Free'],
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: 10,
      title: 'Codecademy',
      description: 'Interactive coding lessons and projects',
      category: 'frontend',
      type: 'course',
      url: 'https://codecademy.com',
      rating: 4.4,
      duration: 'Self-paced',
      price: 'Free tier + Pro',
      level: 'Beginner to Intermediate',
      tags: ['HTML', 'CSS', 'JavaScript', 'Python', 'SQL'],
      image: 'https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: 11,
      title: 'Google UX Design Certificate',
      description: 'Professional certificate to start a career in UX design',
      category: 'design',
      type: 'course',
      url: 'https://coursera.org',
      rating: 4.6,
      duration: '3-6 months',
      price: 'Free (audit)',
      level: 'Beginner',
      tags: ['UX Design', 'User Research', 'Prototyping', 'Figma'],
      image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: 12,
      title: 'Stack Overflow',
      description: 'Q&A community for programmers and developers',
      category: 'career',
      type: 'community',
      url: 'https://stackoverflow.com',
      rating: 4.7,
      duration: 'Ongoing',
      price: 'Free',
      level: 'All Levels',
      tags: ['Q&A', 'Community', 'Problem Solving', 'Help'],
      image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    }
  ]

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory
    const matchesType = selectedType === 'all' || resource.type === selectedType
    
    return matchesSearch && matchesCategory && matchesType
  })

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'course': return <Video className="h-4 w-4" />
      case 'tutorial': return <BookOpen className="h-4 w-4" />
      case 'book': return <BookOpen className="h-4 w-4" />
      case 'tool': return <Code className="h-4 w-4" />
      case 'community': return <Star className="h-4 w-4" />
      default: return <BookOpen className="h-4 w-4" />
    }
  }

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
            Free Learning <span className="gradient-text">Resources</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Curated collection of high-quality, accessible resources to help you build your tech skills. 
            Most resources are completely free, because everyone deserves access to quality education.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search resources, skills, or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.icon}
                  <span>{category.name}</span>
                </button>
              ))}
            </div>

            {/* Type Filter */}
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {types.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.name}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredResources.length} resources
            {searchTerm && ` for "${searchTerm}"`}
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden card-hover"
            >
              <div className="relative">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    resource.price === 'Free' || resource.price.includes('Free')
                      ? 'bg-success-100 text-success-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {resource.price}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{resource.rating}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold">{resource.title}</h3>
                  <div className="flex items-center space-x-1 text-gray-500">
                    {getTypeIcon(resource.type)}
                  </div>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {resource.description}
                </p>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1 text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span>{resource.duration}</span>
                    </div>
                    <span className="text-primary-600 font-medium">{resource.level}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {resource.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {resource.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                      +{resource.tags.length - 3} more
                    </span>
                  )}
                </div>

                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-primary flex items-center justify-center"
                >
                  Access Resource
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredResources.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">No resources found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('all')
                setSelectedType('all')
              }}
              className="btn-primary"
            >
              Clear Filters
            </button>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl p-8 text-center"
        >
          <h3 className="text-2xl font-semibold mb-4">Need Personalized Guidance? 🎯</h3>
          <p className="text-lg mb-6 opacity-90">
            Take our assessment to get a customized learning path with resources tailored to your goals and background.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/assessment" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
              Take Assessment
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

export default Resources