import React from "react";

type Props = {
  id: string;
  title?: string;
  autoplay?: boolean;
};

const VideoPlayer = ({ id, title = "Video", autoplay = false }: Props) => {
  const autoplayFlag = autoplay ? 1 : 0;

  return (
    <div className="mn-video-responsive">
      <iframe
        src={`https://www.youtube.com/embed/${id}?autoplay=${autoplayFlag}&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
};

export default VideoPlayer;
