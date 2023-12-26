import React from "react";

const ResearchVideo = (): React.ReactNode => {
  return (
    <div className="mb-10">
      <video
        src={
          "https://test-bucket-romeo.s3.us-west-1.amazonaws.com/rabbit-lam.mp4"
        }
        loop
        playsInline
        controls
      ></video>
    </div>
  );
};

export default ResearchVideo;
