import Image from "next/image";
import React from "react";
import RabbitOSImage from "../assets/rabbit-os.png";

const HomeOS = (): React.ReactNode => {
  return (
    <div className="h-[275px] w-[92vw] flex mx-auto">
      <div className="w-1/2 h-full pt-16">
        <Image
          src={RabbitOSImage}
          height={300}
          width={425}
          alt="Rabbit OS Logo"
          priority
          unoptimized
        ></Image>
      </div>
      <div className="w-1/2 h-full pt-16">
        <p className=" text-3xl">
          A personalized operating system through a natural language interface.{" "}
          <br></br>
          <br></br>
          reimagining how computers augment everyday life.
        </p>
      </div>
    </div>
  );
};

export default HomeOS;
