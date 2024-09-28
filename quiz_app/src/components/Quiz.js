import React, { useContext } from 'react';
import { QuizContext } from '../context/QuizContext';
import { Box, Button, Typography, List, ListItem } from '@mui/material';

const Quiz = () => {
  const {
    questions,
    currentQuestionIndex,
    handleAnswerClick,
    showResult,
    score,
  } = useContext(QuizContext);

  if (showResult) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Typography variant="h4">Quiz Completed!</Typography>
        <Typography variant="h5">Your Score: {score} / {questions.length}</Typography>
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
