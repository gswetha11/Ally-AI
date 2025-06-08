import React, { useState, useEffect } from 'react'
import { CheckCircle, Clock, BookOpen, ExternalLink, Star, Award } from 'lucide-react'
import { motion } from 'framer-motion'

interface LearningPathData {
  name: string
  goal: string
  timeCommitment: string
  budget: string
  experience: string
}

const LearningPath = () => {
  const [pathData, setPathData] = useState<LearningPathData | null>(null)
  const [completedSteps, setCompletedSteps] = useState<number[]>([])

  useEffect(() => {
    const savedData = localStorage.getItem('assessmentData')
    if (savedData) {
      setPathData(JSON.parse(savedData))
    }
  }, [])

  const toggleStepCompletion = (stepIndex: number) => {
    setCompletedSteps(prev => 
      prev.includes(stepIndex) 
        ? prev.filter(i => i !== stepIndex)
        : [...prev, stepIndex]
    )
  }

  const generateLearningPath = (data: LearningPathData) => {
    const basePath = {
      'Frontend Developer': {
        title: 'Frontend Developer Path',
        description: 'Master the art of creating beautiful, interactive web applications',
        duration: '4-6 months',
        steps: [
          {
            title: 'HTML & CSS Fundamentals',
            duration: '2-3 weeks',
            description: 'Learn the building blocks of web development',
            resources: [
              { name: 'HTML Crash Course - Traversy Media', url: '#', type: 'YouTube', free: true },
              { name: 'CSS Grid & Flexbox - freeCodeCamp', url: '#', type: 'Course', free: true },
              { name: 'Responsive Web Design - freeCodeCamp', url: '#', type: 'Certification', free: true }
            ],
            projects: ['Personal Portfolio Page', 'Responsive Landing Page']
          },
          {
            title: 'JavaScript Essentials',
            duration: '3-4 weeks',
            description: 'Master the programming language of the web',
            resources: [
              { name: 'JavaScript Basics - Mozilla MDN', url: '#', type: 'Documentation', free: true },
              { name: 'JavaScript30 - Wes Bos', url: '#', type: 'Course', free: true },
              { name: 'Eloquent JavaScript (Book)', url: '#', type: 'Book', free: true }
            ],
            projects: ['Calculator App', 'To-Do List', 'Weather App']
          },
          {
            title: 'React Framework',
            duration: '4-5 weeks',
            description: 'Build dynamic user interfaces with React',
            resources: [
              { name: 'React Official Tutorial', url: '#', type: 'Tutorial', free: true },
              { name: 'React Course - Scrimba', url: '#', type: 'Course', free: false },
              { name: 'React Hooks - YouTube', url: '#', type: 'YouTube', free: true }
            ],
            projects: ['Movie Search App', 'E-commerce Product Page', 'Social Media Dashboard']
          },
          {
            title: 'Version Control & Deployment',
            duration: '1-2 weeks',
            description: 'Learn Git, GitHub, and how to deploy your projects',
            resources: [
              { name: 'Git & GitHub Crash Course', url: '#', type: 'YouTube', free: true },
              { name: 'Netlify Deployment Guide', url: '#', type: 'Documentation', free: true },
              { name: 'Vercel Deployment Tutorial', url: '#', type: 'Tutorial', free: true }
            ],
            projects: ['Deploy Portfolio to Netlify', 'Contribute to Open Source']
          },
          {
            title: 'Job Preparation',
            duration: '2-3 weeks',
            description: 'Polish your skills and prepare for interviews',
            resources: [
              { name: 'Frontend Interview Questions', url: '#', type: 'Resource', free: true },
              { name: 'Resume Templates for Developers', url: '#', type: 'Template', free: true },
              { name: 'Mock Interview Practice', url: '#', type: 'Practice', free: true }
            ],
            projects: ['Complete Portfolio Website', 'LinkedIn Profile Optimization']
          }
        ]
      },
      'Data Analyst': {
        title: 'Data Analyst Path',
        description: 'Transform data into actionable insights for business decisions',
        duration: '3-5 months',
        steps: [
          {
            title: 'Excel & Google Sheets Mastery',
            duration: '2-3 weeks',
            description: 'Master spreadsheet tools for data analysis',
            resources: [
              { name: 'Excel for Data Analysis - ExcelJet', url: '#', type: 'Course', free: true },
              { name: 'Google Sheets Functions Guide', url: '#', type: 'Documentation', free: true },
              { name: 'Data Analysis with Excel - Coursera', url: '#', type: 'Course', free: true }
            ],
            projects: ['Sales Data Analysis', 'Budget Tracker Dashboard']
          },
          {
            title: 'SQL Database Fundamentals',
            duration: '3-4 weeks',
            description: 'Learn to query and manipulate databases',
            resources: [
              { name: 'SQL Basics - W3Schools', url: '#', type: 'Tutorial', free: true },
              { name: 'SQLBolt Interactive Lessons', url: '#', type: 'Interactive', free: true },
              { name: 'SQL for Data Science - Coursera', url: '#', type: 'Course', free: true }
            ],
            projects: ['Customer Database Analysis', 'Inventory Management Queries']
          },
          {
            title: 'Python for Data Analysis',
            duration: '4-5 weeks',
            description: 'Use Python libraries for data manipulation and analysis',
            resources: [
              { name: 'Python Basics - Python.org', url: '#', type: 'Tutorial', free: true },
              { name: 'Pandas Documentation', url: '#', type: 'Documentation', free: true },
              { name: 'Data Analysis with Python - freeCodeCamp', url: '#', type: 'Course', free: true }
            ],
            projects: ['COVID-19 Data Analysis', 'Stock Price Trends', 'Survey Data Insights']
          },
          {
            title: 'Data Visualization',
            duration: '2-3 weeks',
            description: 'Create compelling charts and dashboards',
            resources: [
              { name: 'Tableau Public Training', url: '#', type: 'Course', free: true },
              { name: 'Power BI Learning Path', url: '#', type: 'Course', free: true },
              { name: 'Matplotlib & Seaborn Tutorial', url: '#', type: 'Tutorial', free: true }
            ],
            projects: ['Interactive Sales Dashboard', 'Market Research Visualization']
          },
          {
            title: 'Portfolio & Job Search',
            duration: '2-3 weeks',
            description: 'Build your data portfolio and prepare for interviews',
            resources: [
              { name: 'Data Analyst Resume Guide', url: '#', type: 'Guide', free: true },
              { name: 'GitHub for Data Scientists', url: '#', type: 'Tutorial', free: true },
              { name: 'Data Interview Questions', url: '#', type: 'Resource', free: true }
            ],
            projects: ['Complete Data Portfolio', 'Case Study Presentation']
          }
        ]
      }
    }

    return basePath[data.goal as keyof typeof basePath] || basePath['Frontend Developer']
  }

  if (!pathData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 section-padding">
        <div className="container-max text-center">
          <h1 className="text-3xl font-bold mb-4">No Learning Path Found</h1>
          <p className="text-gray-600 mb-8">Please complete the assessment first to get your personalized learning path.</p>
          <a href="/assessment" className="btn-primary">Take Assessment</a>
        </div>
      </div>
    )
  }

  const learningPath = generateLearningPath(pathData)
  const progressPercentage = (completedSteps.length / learningPath.steps.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 section-padding">
      <div className="container-max max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">
            Welcome back, {pathData.name}! 👋
          </h1>
          <h2 className="text-2xl gradient-text font-semibold mb-4">
            Your Personalized {learningPath.title}
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            {learningPath.description}
          </p>
          
          {/* Progress Overview */}
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Award className="h-6 w-6 text-primary-600" />
                <span className="font-semibold">Progress</span>
              </div>
              <span className="text-2xl font-bold text-primary-600">
                {Math.round(progressPercentage)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
              <div
                className="bg-gradient-to-r from-primary-500 to-secondary-500 h-3 rounded-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-gray-800">{completedSteps.length}</div>
                <div className="text-sm text-gray-600">Completed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-800">{learningPath.steps.length - completedSteps.length}</div>
                <div className="text-sm text-gray-600">Remaining</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-800">{learningPath.duration}</div>
                <div className="text-sm text-gray-600">Est. Duration</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Motivational Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl p-6 mb-12 text-center"
        >
          <h3 className="text-xl font-semibold mb-2">💡 You've Got This!</h3>
          <p className="opacity-90">
            Remember, every expert was once a beginner. Your unique perspective and determination 
            are your superpowers. Take it one step at a time, and celebrate every small win! 🌟
          </p>
        </motion.div>

        {/* Learning Steps */}
        <div className="space-y-8">
          {learningPath.steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white rounded-xl shadow-lg overflow-hidden ${
                completedSteps.includes(index) ? 'ring-2 ring-success-500' : ''
              }`}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4">
                    <button
                      onClick={() => toggleStepCompletion(index)}
                      className={`mt-1 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                        completedSteps.includes(index)
                          ? 'bg-success-500 border-success-500 text-white'
                          : 'border-gray-300 hover:border-primary-500'
                      }`}
                    >
                      {completedSteps.includes(index) && <CheckCircle className="h-5 w-5" />}
                    </button>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Step {index + 1}: {step.title}
                      </h3>
                      <p className="text-gray-600 mb-3">{step.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{step.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <BookOpen className="h-4 w-4" />
                          <span>{step.resources.length} resources</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Resources */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">📚 Learning Resources</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {step.resources.map((resource, resourceIndex) => (
                      <div
                        key={resourceIndex}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-2 h-2 rounded-full ${resource.free ? 'bg-success-500' : 'bg-yellow-500'}`} />
                          <div>
                            <div className="font-medium text-sm">{resource.name}</div>
                            <div className="text-xs text-gray-500">{resource.type}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {resource.free && (
                            <span className="text-xs bg-success-100 text-success-700 px-2 py-1 rounded-full">
                              FREE
                            </span>
                          )}
                          <ExternalLink className="h-4 w-4 text-gray-400" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Projects */}
                <div>
                  <h4 className="font-semibold mb-3">🚀 Practice Projects</h4>
                  <div className="flex flex-wrap gap-2">
                    {step.projects.map((project, projectIndex) => (
                      <span
                        key={projectIndex}
                        className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm"
                      >
                        {project}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 bg-white rounded-xl shadow-lg p-8 text-center"
        >
          <h3 className="text-2xl font-semibold mb-4">Ready to Start Your Journey? 🎯</h3>
          <p className="text-gray-600 mb-6">
            Join our supportive community, find a mentor, and access additional resources to accelerate your learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/community" className="btn-primary">
              Join Community
            </a>
            <a href="/mentorship" className="btn-secondary">
              Find a Mentor
            </a>
            <a href="/resources" className="btn-secondary">
              More Resources
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default LearningPath