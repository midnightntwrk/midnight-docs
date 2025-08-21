import React from "react";
import { FC } from "react";
import ReactPlayer from "react-player";

type Props = {
  url: string;
  autoplay?: boolean; 
};

const VideoPlayer: FC<Props> = ({ url, autoplay = false }) => {
  return <ReactPlayer controls playing={autoplay} width="100%" height="450px" url={url} />;
};

export default VideoPlayer;