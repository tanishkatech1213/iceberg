import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const ChallengePage = () => {
  const navigate = useNavigate()
  const [selectedChallenge, setSelectedChallenge] = useState('')

  const challenges = [
    "Pretend you’re old grandparents gossiping about college students.",
    "Act like two politicians fighting for votes.",
    "One speaks only in Bollywood dialogues, the other translates them to English.",
    "Talk only in questions (no normal sentences).",
    "Google Translate Drama – One speaks in Hindi, the other “translates” to funny English.",
    "Stare at each other without blinking.",
    "Flip the bottle challenge.",
    "Phone-in Hand, Brain-in-Air – One pretends to be a Siri/Google Assistant, the other keeps asking random questions.",
    "Back-to-Back Drawing – Sit back-to-back. One person describes an object, and the other draws it without looking.",
    "Mirror Challenge – One person does random actions (funny dance, weird gestures, etc.) and the other must copy like a mirror."
  ]

  useEffect(() => {
    const random = challenges[Math.floor(Math.random() * challenges.length)]
    setSelectedChallenge(random)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-4xl animate-float">🌸</div>
        <div className="absolute top-40 right-20 text-3xl animate-float" style={{ animationDelay: '1s' }}>✨</div>
        <div className="absolute bottom-40 left-20 text-3xl animate-float" style={{ animationDelay: '2s' }}>💖</div>
        <div className="absolute bottom-20 right-10 text-4xl animate-float" style={{ animationDelay: '0.5s' }}>🎀</div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full text-center relative z-10"
      >
        <div className="card-cute">
          <div className="inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-pastel-pink to-pastel-purple rounded-full mb-6 shadow-2xl border-4 border-white animate-bounce-slow">
            <Star className="w-14 h-14 text-white" />
          </div>

          <h1 className="text-4xl font-bold text-cute-600 mb-4 drop-shadow-lg">
            Your Challenge 🎉
          </h1>

          <p className="text-cute-600 mb-6 text-lg">
            {selectedChallenge}
          </p>

          <button
            onClick={() => navigate('/')}
            className="btn-cute w-full flex items-center justify-center space-x-3 text-lg"
          >
            <span>Back to Home 🏠</span>
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default ChallengePage
