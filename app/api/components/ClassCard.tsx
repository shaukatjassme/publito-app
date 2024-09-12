import React from 'react';
import SubjectCard from './SubjectCard';

const ClassCard = ({ classItem }) => {
  return (
    <div className="class-card">
      <h2>{classItem.name}</h2>
      <div className="subjects-list">
        {classItem.subjects.map((subject) => (
          <SubjectCard key={subject.id} subject={subject} />
        ))}
      </div>
    </div>
  );
};

export default ClassCard;
