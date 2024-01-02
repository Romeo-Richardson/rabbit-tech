import React from "react";

const ComingSoon = (): React.ReactNode => {
  return (
    <div className="w-[92%] mx-auto flex flex-col gap-12 max-lg:gap-0 mb-16">
      <div className="flex max-lg:flex-col py-2">
        <div className="w-1/2 flex items-center h-full">
          <div className="text-8xl max-lg:text-6xl max-md:text-5xl">
            device<br></br>coming soon
          </div>
        </div>
        <div className="flex flex-col max-lg:text-xl text-3xl justify-between w-1/2 h-[100%] pt-10">
          <p>
            rabbit OS at your fingertips, with a new kind of mobile device that
            is intuitive, organic, and delightful.
          </p>
          <br></br>
          <a className="underline">Join the waitlist now.</a>
        </div>
      </div>
      <div className="flex justify-center items-center overflow-hidden ">
        <video
          className="w-screen max-lg:h-[625px] max-lg:min-h-[625px] h-[725px]"
          src={
            "https://test-bucket-romeo.s3.us-west-1.amazonaws.com/rabbits-soon.mp4"
          }
          autoPlay
          muted
          loop
        ></video>
      </div>
    </div>
  );
};

export default ComingSoon;
