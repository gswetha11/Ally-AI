import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronRight, ChevronLeft, User, Target, Clock, DollarSign } from 'lucide-react'
import { motion } from 'framer-motion'

interface AssessmentData {
  name: string
  background: string
  experience: string
  goal: string
  timeCommitment: string
  budget: string
  challenges: string[]
  interests: string[]
}

const Assessment = () => {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(0)
  const [assessmentData, setAssessmentData] = useState<AssessmentData>({
    name: '',
    background: '',
    experience: '',
    goal: '',
    timeCommitment: '',
    budget: '',
    challenges: [],
    interests: []
  })

  const steps = [
    {
      title: "Let's Get to Know You",
      icon: <User className="h-6 w-6" />,
      component: PersonalInfo
    },
    {
      title: "Your Tech Goals",
      icon: <Target className="h-6 w-6" />,
      component: Goals
    },
    {
      title: "Time & Resources",
      icon: <Clock className="h-6 w-6" />,
      component: Resources
    },
    {
      title: "Challenges & Interests",
      icon: <DollarSign className="h-6 w-6" />,
      component: Preferences
    }
  ]

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // Generate learning path and navigate
      localStorage.setItem('assessmentData', JSON.stringify(assessmentData))
      navigate('/learning-path')
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const updateAssessmentData = (field: string, value: any) => {
    setAssessmentData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const CurrentStepComponent = steps[currentStep].component

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 section-padding">
      <div className="container-max max-w-4xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index <= currentStep ? 'text-primary-600' : 'text-gray-400'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    index <= currentStep
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-200 text-gray-400'
                  }`}
                >
                  {step.icon}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-full h-1 mx-4 ${
                      index < currentStep ? 'bg-primary-600' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800">
              {steps[currentStep].title}
            </h2>
            <p className="text-gray-600 mt-2">
              Step {currentStep + 1} of {steps.length}
            </p>
          </div>
        </div>

        {/* Step Content */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
        >
          <CurrentStepComponent
            data={assessmentData}
            updateData={updateAssessmentData}
          />
        </motion.div>

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all ${
              currentStep === 0
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-gray-600 text-white hover:bg-gray-700'
            }`}
          >
            <ChevronLeft className="h-5 w-5 mr-2" />
            Previous
          </button>
          
          <button
            onClick={handleNext}
            className="btn-primary flex items-center"
          >
            {currentStep === steps.length - 1 ? 'Get My Learning Path' : 'Next'}
            <ChevronRight className="h-5 w-5 ml-2" />
          </button>
        </div>
      </div>
    </div>
  )
}

// Step Components
function PersonalInfo({ data, updateData }: any) {
  const backgrounds = [
    'Student (High School)',
    'Student (College)',
    'Recent Graduate',
    'Career Changer',
    'Stay-at-home Parent',
    'Working Professional',
    'Other'
  ]

  const experiences = [
    'Complete Beginner',
    'Some Online Courses',
    'Basic HTML/CSS',
    'Some Programming',
    'Intermediate Level',
    'Advanced but New Field'
  ]

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold mb-2">Hi there! 👋</h3>
        <p className="text-gray-600">
          Let's start by getting to know you better. This helps us create a personalized experience just for you.
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          What's your name? *
        </label>
        <input
          type="text"
          value={data.name}
          onChange={(e) => updateData('name', e.target.value)}
          placeholder="Enter your first name"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          What's your current background? *
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {backgrounds.map((bg) => (
            <button
              key={bg}
              onClick={() => updateData('background', bg)}
              className={`p-3 text-left rounded-lg border transition-all ${
                data.background === bg
                  ? 'border-primary-500 bg-primary-50 text-primary-700'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {bg}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          What's your tech experience level? *
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {experiences.map((exp) => (
            <button
              key={exp}
              onClick={() => updateData('experience', exp)}
              className={`p-3 text-left rounded-lg border transition-all ${
                data.experience === exp
                  ? 'border-primary-500 bg-primary-50 text-primary-700'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {exp}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

function Goals({ data, updateData }: any) {
  const careerGoals = [
    {
      title: 'Frontend Developer',
      description: 'Build user interfaces and web applications',
      skills: ['HTML/CSS', 'JavaScript', 'React', 'UI/UX']
    },
    {
      title: 'Backend Developer',
      description: 'Work with servers, databases, and APIs',
      skills: ['Python/Node.js', 'Databases', 'APIs', 'Cloud']
    },
    {
      title: 'Full Stack Developer',
      description: 'Work on both frontend and backend',
      skills: ['Frontend + Backend', 'Databases', 'DevOps']
    },
    {
      title: 'Data Analyst',
      description: 'Analyze data to drive business decisions',
      skills: ['Python/R', 'SQL', 'Excel', 'Visualization']
    },
    {
      title: 'UX/UI Designer',
      description: 'Design user experiences and interfaces',
      skills: ['Design Tools', 'User Research', 'Prototyping']
    },
    {
      title: 'Cybersecurity',
      description: 'Protect systems and data from threats',
      skills: ['Security Tools', 'Networking', 'Risk Assessment']
    },
    {
      title: 'Mobile Developer',
      description: 'Build mobile applications',
      skills: ['React Native', 'Flutter', 'iOS/Android']
    },
    {
      title: 'Not Sure Yet',
      description: 'I want to explore different options',
      skills: ['Exploration', 'General Skills', 'Career Discovery']
    }
  ]

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold mb-2">What's Your Tech Dream? 🎯</h3>
        <p className="text-gray-600">
          Choose the career path that excites you most. Don't worry - you can always change direction!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {careerGoals.map((goal) => (
          <button
            key={goal.title}
            onClick={() => updateData('goal', goal.title)}
            className={`p-4 text-left rounded-lg border transition-all card-hover ${
              data.goal === goal.title
                ? 'border-primary-500 bg-primary-50 ring-2 ring-primary-200'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <h4 className="font-semibold text-lg mb-2">{goal.title}</h4>
            <p className="text-gray-600 text-sm mb-3">{goal.description}</p>
            <div className="flex flex-wrap gap-1">
              {goal.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

function Resources({ data, updateData }: any) {
  const timeOptions = [
    { value: '1-2 hours/week', label: '1-2 hours per week', desc: 'Perfect for busy schedules' },
    { value: '3-5 hours/week', label: '3-5 hours per week', desc: 'Steady progress' },
    { value: '6-10 hours/week', label: '6-10 hours per week', desc: 'Accelerated learning' },
    { value: '10+ hours/week', label: '10+ hours per week', desc: 'Intensive bootcamp style' }
  ]

  const budgetOptions = [
    { value: 'free', label: 'Free resources only', desc: 'YouTube, freeCodeCamp, etc.' },
    { value: 'low', label: '$0-50/month', desc: 'Some paid courses and tools' },
    { value: 'medium', label: '$50-200/month', desc: 'Premium courses and bootcamps' },
    { value: 'flexible', label: 'Flexible budget', desc: 'Whatever it takes to succeed' }
  ]

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold mb-2">Let's Plan Your Learning 📚</h3>
        <p className="text-gray-600">
          We'll match resources to your schedule and budget. Remember, amazing free resources exist!
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          How much time can you dedicate to learning? *
        </label>
        <div className="space-y-3">
          {timeOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => updateData('timeCommitment', option.value)}
              className={`w-full p-4 text-left rounded-lg border transition-all ${
                data.timeCommitment === option.value
                  ? 'border-primary-500 bg-primary-50 text-primary-700'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="font-medium">{option.label}</div>
              <div className="text-sm text-gray-600">{option.desc}</div>
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          What's your learning budget? *
        </label>
        <div className="space-y-3">
          {budgetOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => updateData('budget', option.value)}
              className={`w-full p-4 text-left rounded-lg border transition-all ${
                data.budget === option.value
                  ? 'border-primary-500 bg-primary-50 text-primary-700'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="font-medium">{option.label}</div>
              <div className="text-sm text-gray-600">{option.desc}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

function Preferences({ data, updateData }: any) {
  const challenges = [
    'Imposter syndrome',
    'Limited time',
    'No tech background',
    'Financial constraints',
    'Lack of mentorship',
    'Balancing family/work',
    'Language barriers',
    'Age concerns',
    'Networking difficulties'
  ]

  const interests = [
    'Problem solving',
    'Creative design',
    'Data analysis',
    'Building things',
    'Helping others',
    'Continuous learning',
    'Remote work',
    'High salary potential',
    'Job security'
  ]

  const toggleArrayItem = (field: string, item: string) => {
    const currentArray = data[field] || []
    const newArray = currentArray.includes(item)
      ? currentArray.filter((i: string) => i !== item)
      : [...currentArray, item]
    updateData(field, newArray)
  }

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold mb-2">Almost Done! 🌟</h3>
        <p className="text-gray-600">
          Help us understand your challenges and motivations so we can provide the best support.
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          What challenges are you facing? (Select all that apply)
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {challenges.map((challenge) => (
            <button
              key={challenge}
              onClick={() => toggleArrayItem('challenges', challenge)}
              className={`p-3 text-sm rounded-lg border transition-all ${
                data.challenges?.includes(challenge)
                  ? 'border-primary-500 bg-primary-50 text-primary-700'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {challenge}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          What interests you about tech? (Select all that apply)
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {interests.map((interest) => (
            <button
              key={interest}
              onClick={() => toggleArrayItem('interests', interest)}
              className={`p-3 text-sm rounded-lg border transition-all ${
                data.interests?.includes(interest)
                  ? 'border-secondary-500 bg-secondary-50 text-secondary-700'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {interest}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-6 rounded-lg">
        <h4 className="font-semibold text-lg mb-2">💡 Remember:</h4>
        <p className="text-gray-700">
          You belong in tech, and your unique background is a strength, not a weakness. 
          Every expert was once a beginner, and every successful person faced challenges. 
          You've got this! 🚀
        </p>
      </div>
    </div>
  )
}

export default Assessment