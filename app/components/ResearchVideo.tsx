import React from "react";

const ResearchVideo = (): React.ReactNode => {
  return (
    <div className="mb-10">
      <video
        src={require("../../public/rabbit-lam.mp4")}
        loop
        playsInline
        controls
      ></video>
    </div>
  );
};

export default ResearchVideo;
