import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import WelcomePage from './components/WelcomePage';
import StudentForm from './components/StudentForm';
import MatchingPage from './components/MatchingPage';
import ResultsPage from './components/ResultsPage';
import ChallengePage from './components/ChallengePage';

function App() {
  const [studentData, setStudentData] = useState(null);
  const [matchedPair, setMatchedPair] = useState(null);

  // ✅ Called by StudentForm after successful submission
  const handleStudentSubmit = (data) => {
    setStudentData(data);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-soft-pink via-soft-purple to-soft-blue">
        <Routes>
          {/* Welcome */}
          <Route path="/" element={<WelcomePage />} />

          {/* Form — now receives onSubmit */}
          <Route
            path="/form"
            element={<StudentForm onSubmit={handleStudentSubmit} />}
          />

          {/* Matching — requires studentData */}
          <Route
            path="/matching"
            element={
              studentData ? (
                <MatchingPage
                  studentData={studentData}
                  onMatch={setMatchedPair}
                />
              ) : (
                <Navigate to="/form" replace />
              )
            }
          />

          {/* Results — requires matchedPair */}
          <Route
            path="/results"
            element={
              matchedPair ? (
                <ResultsPage
                  matchedPair={matchedPair}
                  studentData={studentData}
                />
              ) : (
                <Navigate to="/matching" replace />
              )
            }
          />

          {/* Challenge — requires matchedPair */}
          <Route
            path="/challenge"
            element={
              matchedPair ? (
                <ChallengePage
                  matchedPair={matchedPair}
                  studentData={studentData}
                />
              ) : (
                <Navigate to="/results" replace />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
