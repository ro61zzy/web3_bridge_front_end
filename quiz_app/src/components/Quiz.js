import React, { useContext, useState } from 'react';
import { QuizContext } from '../context/QuizContext';
import { Box, Button, Grid, Typography, RadioGroup, FormControlLabel, Radio } from '@mui/material';

const Quiz = () => {
  const {
    questions,
    currentQuestionIndex,
    handleAnswerClick,
    setCurrentQuestionIndex,
    showResult,
    score,
  } = useContext(QuizContext);

  const [selectedAnswer, setSelectedAnswer] = useState('');

  if (showResult) {
    return (
      <Box textAlign="center" mt={4}>
        <Typography variant="h4">Quiz Completed!</Typography>
        <Typography variant="h6">Your Score: {score} / {questions.length}</Typography>
      </Box>
    );
  }

  const question = questions[currentQuestionIndex];

  const handlePreviousClick = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (selectedAnswer) {
      handleAnswerClick(selectedAnswer);
      setSelectedAnswer('');  // Reset the selection for the next question
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    }
  };

  const handleChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  return (
    <Box mt={4} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Typography variant="h4" gutterBottom>
        Question {currentQuestionIndex + 1}/{questions.length}
      </Typography>
      <Typography variant="h5" gutterBottom>
        {question.question}
      </Typography>

      <RadioGroup value={selectedAnswer} onChange={handleChange}>
        {question.options.map((option, index) => (
          <FormControlLabel
            key={index}
            value={option}
            control={<Radio />}
            label={option}
          />
        ))}
      </RadioGroup>

      <Grid container justifyContent="space-between" mt={2}>
        <Grid item>
          <Button
            variant="outlined"
            onClick={handlePreviousClick}
            disabled={currentQuestionIndex === 0}
          >
           Back
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            onClick={handleNextClick}
            disabled={!selectedAnswer}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Quiz;
