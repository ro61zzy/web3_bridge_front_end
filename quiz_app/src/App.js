import React from 'react';
import Quiz from './components/Quiz';
import { QuizProvider } from './context/QuizContext'; // Import the QuizProvider

function App() {
  return (
    <QuizProvider>
      <div className="App">
        <Quiz />
      </div>
    </QuizProvider>
  );
}

export default App;
