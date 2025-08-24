import React from 'react'
import { useNavigate } from 'react-router-dom'
import { QrCode, Users, Sparkles, ArrowRight, Heart, Star } from 'lucide-react'

const WelcomePage = () => {
  const navigate = useNavigate()

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
        <div className="particle top-32 left-20"></div>
        <div className="particle top-48 right-32"></div>
        <div className="particle bottom-32 left-32"></div>
        <div className="particle bottom-48 right-16"></div>
        <div className="particle top-1/3 left-1/2"></div>
        <div className="particle top-2/3 right-1/3"></div>
      </div>

      <div className="max-w-md w-full text-center relative z-10">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-pastel-pink to-pastel-purple rounded-full mb-6 shadow-2xl border-4 border-white animate-bounce-slow glow-pink">
            <Users className="w-12 h-12 text-white animate-pulse" />
          </div>
          <h1 className="text-5xl font-bold text-cute-600 mb-3 drop-shadow-lg rainbow-text">
            Icebreaker 💕
          </h1>
          <p className="text-xl text-cute-700 mb-2 animate-pulse-gentle">
            Connect with your perfect study buddy! 🎯
          </p>
          <div className="flex justify-center space-x-2 mt-3">
            <span className="cute-badge animate-bounce-soft">✨ Magical</span>
            <span className="cute-badge animate-bounce-soft" style={{animationDelay: '0.2s'}}>💖 Friendly</span>
            <span className="cute-badge animate-bounce-soft" style={{animationDelay: '0.4s'}}>🎨 Creative</span>
          </div>
        </div>

        {/* QR Code Section */}
        <div className="card-cute mb-8 glow-purple">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pastel-blue to-pastel-purple rounded-full mb-4 animate-pulse-slow glow-blue">
              <QrCode className="w-10 h-10 text-white animate-pulse" />
            </div>
            <h2 className="text-2xl font-bold text-cute-700 mb-3 animate-scale-breathe">
              Scan to Get Started! 🚀
            </h2>
            <p className="text-cute-600 text-lg">
              Students can scan this QR code to access the pairing system
            </p>
          </div>
          
          {/* Mock QR Code */}
          <div className="bg-gradient-to-br from-soft-pink to-soft-purple p-6 rounded-3xl mb-6 border-4 border-white shadow-lg animate-scale-breathe">
            <div className="w-48 h-48 mx-auto bg-white rounded-2xl border-4 border-pastel-pink flex items-center justify-center shadow-inner">
              <div className="text-center text-cute-600">
                <QrCode className="w-16 h-16 mx-auto mb-3 text-pastel-purple animate-pulse" />
                <p className="text-lg font-bold">QR Code</p>
                <p className="text-sm">icebreaker.app</p>
                <div className="flex justify-center space-x-1 mt-2">
                  <span className="sparkle">✨</span>
                  <span className="sparkle">💫</span>
                  <span className="sparkle">⭐</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="card-cute mb-8 glow-pink">
          <h3 className="text-2xl font-bold text-cute-700 mb-6 flex items-center justify-center">
            <Heart className="w-6 h-6 mr-2 text-pastel-pink animate-pulse" />
            How It Works
            <Heart className="w-6 h-6 ml-2 text-pastel-pink animate-pulse" />
          </h3>
          <div className="space-y-4 text-left">
            <div className="flex items-center space-x-4 p-3 bg-gradient-to-r from-soft-pink/50 to-soft-purple/50 rounded-2xl hover:scale-105 transition-transform duration-300">
              <div className="w-8 h-8 bg-gradient-to-br from-pastel-pink to-pastel-purple text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md animate-bounce-soft">
                1
              </div>
              <span className="text-cute-700 font-medium">Fill out your profile ✨</span>
            </div>
            <div className="flex items-center space-x-4 p-3 bg-gradient-to-r from-soft-blue/50 to-soft-green/50 rounded-2xl hover:scale-105 transition-transform duration-300">
              <div className="w-8 h-8 bg-gradient-to-br from-pastel-blue to-pastel-green text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md animate-bounce-soft" style={{animationDelay: '0.2s'}}>
                2
              </div>
              <span className="text-cute-700 font-medium">Get matched instantly 💫</span>
            </div>
            <div className="flex items-center space-x-4 p-3 bg-gradient-to-r from-soft-yellow/50 to-soft-orange/50 rounded-2xl hover:scale-105 transition-transform duration-300">
              <div className="w-8 h-8 bg-gradient-to-br from-pastel-yellow to-pastel-orange text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md animate-bounce-soft" style={{animationDelay: '0.4s'}}>
                3
              </div>
              <span className="text-cute-700 font-medium">Complete fun challenges 🎨</span>
            </div>
          </div>
        </div>

        {/* Demo Button */}
        <button
          onClick={() => navigate('/form')}
          className="btn-cute w-full flex items-center justify-center space-x-3 text-xl mb-6 animate-pulse-gentle"
        >
          <span>Try Demo</span>
          <ArrowRight className="w-6 h-6 animate-bounce-soft" />
        </button>

        {/* Footer */}
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 text-cute-600 mb-2">
            <Sparkles className="w-5 h-5 text-pastel-yellow animate-sparkle" />
            <span className="text-lg font-medium animate-pulse-gentle">Powered by AI Matching</span>
            <Star className="w-5 h-5 text-pastel-pink animate-sparkle" />
          </div>
          <p className="text-cute-500 text-sm animate-pulse-gentle">
            Making friendships magical, one match at a time! 🌈✨
          </p>
        </div>
      </div>
    </div>
  )
}

export default WelcomePage
