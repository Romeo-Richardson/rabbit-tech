import React from "react";
import Divider from "./Divider";
import Image from "next/image";
import RabbitGlasses from "../assets/rabbit-glasses.png";

const ResearchHero = (): React.ReactNode => {
  return (
    <div className="h-[700px] bg-[#464646] flex flex-col justify-center items-center">
      <div className="w-[60%]  mb-20">
        <div>
          <p>research</p>
          <p className="text-7xl">
            learning human actions on computer applications
          </p>
        </div>
        <div className="mt-20">
          <Image
            src={RabbitGlasses}
            alt="Rabbit with glasses"
            height={85}
            width={85}
            unoptimized
            priority
          ></Image>
        </div>
      </div>
      <Divider></Divider>
      <div className="flex gap-[182px] w-[92%]">
        <p>dec. 3, 2023</p>
        <p>rabbit research team</p>
      </div>
    </div>
  );
};

export default ResearchHero;
