import React from 'react';
import VideoCard from './VideoCard';

const TopicCard = ({ topic }) => {
  return (
    <div className="topic-card">
      <h5>{topic.name}</h5>
      <div className="videos-list">
        {topic.videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default TopicCard;
