import React from "react";
import Divider from "./Divider";
import DeviceImage from "../assets/device.png";
import Image from "next/image";

const NativeDevices = (): React.ReactNode => {
  return (
    <div className="bg-[#191919] pt-8 mb-10">
      <Divider></Divider>
      <div className="w-[92%] mx-auto">
        <p className="text-3xl">embodiment in AI-native devices</p>
        <br />
        <br />
        <div className="w-[65%] mx-auto">
          <p className="w-[85%] text-wrap">
            We believe that intelligence in the hands of the end-user is
            achievable without heavy client-side computing power. By carefully
            and securely offloading the majority of computation to data centers,
            we open up opportunities for ample performance and cost
            optimizations, making cutting-edge interactive AI experiences
            extremely affordable. While the neuro-symbolic LAM runs on the
            cloud, the hardware device interfacing with it does not require
            expensive and bulky processors, is extremely environmentally
            friendly, and consumes little power. As the workloads related to LAM
            continue to consolidate, we envision a path towards purposefully
            built server-side and edge chips.
          </p>
        </div>
      </div>

      <div className="bg-black flex items-center justify-center py-24 my-12 w-[90%] mx-auto rounded-3xl">
        <Image
          src={DeviceImage}
          alt="Rabbit performance grid"
          className="h-[85vh] w-[45vw]"
          priority
          unoptimized
        ></Image>
      </div>
    </div>
  );
};

export default NativeDevices;
