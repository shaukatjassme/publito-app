const VideoCard = ({ video }) => {
    return (
      <div className="video-card">
        <h6>{video.title}</h6>
        <p>{video.description}</p>
      </div>
    );
  };
  
  export default VideoCard;
  