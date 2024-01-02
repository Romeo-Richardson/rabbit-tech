import React from "react";
import RabbitRedEye from "../assets/rabbit-redeye.png";
import Image from "next/image";

const UpdateSection = (): React.ReactNode => {
  return (
    <div className="flex max-sm:flex-col max-sm:gap-2 max-h-[350px]">
      <div>
        <Image
          src={RabbitRedEye}
          className="h-[350px] max-w-[350px] max-lg:h-[240px] max-lg:max-w-[240px] max-md:max-w-[180px] max-md:max-h-[180px] max-sm:min-w-[92vw] max-sm:min-h-[275px] rounded-lg"
          alt="Red eyed rabbit icon"
          priority
          unoptimized
        ></Image>
      </div>
      <div className="h-full  flex flex-col gap-2 px-4">
        <p className="text-3xl max-lg:text-xl max-md:text-base max-sm:text-sm">
          Dec. 21, 2023
        </p>
        <p className="text-5xl w-[95%] max-lg:text-3xl max-md:text-xl max-sm:text-base">
          rabbit inc. raises additional $10M to launch first AI hardware to
          replace app-based operating systems
        </p>
      </div>
    </div>
  );
};

export default UpdateSection;
