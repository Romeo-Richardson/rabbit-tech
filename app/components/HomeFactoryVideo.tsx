import React from "react";

const HomeFactoryVideo = (): React.ReactNode => {
  return (
    <div className=" overflow-hidden flex justify-center ">
      <div className="max-xl:min-w-[1440px] max-xl:min-h-[800px]">
        <video
          src={
            "https://test-bucket-romeo.s3.us-west-1.amazonaws.com/rabbits-factory.mp4"
          }
          className="object-contain max-sm:scale-x-110"
          loop
          muted
          autoPlay
        ></video>
      </div>
    </div>
  );
};

export default HomeFactoryVideo;
