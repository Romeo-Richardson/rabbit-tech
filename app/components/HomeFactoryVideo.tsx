import React from "react";

const HomeFactoryVideo = (): React.ReactNode => {
  return (
    <div className="min-h-screen">
      <video
        src={
          "https://test-bucket-romeo.s3.us-west-1.amazonaws.com/rabbits-factory.mp4"
        }
        loop
        muted
        autoPlay
      ></video>
    </div>
  );
};

export default HomeFactoryVideo;
