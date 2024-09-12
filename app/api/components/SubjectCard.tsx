import React from 'react';
import ChapterCard from './ChapterCard';

const SubjectCard = ({ subject }) => {
  return (
    <div className="subject-card">
      <h3>{subject.name}</h3>
      <div className="chapters-list">
        {subject.chapters.map((chapter) => (
          <ChapterCard key={chapter.id} chapter={chapter} />
        ))}
      </div>
    </div>
  );
};

export default SubjectCard;
