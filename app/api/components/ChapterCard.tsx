import React from 'react';
import TopicCard from './TopicCard';

const ChapterCard = ({ chapter }) => {
  return (
    <div className="chapter-card">
      <h4>{chapter.name}</h4>
      <div className="topics-list">
        {chapter.topics.map((topic) => (
          <TopicCard key={topic.id} topic={topic} />
        ))}
      </div>
    </div>
  );
};

export default ChapterCard;
