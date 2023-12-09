import React, { useState } from 'react';
import LoginScreen from './components/LoginScreen';
import QuizScreen from './components/QuizScreen';
import ScoreScreen from './components/ScoreScreen';

function App() {
  const [screen, setScreen] = useState('login');
  const [score, setScore] = useState(0);

  const handleLogin = () => {
    setScreen('quiz');
  };

  const handleQuizComplete = (userScore) => {
    setScore(userScore);
    setScreen('score');
  };

  const renderScreen = () => {
    switch (screen) {
      case 'login':
        return <LoginScreen onLogin={handleLogin} />;
      case 'quiz':
        return <QuizScreen onQuizComplete={handleQuizComplete} />;
      case 'score':
        return <ScoreScreen score={score} totalQuestions={3} />;
      default:
        return null;
    }
  };

  return <div>{renderScreen()}</div>;
}

export default App;
