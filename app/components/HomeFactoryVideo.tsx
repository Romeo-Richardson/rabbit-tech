import React from "react";

const HomeFactoryVideo = (): React.ReactNode => {
  return (
    <div className="min-h-screen">
      <video
        src={require("../../public/rabbits-factory.mp4")}
        loop
        muted
        autoPlay
      ></video>
    </div>
  );
};

export default HomeFactoryVideo;
