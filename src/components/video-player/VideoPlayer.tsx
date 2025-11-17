import React from "react";

type Props = {
  id: string;
  title: string;
  autoplay?: boolean;
};

const VideoPlayer = ({ id, title }: Props) => {
  return (
    <div style={{ maxWidth: "900px", margin: "0 auto" }}>
      <iframe
        width="100%"
        height="450"
        src={`https://www.youtube.com/embed/${id}`}
        title={title}
        style={{ border: 0 }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default VideoPlayer;
