import React from "react";

export type howLAMProps = {
  video: any;
  videoNumber: string;
  videoHeading: string;
  videoHeadingColor: string;
  overlayHeadingTop: string;
  overlayHeadingBottom: string;
  overlayTextTop: string;
  overlayTextBottom: string;
  overlayColor: string;
};

const HowLAMSection = ({
  video,
  videoNumber,
  videoHeading,
  videoHeadingColor,
  overlayHeadingTop,
  overlayHeadingBottom,
  overlayTextTop,
  overlayTextBottom,
  overlayColor,
}: howLAMProps): React.ReactNode => {
  return (
    <div className="h-[95vh] overflow-none w-[75vw] relative">
      <video
        className="h-[95vh] w-full absolute object-fill"
        src={video}
        autoPlay
        muted
        loop
      ></video>
      <div className="h-[95vh] absolute z-20 flex flex-col justify-end">
        <div className=" h-36  mb-16 flex justify-between px-16 max-sm:px-0">
          <div className="h-full flex items-center bg-black px-4 max-sm:px-2">
            <p
              className={`text-8xl max-md:text-5xl max-lg:text-7xl max-sm:text-3xl ${videoHeadingColor}`}
            >
              {videoNumber}
            </p>
          </div>
          <div className="h-full flex items-center bg-black px-4 max-sm:px-2">
            <p
              className={`text-8xl max-md:text-5xl max-lg:text-7xl max-sm:text-3xl ${videoHeadingColor}`}
            >
              {videoHeading}
            </p>
          </div>
        </div>
      </div>
      <div
        className={`h-[95vh] absolute z-30 w-full ${overlayColor} text-black rounded-lg duration-300 opacity-0 hover:opacity-100 flex items-center justify-center`}
      >
        <div className="w-3/5 flex flex-col gap-4">
          <p className="text-5xl max-md:text-3xl max-sm:text-xl max-sm:font-bold mb-4">
            {overlayHeadingTop} <br></br> {overlayHeadingBottom}
          </p>
          <p>{overlayTextTop}</p>
          <p>{overlayTextBottom}</p>
        </div>
      </div>
    </div>
  );
};

export default HowLAMSection;
