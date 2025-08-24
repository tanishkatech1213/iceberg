import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Users, Sparkles, Heart, Target, Zap, Star, Rainbow } from 'lucide-react'

const MatchingPage = ({ studentData, onMatch }) => {
  const navigate = useNavigate()
  const [matchingStage, setMatchingStage] = useState('analyzing')
  const [progress, setProgress] = useState(0)

  // Mock matching algorithm simulation
  useEffect(() => {
    const stages = [
      { name: 'analyzing', duration: 2000, progress: 25 },
      { name: 'searching', duration: 3000, progress: 50 },
      { name: 'evaluating', duration: 2500, progress: 75 },
      { name: 'matching', duration: 2000, progress: 100 }
    ]

    let currentStageIndex = 0
    const interval = setInterval(() => {
      if (currentStageIndex < stages.length) {
        const stage = stages[currentStageIndex]
        setMatchingStage(stage.name)
        setProgress(stage.progress)
        currentStageIndex++
      } else {
        clearInterval(interval)
        // Simulate finding a match
        setTimeout(() => {
          const mockMatch = generateMockMatch(studentData)
          onMatch(mockMatch)
          navigate('/results')
        }, 1000)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [studentData, onMatch, navigate])

  const generateMockMatch = (student) => {
    const mockStudents = [
      {
        name: 'Alex Chen',
        year: '3rd Year',
        major: 'Computer Science',
        skills: 'Programming, AI, Machine Learning',
        interests: 'Building apps, playing guitar, hiking',
        personality: 'Analytical',
        funFact: 'Can solve a Rubik\'s cube in under 2 minutes!',
        avatar: '👨‍💻'
      },
      {
        name: 'Sarah Kim',
        year: '2nd Year',
        major: 'Design',
        skills: 'UI/UX, Graphic Design, Creativity',
        interests: 'Photography, yoga, coffee enthusiast',
        personality: 'Creative',
        funFact: 'Has visited 15 countries and counting!',
        avatar: '👩‍🎨'
      },
      {
        name: 'Mike Rodriguez',
        year: '4th Year',
        major: 'Business',
        skills: 'Leadership, Strategy, Communication',
        interests: 'Basketball, reading, public speaking',
        personality: 'Extrovert',
        funFact: 'Started a successful podcast in college!',
        avatar: '👨‍💼'
      }
    ]

    // Simple matching logic based on major and personality
    let bestMatch = mockStudents[0]
    let bestScore = 0

    mockStudents.forEach(candidate => {
      let score = 0
      if (candidate.major === student.major) score += 3
      if (candidate.personality === student.personality) score += 2
      if (candidate.year === student.year) score += 1
      
      if (score > bestScore) {
        bestScore = score
        bestMatch = candidate
      }
    })

    return {
      student1: student,
      student2: bestMatch,
      matchScore: bestScore,
      pairCode: generatePairCode(),
      matchReason: generateMatchReason(student, bestMatch)
    }
  }

  const generatePairCode = () => {
    const words = ['Dragon', 'Phoenix', 'Unicorn', 'Griffin', 'Pegasus']
    const numbers = Math.floor(Math.random() * 1000).toString().padStart(3, '0')
    return `${words[Math.floor(Math.random() * words.length)]}${numbers}`
  }

  const generateMatchReason = (student1, student2) => {
    const reasons = [
      `You both share a passion for ${student1.major}!`,
      `Your ${student1.personality} and ${student2.personality} personalities will complement each other perfectly.`,
      `You're both ${student1.year} students - perfect timing for collaboration!`,
      `Your skills in ${student1.skills} and ${student2.skills} will make an amazing team.`
    ]
    return reasons[Math.floor(Math.random() * reasons.length)]
  }

  const getStageInfo = (stage) => {
    const stages = {
      analyzing: {
        title: 'Analyzing Your Profile ✨',
        description: 'We\'re understanding your skills, interests, and personality... 💫',
        icon: Target,
        color: 'text-pastel-blue',
        bg: 'bg-gradient-to-br from-pastel-blue to-pastel-green',
        emoji: '🔍'
      },
      searching: {
        title: 'Searching for Matches 🌈',
        description: 'Looking through our database for the perfect study buddy... 💖',
        icon: Users,
        color: 'text-pastel-green',
        bg: 'bg-gradient-to-br from-pastel-green to-pastel-yellow',
        emoji: '🔎'
      },
      evaluating: {
        title: 'Evaluating Compatibility 💕',
        description: 'Calculating match scores and finding the best fit... ⭐',
        icon: Heart,
        color: 'text-pastel-pink',
        bg: 'bg-gradient-to-br from-pastel-pink to-pastel-purple',
        emoji: '💝'
      },
      matching: {
        title: 'Creating Your Pair 🎀',
        description: 'Almost there! Setting up your perfect match... ✨',
        icon: Sparkles,
        color: 'text-pastel-purple',
        bg: 'bg-gradient-to-br from-pastel-purple to-pastel-pink',
        emoji: '🎉'
      }
    }
    return stages[stage] || stages.analyzing
  }

  const currentStage = getStageInfo(matchingStage)
  const IconComponent = currentStage.icon

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
      {/* Floating cute elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-4xl animate-float">🌸</div>
        <div className="absolute top-40 right-20 text-3xl animate-float" style={{animationDelay: '1s'}}>✨</div>
        <div className="absolute bottom-40 left-20 text-3xl animate-float" style={{animationDelay: '2s'}}>💖</div>
        <div className="absolute bottom-20 right-10 text-4xl animate-float" style={{animationDelay: '0.5s'}}>🎀</div>
        <div className="absolute top-1/2 left-1/4 text-2xl animate-wiggle">🦄</div>
        <div className="absolute top-1/3 right-1/3 text-2xl animate-sparkle">⭐</div>
        
        {/* Floating particles */}
        <div className="particle top-32 left-16"></div>
        <div className="particle top-48 right-24"></div>
        <div className="particle bottom-32 left-28"></div>
        <div className="particle bottom-48 right-12"></div>
        <div className="particle top-1/3 left-1/2"></div>
        <div className="particle top-2/3 right-1/3"></div>
      </div>

      <div className="max-w-md w-full text-center relative z-10">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-pastel-pink to-pastel-purple rounded-full mb-6 shadow-2xl border-4 border-white animate-bounce-slow glow-pink">
            <Rainbow className="w-12 h-12 text-white animate-pulse" />
          </div>
          <h1 className="text-4xl font-bold text-cute-600 mb-3 drop-shadow-lg rainbow-text">
            Finding Your Perfect Match! 💕
          </h1>
          <p className="text-xl text-cute-700 animate-pulse-gentle">
            Our magical AI is working its charm! ✨
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="w-full bg-white/50 backdrop-blur-sm rounded-full h-4 mb-4 border-2 border-pastel-pink/30">
            <motion.div
              className="bg-gradient-to-r from-pastel-pink via-pastel-purple to-pastel-blue h-4 rounded-full shadow-lg"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <p className="text-lg text-cute-700 font-bold animate-pulse-gentle">{progress}% Complete</p>
        </div>

        {/* Current Stage */}
        <motion.div
          key={matchingStage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="card-cute mb-8 glow-purple hover:scale-105 transition-transform duration-300"
        >
          <div className={`inline-flex items-center justify-center w-24 h-24 ${currentStage.bg} rounded-full mb-6 shadow-xl border-4 border-white animate-bounce-soft`}>
            <IconComponent className="w-12 h-12 text-white" />
          </div>
          
          <h2 className="text-3xl font-bold text-cute-700 mb-4 animate-scale-breathe">
            {currentStage.title}
          </h2>
          
          <p className="text-cute-600 mb-6 text-lg animate-pulse-gentle">
            {currentStage.description}
          </p>

          {/* Stage Emoji */}
          <div className="text-6xl mb-6 animate-bounce-slow">
            {currentStage.emoji}
          </div>

          {/* Animated Elements */}
          <div className="flex justify-center space-x-3">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="w-4 h-4 bg-gradient-to-r from-pastel-pink to-pastel-purple rounded-full shadow-md"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Fun Facts */}
        <div className="card-cute glow-pink hover:scale-105 transition-transform duration-300">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Zap className="w-7 h-7 text-pastel-yellow animate-pulse" />
            <h3 className="text-2xl font-bold text-cute-700 animate-scale-breathe">Fun Fact</h3>
            <Star className="w-7 h-7 text-pastel-pink animate-sparkle" />
          </div>
          <p className="text-cute-600 text-lg animate-pulse-gentle">
            {matchingStage === 'analyzing' && "We're analyzing over 100+ compatibility factors! 🔍✨"}
            {matchingStage === 'searching' && "Searching through 500+ active students... 🌈💫"}
            {matchingStage === 'evaluating' && "Our AI is calculating the perfect match score! 💖⭐"}
            {matchingStage === 'matching' && "Almost ready to introduce you to your buddy! 🎀🎉"}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MatchingPage
