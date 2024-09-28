import React, { useContext, useState } from 'react';
import { QuizContext } from '../context/QuizContext';
import { Box, Button, Typography, List, ListItem } from '@mui/material';
import CorrectAnswers from './ReviewAnsswers';

const Quiz = () => {
  const {
    questions,
    currentQuestionIndex,
    handleAnswerClick,
    showResult,
    score,
  } = useContext(QuizContext);
  const [showCorrectAnswers, setShowCorrectAnswers] = useState(false);



  if (showResult) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" height="100vh">
        <Typography variant="h4">Quiz Completed!</Typography>
        <Typography variant="h5">Your Score: {score} / {questions.length}</Typography>
        <br />
        <button onClick={() => setShowCorrectAnswers(!showCorrectAnswers)}>
          {showCorrectAnswers ? 'Hide Correct Answers' : 'View Correct Answers'}
        </button>
        {showCorrectAnswers && <CorrectAnswers />}
      </Box>
    );
  }

  const question = questions[currentQuestionIndex];

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh" p={2}>
      <Typography variant="h4" gutterBottom>
        Question {currentQuestionIndex + 1}/{questions.length}
      </Typography>
      <Typography variant="h5" gutterBottom>
        {question.question}
      </Typography>
      <List>
        {question.options.map((option, index) => (
          <ListItem key={index} disablePadding>
            <Button 
              variant="contained"
              fullWidth 
              onClick={() => handleAnswerClick(option)}
              sx={{ mb: 1 }}
            >
              {option}
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Quiz;
