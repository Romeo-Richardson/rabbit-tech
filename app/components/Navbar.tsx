import React from "react";
import RabbitIcon from "../assets/rabbit-icon.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = (): React.ReactNode => {
  return (
    <div className="h-[50px] flex justify-center sticky top-0 z-50 bg-black">
      <div className="w-[92%] h-full  flex justify-between">
        <div className="flex items-center gap-48">
          <div className="items-center">
            <Link href={"/"}>
              <Image
                src={RabbitIcon}
                height={12}
                width={85}
                alt="Rabbit Icon"
                priority
                unoptimized
              ></Image>
            </Link>
          </div>
          <div className="flex items-center gap-16">
            <Link href={"/research"}>research</Link>
            <Link href={"/updates"}>updates</Link>
            <Link href={"/careers"}>careers</Link>
          </div>
        </div>
        <div className="flex items-center">
          <button className="bg-red-600 text-sm  px-2 rounded-2xl">
            waitlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
