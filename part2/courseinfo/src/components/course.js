import React from 'react';
import Total from './total';

const Course = ({ course }) => {
  return (
    <div>
      <div key={course.id}>
        <Header name={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    </div>
  );
};

const Header = ({ course }) => {
  return <h2>{course}</h2>;
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  );
};

const Part = ({ part }) => {
  return (
    <div>
      {part.name} {part.exercises}
    </div>
  );
};
export default Course;
