import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, User, GraduationCap, Code,
  Heart, Smile, Star, Sparkles
} from 'lucide-react';

const StudentForm = ({ onSubmit }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '', year: '', major: '',
    skills: '', interests: '',
    personality: '', funFact: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/students', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('Submission failed');
      const result = await response.json();

      onSubmit(result.student); // ✅ Pass data to App.jsx
      navigate('/matching');    // ✅ Route to MatchingPage
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  const yearOptions = ['1st Year', '2nd Year', '3rd Year', '4th Year', 'Graduate'];
  const majorOptions = ['Computer Science', 'Engineering', 'Business', 'Arts', 'Sciences', 'Other'];
  const personalityOptions = ['Introvert', 'Extrovert', 'Ambivert', 'Analytical', 'Creative', 'Social', 'Independent'];

  return (
    <div className="min-h-screen p-6 relative overflow-hidden">
      {/* Floating emojis and particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-3xl animate-float">🎀</div>
        <div className="absolute top-40 right-20 text-2xl animate-float" style={{ animationDelay: '1s' }}>🌸</div>
        <div className="absolute bottom-40 left-20 text-3xl animate-float" style={{ animationDelay: '2s' }}>💖</div>
        <div className="absolute bottom-20 right-10 text-2xl animate-float" style={{ animationDelay: '0.5s' }}>✨</div>
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
          {/* Basic Info */}
          <div className="card-cute glow-pink">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-pastel-pink to-pastel-purple rounded-full flex items-center justify-center glow-pink">
                <User className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-cute-700">Basic Information 🌟</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Full Name 💖"
                className="input-field-cute"
              />
              <select
                name="year"
                value={formData.year}
                onChange={handleChange}
                required
                className="input-field-cute"
              >
                <option value="">Select Year 🎓</option>
                {yearOptions.map(y => <option key={y} value={y}>{y}</option>)}
              </select>
            </div>
          </div>

          {/* Academic Info */}
          <div className="card-cute glow-blue">
            <div className="flex items-center space-x-3 mb-6">
              <GraduationCap className="w-6 h-6 text-white bg-gradient-to-br from-pastel-blue to-pastel-green rounded-full p-2 glow-blue" />
              <h2 className="text-2xl font-bold text-cute-700">Academic Info 📚</h2>
            </div>
            <select
              name="major"
              value={formData.major}
              onChange={handleChange}
              required
              className="input-field-cute"
            >
              <option value="">Select Major 🎨</option>
              {majorOptions.map(m => <option key={m} value={m}>{m}</option>)}
            </select>
          </div>

          {/* Skills & Interests */}
          <div className="card-cute glow-purple">
            <div className="flex items-center space-x-3 mb-6">
              <Code className="w-6 h-6 text-white bg-gradient-to-br from-pastel-yellow to-pastel-orange rounded-full p-2 glow-purple" />
              <h2 className="text-2xl font-bold text-cute-700">Skills & Interests 🌈</h2>
            </div>
            <input
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              placeholder="Top Skills ⭐"
              className="input-field-cute"
            />
            <textarea
              name="interests"
              value={formData.interests}
              onChange={handleChange}
              rows="3"
              placeholder="Hobbies & Interests 🎭"
              className="input-field-cute"
            />
          </div>

          {/* Personality & Fun */}
          <div className="card-cute glow-pink">
            <div className="flex items-center space-x-3 mb-6">
              <Heart className="w-6 h-6 text-white bg-gradient-to-br from-pastel-pink to-pastel-purple rounded-full p-2 glow-pink" />
              <h2 className="text-2xl font-bold text-cute-700">Personality & Fun 💖</h2>
            </div>
            <select
              name="personality"
              value={formData.personality}
              onChange={handleChange}
              className="input-field-cute"
            >
              <option value="">Select Personality 🎭</option>
              {personalityOptions.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
            <textarea
              name="funFact"
              value={formData.funFact}
              onChange={handleChange}
              rows="2"
              placeholder="Fun Fact 🎪"
              className="input-field-cute"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6">
            <button type="button" onClick={() => navigate('/')} className="btn-secondary-cute">
              <ArrowLeft className="w-6 h-6" /> Back
            </button>
            <button type="submit" className="btn-cute">
              <Smile className="w-6 h-6" /> Find My Buddy! <Sparkles className="w-6 h-6" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentForm;
