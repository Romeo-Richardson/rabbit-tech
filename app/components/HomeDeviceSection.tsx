import Image from "next/image";
import React from "react";
import DeviceImage from "../assets/device.png";
import DeviceIcon from "../assets/device-icon.png";
import WaitlistForm from "./WaitlistForm";

const HomeDeviceSection = (): React.ReactNode => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative mb-[200px]">
        <Image
          src={DeviceImage}
          width={515}
          height={575}
          priority
          unoptimized
          alt="Device Image"
        ></Image>
        <WaitlistForm></WaitlistForm>
      </div>
    </div>
  );
};

export default HomeDeviceSection;
