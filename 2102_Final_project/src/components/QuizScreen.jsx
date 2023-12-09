import React, { useState } from 'react';
import './QuizScreen.css';

const questions = [
  {
    question: 'Where would you be if you were standing on the Spanish Steps?',
    options: ['Rome', 'Madrid', 'London', 'Berlin'],
    correctAnswer: 'Rome',
  },
  {
    question: 'Which planet is closest to the Sun?',
    options: ['Earth', 'Mercury', 'Jupiter', 'Venus'],
    correctAnswer: 'Mercury',
  },
  {
    question: 'Where did sushi orginate?',
    options: ['Russia', 'China', 'Japan', 'Vietnam'],
    correctAnswer: 'China',
  },
  {
    question: 'Who is the author of "To Kill a Mockingbird"?',
    options: ['Harper Lee', 'Ernest Hemingway', 'J.K. Rowling', 'F. Scott Fitzgerald'],
    correctAnswer: 'Harper Lee',
  },
  {
    question: 'In which year did World War II end?',
    options: ['1943', '1945', '1950', '1939'],
    correctAnswer: '1945',
  },
  {
    question: 'Who was the Ancient Greek God of the Sun?',
    options: ['Hades', 'Apollo', 'Athena', 'Hera'],
    correctAnswer: 'Apollo',
  },
  {
    question: 'How many bones do we have in an ear?',
    options: ['1', '2', '3', '14'],
    correctAnswer: '3',
  },
  {
    question: 'True or False: Holland is a region in the Netherlands.',
    options: ['True', 'False'],
    correctAnswer: 'True',
  },
  {
    question: 'WHich of these is not one of the 5 Great Lakes?',
    options: ['Superior', 'Huron', 'Erie', 'Champlain'],
    correctAnswer: 'Champlain',
  },
  {
    question: 'Pink Ladies and Granny Smiths are types of what fruit?',
    options: ['Pears', 'Oranges', 'Apples', 'Tomatoes'],
    correctAnswer: 'Apples',
  },
];


function QuizScreen({ onQuizComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const handleAnswer = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion === questions.length - 1) {
      onQuizComplete(score + (selectedAnswer === questions[currentQuestion].correctAnswer ? 1 : 0), questions.length);
    } else {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setSelectedAnswer(null);
    }
  };

  return (
    <div className="quiz-container">
      <p>Question {currentQuestion + 1}: {questions[currentQuestion].question}</p>
      <ul className="options-list">
        {questions[currentQuestion].options.map((option, index) => (
          <li
            key={index}
            onClick={() => setSelectedAnswer(option)}
            className={`option-item ${selectedAnswer === option ? 'selected' : ''}`}
          >
            {option}
          </li>
        ))}
      </ul>
      <button className="next-button" onClick={handleAnswer} disabled={selectedAnswer === null}>
        {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
      </button>
    </div>
  );
}

export default QuizScreen;