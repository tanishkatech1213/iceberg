import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, User, GraduationCap, Code, Heart, Smile, Star, Sparkles } from 'lucide-react'

const StudentForm = ({ onSubmit }) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    year: '',
    major: '',
    skills: '',
    interests: '',
    personality: '',
    funFact: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
    navigate('/matching')
  }

  const yearOptions = ['1st Year', '2nd Year', '3rd Year', '4th Year', 'Graduate']
  const majorOptions = ['Computer Science', 'Engineering', 'Business', 'Arts', 'Sciences', 'Other']
  const skillOptions = ['Programming', 'Design', 'Writing', 'Leadership', 'Analytics', 'Creativity', 'Communication']
  const personalityOptions = ['Introvert', 'Extrovert', 'Ambivert', 'Analytical', 'Creative', 'Social', 'Independent']

  return (
    <div className="min-h-screen p-6 relative overflow-hidden">
      {/* Floating cute elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-3xl animate-float">🎀</div>
        <div className="absolute top-40 right-20 text-2xl animate-float" style={{animationDelay: '1s'}}>🌸</div>
        <div className="absolute bottom-40 left-20 text-3xl animate-float" style={{animationDelay: '2s'}}>💖</div>
        <div className="absolute bottom-20 right-10 text-2xl animate-float" style={{animationDelay: '0.5s'}}>✨</div>
        
        {/* Floating particles */}
        <div className="particle top-32 left-16"></div>
        <div className="particle top-48 right-24"></div>
        <div className="particle bottom-32 left-28"></div>
        <div className="particle bottom-48 right-12"></div>
        <div className="particle top-1/3 left-1/2"></div>
        <div className="particle top-2/3 right-1/3"></div>
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pastel-pink to-pastel-purple rounded-full mb-4 shadow-lg border-4 border-white animate-bounce-slow glow-pink">
            <Star className="w-10 h-10 text-white animate-pulse" />
          </div>
          <h1 className="text-4xl font-bold text-cute-600 mb-3 drop-shadow-lg rainbow-text">
            Tell Us About Yourself! 💫
          </h1>
          <p className="text-xl text-cute-700 animate-pulse-gentle">
            Help us find your perfect study buddy! 🎯✨
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="card-cute glow-pink hover:scale-105 transition-transform duration-300">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-pastel-pink to-pastel-purple rounded-full flex items-center justify-center animate-bounce-soft glow-pink">
                <User className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-cute-700 animate-scale-breathe">Basic Information 🌟</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group">
                <label className="block text-lg font-bold text-cute-700 mb-3 group-hover:text-cute-500 transition-colors duration-300">
                  Full Name * ✨
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input-field-cute group-hover:border-pastel-pink/70 transition-all duration-300"
                  placeholder="Enter your full name 💖"
                />
              </div>
              
              <div className="group">
                <label className="block text-lg font-bold text-cute-700 mb-3 group-hover:text-cute-500 transition-colors duration-300">
                  Year Level * 🎓
                </label>
                <select
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  required
                  className="input-field-cute group-hover:border-pastel-pink/70 transition-all duration-300"
                >
                  <option value="">Select year 🎯</option>
                  {yearOptions.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Academic Information */}
          <div className="card-cute glow-blue hover:scale-105 transition-transform duration-300">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-pastel-blue to-pastel-green rounded-full flex items-center justify-center animate-bounce-soft glow-blue">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-cute-700 animate-scale-breathe">Academic Information 🎨</h2>
            </div>
            
            <div className="group">
              <label className="block text-lg font-bold text-cute-700 mb-3 group-hover:text-cute-500 transition-colors duration-300">
                Major/Field of Study * 📚
              </label>
              <select
                name="major"
                value={formData.major}
                onChange={handleChange}
                required
                className="input-field-cute group-hover:border-pastel-blue/70 transition-all duration-300"
              >
                <option value="">Select major 🎯</option>
                {majorOptions.map(major => (
                  <option key={major} value={major}>{major}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Skills & Interests */}
          <div className="card-cute glow-purple hover:scale-105 transition-transform duration-300">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-pastel-yellow to-pastel-orange rounded-full flex items-center justify-center animate-bounce-soft glow-purple">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-cute-700 animate-scale-breathe">Skills & Interests 🌈</h2>
            </div>
            
            <div className="space-y-6">
              <div className="group">
                <label className="block text-lg font-bold text-cute-700 mb-3 group-hover:text-cute-500 transition-colors duration-300">
                  Top Skills (comma separated) ⭐
                </label>
                <input
                  type="text"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  className="input-field-cute group-hover:border-pastel-yellow/70 transition-all duration-300"
                  placeholder="e.g., Programming, Design, Leadership 💫"
                />
                <p className="text-cute-600 mt-2 text-sm animate-pulse-gentle">
                  Popular: {skillOptions.join(', ')} ✨
                </p>
              </div>
              
              <div className="group">
                <label className="block text-lg font-bold text-cute-700 mb-3 group-hover:text-cute-500 transition-colors duration-300">
                  Interests & Hobbies 🎭
                </label>
                <textarea
                  name="interests"
                  value={formData.interests}
                  onChange={handleChange}
                  rows="3"
                  className="input-field-cute group-hover:border-pastel-orange/70 transition-all duration-300"
                  placeholder="Tell us what you love to do in your free time... 🌟"
                />
              </div>
            </div>
          </div>

          {/* Personality & Fun */}
          <div className="card-cute glow-pink hover:scale-105 transition-transform duration-300">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-pastel-pink to-pastel-purple rounded-full flex items-center justify-center animate-bounce-soft glow-pink">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-cute-700 animate-scale-breathe">Personality & Fun 💖</h2>
            </div>
            
            <div className="space-y-6">
              <div className="group">
                <label className="block text-lg font-bold text-cute-700 mb-3 group-hover:text-cute-500 transition-colors duration-300">
                  Personality Type 🎭
                </label>
                <select
                  name="personality"
                  value={formData.personality}
                  onChange={handleChange}
                  className="input-field-cute group-hover:border-pastel-pink/70 transition-all duration-300"
                >
                  <option value="">Select personality ✨</option>
                  {personalityOptions.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              
              <div className="group">
                <label className="block text-lg font-bold text-cute-700 mb-3 group-hover:text-cute-500 transition-colors duration-300">
                  Fun Fact About You 🎪
                </label>
                <textarea
                  name="funFact"
                  value={formData.funFact}
                  onChange={handleChange}
                  rows="2"
                  className="input-field-cute group-hover:border-pastel-purple/70 transition-all duration-300"
                  placeholder="Share something interesting or quirky about yourself... 🌈"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="btn-secondary-cute flex items-center justify-center space-x-3 text-lg animate-pulse-gentle"
            >
              <ArrowLeft className="w-6 h-6 animate-bounce-soft" />
              <span>Back</span>
            </button>
            
            <button
              type="submit"
              className="btn-cute flex-1 flex items-center justify-center space-x-3 text-xl animate-pulse-gentle"
            >
              <Smile className="w-6 h-6 animate-bounce-soft" />
              <span>Find My Buddy! 💕</span>
              <Sparkles className="w-6 h-6 animate-sparkle" />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default StudentForm
