import Image from "next/image";
import React from "react";
import DeviceImage from "../assets/device.png";

const HomeDeviceSection = (): React.ReactNode => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative mb-[200px]">
        <Image
          src={DeviceImage}
          width={500}
          height={550}
          priority
          unoptimized
          alt="Device Image"
        ></Image>
        <div className="absolute bottom-[-50px] flex flex-col gap-4 items-center w-full">
          <p className="text-5xl">Jan 09 at 10pm PT</p>
          <input
            className="rounded-2xl p-2 px-4 text-black"
            placeholder="enter email adress"
          ></input>
          <button className="bg-red-600 rounded-2xl px-8 p-2">
            join waitlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeDeviceSection;
