import Image from "next/image";
import React from "react";
import RabbitIcon from "../assets/rabbit-icon-gray.png";
import Link from "next/link";

const Footer = (): React.ReactNode => {
  return (
    <div className="h-[275px] max-md:h-auto rounded-tr-lg rounded-tl-lg flex flex-col bg-[#c2cbce] justify-between py-10">
      <div className="w-[92%] mx-auto flex max-md:flex-col">
        <div className="w-1/2">
          <div>
            <Image
              src={RabbitIcon}
              height={12}
              width={85}
              unoptimized
              priority
              alt="Rabbit tech icon"
            ></Image>
          </div>
        </div>
        <div className="w-1/2 text-black">
          <p>reimagining how computers augment everyday life.</p>
        </div>
      </div>
      <div className="w-[92%] mx-auto flex text-xs text-gray-500 max-md:flex-col-reverse">
        <div className="w-1/2">
          <p>rabbit™ and r1™ are trademarks of © 2023 rabbit inc.</p>
        </div>
        <div className="w-1/2 flex">
          <div className="w-1/2 flex gap-12 max-lg:gap-6 max-md:flex-col">
            <Link href="/research" className="underline">
              research
            </Link>
            <Link href="/updates" className="underline">
              updates
            </Link>
            <Link href="/careers" className="underline">
              careers
            </Link>
            <a href="https://twitter.com/rabbit_hmi" className="underline">
              @rabbit_hmi
            </a>
            <a href="mailto:info@rabbit.tech" className="underline">
              info@rabbit.tech
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
