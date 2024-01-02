import React from "react";

const Hiring = (): React.ReactNode => {
  return (
    <div className="mx-auto w-[92%]">
      <div className="text-5xl max-md:text-3xl flex items-center">
        <p>{`we're now hiring`}</p>
      </div>
      <div className="flex justify-center">
        <video
          src={
            "https://test-bucket-romeo.s3.us-west-1.amazonaws.com/rabbits-hiring.mp4"
          }
          className="w-full"
          autoPlay
          loop
          muted
        ></video>
      </div>
    </div>
  );
};

export default Hiring;
