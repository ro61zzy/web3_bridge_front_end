import React, { createContext, useState } from 'react';

const QuizContext = createContext();

const QuizProvider = ({ children }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "What is the capital city of France?",
      options: ["Berlin", "Madrid", "Paris", "Lisbon"],
      correctAnswer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Mars",
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
      correctAnswer: "Pacific Ocean",
    },
    {
      question: "Who wrote the play 'Romeo and Juliet'?",
      options: ["William Shakespeare", "George Orwell", "J.K. Rowling", "Mark Twain"],
      correctAnswer: "William Shakespeare",
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Au", "Ag", "Go", "Fe"],
      correctAnswer: "Au",
    },
    {
      question: "Which country is home to the kangaroo?",
      options: ["India", "Australia", "South Africa", "Canada"],
      correctAnswer: "Australia",
    },
    {
      question: "What is the largest mammal in the world?",
      options: ["Elephant", "Blue Whale", "Great White Shark", "Giraffe"],
      correctAnswer: "Blue Whale",
    },
    {
      question: "What is the smallest prime number?",
      options: ["1", "2", "3", "5"],
      correctAnswer: "2",
    },
    {
      question: "Who was the first person to walk on the Moon?",
      options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Alan Shepard"],
      correctAnswer: "Neil Armstrong",
    },
    {
      question: "What is the hardest natural substance on Earth?",
      options: ["Gold", "Iron", "Diamond", "Silver"],
      correctAnswer: "Diamond",
    },
  ];
  
  

  const handleAnswerClick = (selectedOption) => {
    if (showResult) return; // Prevent answering after the quiz is done
  
    if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowResult(true);
    }
  };
  
  
  return (
    <QuizContext.Provider
      value={{
        currentQuestionIndex,
        score,
        showResult,
        questions,
        handleAnswerClick,
        setCurrentQuestionIndex,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export { QuizContext, QuizProvider };
