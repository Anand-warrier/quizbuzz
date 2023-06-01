import React from 'react';
import { useParams } from 'react-router-dom';

const QuizList = () => {
  const { topic } = useParams();

  const getQuizzesByTopic = (selectedTopic) => {
    // Logic to fetch quizzes based on the selected topic
    // Return an array of quizzes
    return [
      { id: 1, title: 'Quiz 1', topic: 'Sports' },
      { id: 2, title: 'Quiz 2', topic: 'Sports' },
      { id: 3, title: 'Quiz 3', topic: selectedTopic },
    ];
  };

  const quizzes = getQuizzesByTopic(topic);

  return (
    <div>
      <h1>{topic} Quizzes</h1>

      {/* Display the quizzes */}
      {quizzes.map((quiz) => (
        <div key={quiz.id}>
          <h2>{quiz.title}</h2>
          {/* Add other quiz details */}
        </div>
      ))}
    </div>
  );
};

export default QuizList;
