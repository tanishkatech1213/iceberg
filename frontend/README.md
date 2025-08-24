# Icebreaker - Student Pairing System 🎯

A modern, interactive web application that helps students find their perfect study buddy through intelligent matching and fun icebreaker challenges.

## ✨ Features

- **QR Code Entry**: Students scan a QR code to access the system
- **Smart Matching**: AI-powered pairing based on skills, interests, and personality
- **Interactive Challenges**: Fun activities to break the ice between matched pairs
- **Mobile-First Design**: Optimized for all devices
- **Beautiful Animations**: Smooth transitions and engaging user experience
- **Pair Codes**: Unique codes for students to find each other in person

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd icebreaker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
npm run preview
```

## 🏗️ Project Structure

```
icebreaker/
├── src/
│   ├── components/
│   │   ├── WelcomePage.jsx      # Landing page with QR code
│   │   ├── StudentForm.jsx      # Student information form
│   │   ├── MatchingPage.jsx     # AI matching simulation
│   │   ├── ResultsPage.jsx      # Match results display
│   │   └── ChallengePage.jsx    # Icebreaker challenges
│   ├── App.jsx                  # Main app with routing
│   ├── main.jsx                 # React entry point
│   └── index.css                # Global styles with Tailwind
├── public/                      # Static assets
├── package.json                 # Dependencies and scripts
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
└── README.md                   # This file
```

## 🎨 Technology Stack

- **Frontend**: React 18 with Hooks
- **Styling**: Tailwind CSS with custom components
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Routing**: React Router DOM

## 🔄 User Flow

1. **Welcome Page**: Students see the QR code and system overview
2. **Student Form**: Collects detailed information about the student
3. **Matching Process**: AI analyzes and finds the best match
4. **Results Display**: Shows matched pair with pair code
5. **Icebreaker Challenges**: Interactive activities to break the ice

## 🎯 Key Components

### WelcomePage
- Displays QR code for student access
- Explains how the system works
- Provides demo access

### StudentForm
- Comprehensive student profile collection
- Form validation and user-friendly interface
- Responsive design for mobile devices

### MatchingPage
- Simulates AI matching process
- Animated progress indicators
- Engaging user experience during wait time

### ResultsPage
- Displays matched pair information
- Shows pair code for in-person connection
- Match quality indicators

### ChallengePage
- Interactive icebreaker activities
- Progress tracking
- Hints and guidance for each challenge

## 🎨 Customization

### Colors
The app uses a custom color palette defined in `tailwind.config.js`:
- Primary: Blue shades (`primary-500`, `primary-600`, etc.)
- Secondary: Purple shades (`secondary-500`, `secondary-600`, etc.)

### Styling
Custom CSS classes are defined in `src/index.css`:
- `.btn-primary`: Primary button styling
- `.btn-secondary`: Secondary button styling
- `.card`: Card container styling
- `.input-field`: Form input styling

## 📱 Mobile Optimization

- Responsive design for all screen sizes
- Touch-friendly interface elements
- Optimized for mobile browsers
- QR code scanning compatibility

## 🔮 Future Enhancements

- **Real Backend Integration**: Connect to actual matching algorithms
- **User Authentication**: Student login and profile management
- **Real-time Chat**: In-app communication between matched pairs
- **Analytics Dashboard**: Track matching success rates
- **Admin Panel**: Manage challenges and system settings
- **Push Notifications**: Remind students about challenges

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with modern React best practices
- Inspired by the need for better student engagement
- Designed for accessibility and user experience

---

**Happy Icebreaking! 🎉**

For questions or support, please open an issue in the repository.
