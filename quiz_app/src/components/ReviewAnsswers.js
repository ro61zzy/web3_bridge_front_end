import React, { useContext } from 'react';
import { QuizContext } from '../context/QuizContext';

const CorrectAnswers = () => {
  const { questions } = useContext(QuizContext);

  return (
    <div>
      <h2>Correct Answers:</h2>
      <ul>
        {questions.map((question, index) => (
          <li key={index}>
            <strong>Question {index + 1}:</strong> {question.question}
            <br />
            <strong>Correct Answer:</strong> {question.correctAnswer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CorrectAnswers;
