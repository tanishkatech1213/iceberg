import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Users, Heart, Code, ArrowRight, Trophy, Sparkles, Star, Rainbow } from 'lucide-react'

const ResultsPage = ({ matchedPair, studentData }) => {
  const navigate = useNavigate()
  const [showCode, setShowCode] = useState(false)

  const { student1, student2, matchScore, pairCode, matchReason } = matchedPair

  const getMatchQuality = (score) => {
    if (score >= 5) return { text: 'Perfect Match! 💕', color: 'text-pastel-green', bg: 'bg-gradient-to-r from-pastel-green to-pastel-blue', emoji: '💖' }
    if (score >= 3) return { text: 'Great Match! ✨', color: 'text-pastel-blue', bg: 'bg-gradient-to-r from-pastel-blue to-pastel-purple', emoji: '🌟' }
    return { text: 'Good Match! 🎯', color: 'text-pastel-yellow', bg: 'bg-gradient-to-r from-pastel-yellow to-pastel-orange', emoji: '💫' }
  }

  const matchQuality = getMatchQuality(matchScore)

  return (
    <div className="min-h-screen p-6 relative overflow-hidden">
      {/* Floating cute elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-4xl animate-float">🌸</div>
        <div className="absolute top-40 right-20 text-3xl animate-float" style={{animationDelay: '1s'}}>✨</div>
        <div className="absolute bottom-40 left-20 text-3xl animate-float" style={{animationDelay: '2s'}}>💖</div>
        <div className="absolute bottom-20 right-10 text-4xl animate-float" style={{animationDelay: '0.5s'}}>🎀</div>
        <div className="absolute top-1/2 left-1/4 text-2xl animate-wiggle">🦄</div>
        <div className="absolute top-1/3 right-1/3 text-2xl animate-sparkle">⭐</div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-pastel-pink to-pastel-purple rounded-full mb-6 shadow-2xl border-4 border-white animate-bounce-slow">
            <Users className="w-14 h-14 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-cute-600 mb-4 drop-shadow-lg">
            You've Been Matched! 🎉💕
          </h1>
          <p className="text-2xl text-cute-700">
            Meet your perfect study buddy ✨
          </p>
        </motion.div>

        {/* Match Quality Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-8"
        >
          <div className={`inline-flex items-center space-x-3 px-8 py-4 rounded-full ${matchQuality.bg} shadow-xl border-4 border-white`}>
            <span className="text-3xl">{matchQuality.emoji}</span>
            <span className={`text-2xl font-bold text-white`}>
              {matchQuality.text}
            </span>
            <Trophy className="w-8 h-8 text-white" />
          </div>
        </motion.div>

        {/* Match Reason */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="card-cute text-center mb-8"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Heart className="w-8 h-8 text-pastel-pink" />
            <h2 className="text-2xl font-bold text-cute-700">Why You're Perfect Together 💖</h2>
            <Heart className="w-8 h-8 text-pastel-pink" />
          </div>
          <p className="text-xl text-cute-700">{matchReason}</p>
        </motion.div>

        {/* Student Profiles */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Current Student */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="card-cute"
          >
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-pastel-pink to-pastel-purple rounded-full flex items-center justify-center text-4xl mb-6 mx-auto shadow-xl border-4 border-white">
                👤
              </div>
              <h3 className="text-2xl font-bold text-cute-700 mb-3">You ✨</h3>
              <p className="text-cute-600 mb-2 text-lg">{student1.name}</p>
              <p className="text-cute-500 mb-4">{student1.year} • {student1.major}</p>
              
              <div className="text-left space-y-3">
                <div>
                  <span className="text-cute-700 font-bold">Skills: ⭐</span>
                  <p className="text-cute-600">{student1.skills}</p>
                </div>
                <div>
                  <span className="text-cute-700 font-bold">Interests: 🎭</span>
                  <p className="text-cute-600">{student1.interests}</p>
                </div>
                <div>
                  <span className="text-cute-700 font-bold">Fun Fact: 🎪</span>
                  <p className="text-cute-600">{student1.funFact}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Matched Student */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="card-cute"
          >
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-pastel-purple to-pastel-pink rounded-full flex items-center justify-center text-4xl mb-6 mx-auto shadow-xl border-4 border-white">
                {student2.avatar}
              </div>
              <h3 className="text-2xl font-bold text-cute-700 mb-3">Your Buddy 💕</h3>
              <p className="text-cute-600 mb-2 text-lg">{student2.name}</p>
              <p className="text-cute-500 mb-4">{student2.year} • {student2.major}</p>
              
              <div className="text-left space-y-3">
                <div>
                  <span className="text-cute-700 font-bold">Skills: ⭐</span>
                  <p className="text-cute-600">{student2.skills}</p>
                </div>
                <div>
                  <span className="text-cute-700 font-bold">Interests: 🎭</span>
                  <p className="text-cute-600">{student2.interests}</p>
                </div>
                <div>
                  <span className="text-cute-700 font-bold">Fun Fact: 🎪</span>
                  <p className="text-cute-600">{student2.funFact}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Pair Code Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="card-cute text-center mb-8"
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Code className="w-8 h-8 text-pastel-purple" />
            <h2 className="text-2xl font-bold text-cute-700">Your Pair Code 🔐</h2>
            <Star className="w-8 h-8 text-pastel-pink" />
          </div>
          
          <p className="text-cute-600 mb-6 text-lg">
            Share this code with your buddy to confirm your match and start your icebreaker challenge! 💫✨
          </p>
          
          <div className="bg-gradient-to-br from-soft-pink to-soft-purple p-6 rounded-3xl mb-6 border-4 border-white shadow-lg">
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
              onClick={() => setShowCode(!showCode)}
            >
              {showCode ? (
                <div className="text-4xl font-bold text-cute-600 tracking-wider">
                  {pairCode}
                </div>
              ) : (
                <div className="text-4xl font-bold text-cute-400 tracking-wider">
                  ••••••••••
                </div>
              )}
            </motion.div>
            <p className="text-cute-500 mt-3 text-lg">
              {showCode ? 'Click to hide 🔒' : 'Click to reveal 🔓'}
            </p>
          </div>
          
          <p className="text-cute-500 text-lg">
            <strong>Tip:</strong> Use this code to find each other in person! 🎯💖
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <button
            onClick={() => navigate('/challenge')}
            className="btn-cute flex items-center justify-center space-x-3 text-xl"
          >
            <Sparkles className="w-6 h-6" />
            <span>Start Icebreaker Challenge 🎨</span>
            <ArrowRight className="w-6 h-6" />
          </button>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-cute-500 text-lg">
            Ready to break the ice? Let's make this connection magical! 🚀🌈✨
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default ResultsPage
