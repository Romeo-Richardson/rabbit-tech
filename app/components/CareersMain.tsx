import React from "react";

const CareersMain = (): React.ReactNode => {
  return (
    <div className="w-[92%] mx-auto flex flex-col my-24">
      <div className="flex">
        <div className="w-3/5">
          <p className="text-8xl">
            create the future <br /> with us
          </p>
        </div>
        <div className="w-2/5">
          <p className="text-2xl">
            Our products reverse the relationship between humans & machines and
            provide a new experience of naturally interacting with technology.
          </p>
        </div>
      </div>
      <div className="flex justify-end">
        <video
          src={
            "https://test-bucket-romeo.s3.us-west-1.amazonaws.com/rabbits-hiring.mp4"
          }
          loop
          muted
          autoPlay
        ></video>
      </div>
      <div className="mt-8">
        <p className="text-5xl">
          we envision a world where technology <br /> enhances the human
          experience
        </p>
      </div>
    </div>
  );
};

export default CareersMain;
