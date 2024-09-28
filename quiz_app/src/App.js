import React from "react";
import Quiz from "./components/Quiz";
import { QuizProvider } from "./context/QuizContext"; // Import the QuizProvider
import { Container } from "@mui/material";

function App() {
  return (
    <Container>
      <QuizProvider>
        <div className="App">
          <Quiz />
        </div>
      </QuizProvider>
    </Container>
  );
}

export default App;
