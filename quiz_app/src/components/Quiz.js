import React, { useContext } from 'react';
import { QuizContext } from '../context/QuizContext';

const Quiz = () => {
  const {
    questions,
    currentQuestionIndex,
    handleAnswerClick,
    setCurrentQuestionIndex,
    showResult,
    score,
  } = useContext(QuizContext);

  if (showResult) {
    return <div>Quiz Completed! Your Score: {score} / {questions.length}</div>;
  }

  const question = questions[currentQuestionIndex];

  const handlePreviousClick = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <div>
      <h2>Question {currentQuestionIndex + 1}/{questions.length}</h2>
      <h3>{question.question}</h3>
      <ul>
        {question.options.map((option, index) => (
          <li key={index}>
            <button onClick={() => handleAnswerClick(option)}>{option}</button>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={handlePreviousClick} disabled={currentQuestionIndex === 0}>
          Previous
        </button>
      </div>
    </div>
  );
};

export default Quiz;
