import React from "react";
import RabbitRedEye from "../assets/rabbit-redeye.png";
import Image from "next/image";

const UpdateSection = (): React.ReactNode => {
  return (
    <div className="flex h-[350px] max-h-[350px]">
      <div className="">
        <Image
          src={RabbitRedEye}
          className="h-[350px] min-w-[350px] max-w-[350px] rounded-lg"
          alt="Red eyed rabbit icon"
          priority
          unoptimized
        ></Image>
      </div>
      <div className="h-full  flex flex-col gap-2 px-4">
        <p className="text-3xl">Dec. 21, 2023</p>
        <p className="text-5xl w-[95%]">
          rabbit inc. raises additional $10M to launch first AI hardware to
          replace app-based operating systems
        </p>
      </div>
    </div>
  );
};

export default UpdateSection;
