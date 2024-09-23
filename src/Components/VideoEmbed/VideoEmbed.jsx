import React from "react";

const VideoEmbed = ({ videoId, platform }) => {
  let url;

  if (platform === "vimeo") {
    url = `https://player.vimeo.com/video/${videoId}?title=0&byline=0&portrait=0&badge=0&controls=1`;
  } else {
    url = `https://www.youtube.com/embed/${videoId}`;
  }

  return (
    <iframe
      width="100%"
      height="600" // You can set a fixed height if needed, e.g., height="315"
      src={url}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Video"
      style={{ maxWidth: "100%", aspectRatio: "16/9" }} // Adjust aspectRatio as needed
    ></iframe>
  );
};

export default VideoEmbed;
