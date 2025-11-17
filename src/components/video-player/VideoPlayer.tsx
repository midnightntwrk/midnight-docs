import React, { FC } from "react";

type Props = {
  url: string;
  autoplay?: boolean;
};

let ReactPlayer: any;
if (typeof window !== "undefined") {
  ReactPlayer = require("react-player").default;
}

const VideoPlayer: FC<Props> = ({ url, autoplay = false }) => {
  if (typeof window === "undefined" || !ReactPlayer) {
    return (
      <div
        style={{
          position: "relative",
          paddingTop: "56.25%",
          borderRadius: "12px",
          background: "#000",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "0.8rem",
            opacity: 0.6,
          }}
        >
          Video will load in the browser
        </div>
      </div>
    );
  }

  return (
    <ReactPlayer
      controls
      playing={autoplay}
      width="100%"
      height="450px"
      url={url}
    />
  );
};

export default VideoPlayer;
