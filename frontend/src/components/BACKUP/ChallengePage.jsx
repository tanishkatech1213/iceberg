import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Lightbulb, Camera, Palette, MessageCircle, Trophy, Home, RefreshCw, Star, Sparkles, Heart } from 'lucide-react'

const ChallengePage = ({ matchedPair, studentData }) => {
  const navigate = useNavigate()
  const [currentChallenge, setCurrentChallenge] = useState(0)
  const [challengeCompleted, setChallengeCompleted] = useState(false)
  const [showHint, setShowHint] = useState(false)

  const challenges = [
    {
      id: 1,
      title: "Invent Something Together 💡",
      description: "Come up with a creative invention that combines both of your skills and interests. Draw it, describe it, or act it out! ✨",
      icon: Lightbulb,
      color: "text-pastel-yellow",
      bg: "bg-gradient-to-br from-pastel-yellow to-pastel-orange",
      hint: "Think about problems you both face and how you could solve them together! 🌟"
    },
    {
      id: 2,
      title: "Draw a Robot Buddy 🤖",
      description: "One person draws the head, the other draws the body. Switch papers and complete each other's robot! 🎨",
      icon: Palette,
      color: "text-pastel-blue",
      bg: "bg-gradient-to-br from-pastel-blue to-pastel-green",
      hint: "Use your imagination! The sillier, the better! 🎭"
    },
    {
      id: 3,
      title: "Take a Creative Selfie 📸",
      description: "Take a fun selfie together that represents your new friendship. Be creative with poses and expressions! 💖",
      icon: Camera,
      color: "text-pastel-green",
      bg: "bg-gradient-to-br from-pastel-green to-pastel-blue",
      hint: "Try different angles, props, or funny faces! 😄"
    },
    {
      id: 4,
      title: "Share a Secret Dream 🌙",
      description: "Each share one dream or goal you have for the future. How could you support each other in achieving them? ⭐",
      icon: MessageCircle,
      color: "text-pastel-purple",
      bg: "bg-gradient-to-br from-pastel-purple to-pastel-pink",
      hint: "Be honest and supportive. Dreams are meant to be shared! 💫"
    }
  ]

  const currentChallengeData = challenges[currentChallenge]
  const IconComponent = currentChallengeData.icon

  const handleNextChallenge = () => {
    if (currentChallenge < challenges.length - 1) {
      setCurrentChallenge(currentChallenge + 1)
      setShowHint(false)
    } else {
      setChallengeCompleted(true)
    }
  }

  const handlePreviousChallenge = () => {
    if (currentChallenge > 0) {
      setCurrentChallenge(currentChallenge - 1)
      setShowHint(false)
    }
  }

  const handleRestart = () => {
    setCurrentChallenge(0)
    setChallengeCompleted(false)
    setShowHint(false)
  }

  if (challengeCompleted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
        {/* Floating cute elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 text-4xl animate-float">🌸</div>
          <div className="absolute top-40 right-20 text-3xl animate-float" style={{animationDelay: '1s'}}>✨</div>
          <div className="absolute bottom-40 left-20 text-3xl animate-float" style={{animationDelay: '2s'}}>💖</div>
          <div className="absolute bottom-20 right-10 text-4xl animate-float" style={{animationDelay: '0.5s'}}>🎀</div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-md w-full text-center relative z-10"
        >
          <div className="card-cute">
            <div className="inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-pastel-green to-pastel-blue rounded-full mb-6 shadow-2xl border-4 border-white animate-bounce-slow">
              <Trophy className="w-14 h-14 text-white" />
            </div>
            
            <h1 className="text-4xl font-bold text-cute-600 mb-4 drop-shadow-lg">
              Challenge Complete! 🎉💕
            </h1>
            
            <p className="text-cute-600 mb-6 text-lg">
              You've successfully completed all the icebreaker challenges! 
              Your friendship is off to an amazing start. ✨🌟
            </p>
            
            <div className="space-y-4">
              <button
                onClick={handleRestart}
                className="btn-secondary-cute w-full flex items-center justify-center space-x-3 text-lg"
              >
                <RefreshCw className="w-6 h-6" />
                <span>Do Challenges Again 🔄</span>
              </button>
              
              <button
                onClick={() => navigate('/')}
                className="btn-cute w-full flex items-center justify-center space-x-3 text-lg"
              >
                <Home className="w-6 h-6" />
                <span>Back to Home 🏠</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen p-6 relative overflow-hidden">
      {/* Floating cute elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-3xl animate-float">🌸</div>
        <div className="absolute top-40 right-20 text-2xl animate-float" style={{animationDelay: '1s'}}>✨</div>
        <div className="absolute bottom-40 left-20 text-3xl animate-float" style={{animationDelay: '2s'}}>💖</div>
        <div className="absolute bottom-20 right-10 text-2xl animate-float" style={{animationDelay: '0.5s'}}>🎀</div>
        <div className="absolute top-1/2 left-1/4 text-2xl animate-wiggle">🦄</div>
        <div className="absolute top-1/3 right-1/3 text-2xl animate-sparkle">⭐</div>
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pastel-pink to-pastel-purple rounded-full mb-4 shadow-lg border-4 border-white animate-bounce-slow">
            <Star className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-cute-600 mb-3 drop-shadow-lg">
            Icebreaker Challenge #{currentChallenge + 1} 🎨
          </h1>
          <p className="text-xl text-cute-700">
            Complete fun activities together to break the ice! ✨💫
          </p>
        </motion.div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-lg text-cute-700 mb-3 font-bold">
            <span>Challenge {currentChallenge + 1} of {challenges.length} 🎯</span>
            <span>{Math.round(((currentChallenge + 1) / challenges.length) * 100)}% ✨</span>
          </div>
          <div className="w-full bg-white/50 backdrop-blur-sm rounded-full h-3 border-2 border-pastel-pink/30">
            <motion.div
              className="bg-gradient-to-r from-pastel-pink via-pastel-purple to-pastel-blue h-3 rounded-full shadow-lg"
              initial={{ width: 0 }}
              animate={{ width: `${((currentChallenge + 1) / challenges.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Current Challenge */}
        <motion.div
          key={currentChallenge}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="card-cute mb-8"
        >
          <div className={`inline-flex items-center justify-center w-24 h-24 ${currentChallengeData.bg} rounded-full mb-6 shadow-xl border-4 border-white`}>
            <IconComponent className="w-12 h-12 text-white" />
          </div>
          
          <h2 className="text-3xl font-bold text-cute-700 mb-4 text-center">
            {currentChallengeData.title}
          </h2>
          
          <p className="text-cute-600 text-center mb-6 text-lg">
            {currentChallengeData.description}
          </p>

          {/* Hint Section */}
          <div className="bg-gradient-to-r from-soft-pink/50 to-soft-purple/50 rounded-2xl p-6 mb-6 border-2 border-pastel-pink/30">
            <button
              onClick={() => setShowHint(!showHint)}
              className="text-cute-600 hover:text-cute-700 font-bold text-lg flex items-center space-x-3"
            >
              <Lightbulb className="w-6 h-6 text-pastel-yellow" />
              <span>{showHint ? 'Hide Hint 🔒' : 'Show Hint 💡'}</span>
            </button>
            
            {showHint && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
                className="mt-4 pt-4 border-t-2 border-pastel-pink/30"
              >
                <p className="text-cute-700 text-lg italic">
                  💡 {currentChallengeData.hint}
                </p>
              </motion.div>
            )}
          </div>

          {/* Challenge Actions */}
          <div className="text-center">
            <p className="text-cute-600 mb-6 text-lg font-bold">
              Work together to complete this challenge! 💕✨
            </p>
            
            <div className="flex justify-center space-x-6">
              <button
                onClick={handlePreviousChallenge}
                disabled={currentChallenge === 0}
                className={`px-6 py-3 rounded-full font-bold transition-all ${
                  currentChallenge === 0
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-pastel-yellow to-pastel-orange text-white hover:from-pastel-orange hover:to-pastel-yellow shadow-lg hover:shadow-xl border-2 border-white'
                }`}
              >
                Previous ⬅️
              </button>
              
              <button
                onClick={handleNextChallenge}
                className="btn-cute"
              >
                {currentChallenge === challenges.length - 1 ? 'Complete All! 🎉' : 'Next Challenge ➡️'}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Challenge List */}
        <div className="card-cute">
          <h3 className="text-2xl font-bold text-cute-700 mb-6 text-center flex items-center justify-center">
            <Heart className="w-6 h-6 mr-2 text-pastel-pink" />
            All Challenges
            <Sparkles className="w-6 h-6 ml-2 text-pastel-purple" />
          </h3>
          
          <div className="space-y-4">
            {challenges.map((challenge, index) => (
              <div
                key={challenge.id}
                className={`flex items-center space-x-4 p-4 rounded-2xl transition-all ${
                  index === currentChallenge
                    ? 'bg-gradient-to-r from-soft-pink/50 to-soft-purple/50 border-2 border-pastel-pink/50'
                    : 'bg-white/50 backdrop-blur-sm'
                }`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  index < currentChallenge
                    ? 'bg-gradient-to-r from-pastel-green to-pastel-blue text-white'
                    : index === currentChallenge
                    ? 'bg-gradient-to-r from-pastel-pink to-pastel-purple text-white'
                    : 'bg-gray-300 text-gray-600'
                } shadow-md`}>
                  {index < currentChallenge ? '✓' : index + 1}
                </div>
                
                <div className="flex-1">
                  <p className={`font-bold text-lg ${
                    index === currentChallenge ? 'text-cute-700' : 'text-cute-600'
                  }`}>
                    {challenge.title}
                  </p>
                  <p className="text-cute-500 text-sm">
                    {challenge.description.substring(0, 60)}... ✨
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChallengePage
