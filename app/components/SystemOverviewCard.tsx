import Image, { StaticImageData } from "next/image";
import React from "react";

export type overviewCardProps = {
  image: StaticImageData;
  header: string;
  text: string;
  bg: string;
};

const SystemOverviewCard = ({
  image,
  header,
  text,
  bg,
}: overviewCardProps): React.ReactNode => {
  return (
    <div className="h-full flex flex-col w-1/4 gap-4">
      <div
        className={`h-[70%] w-full rounded-lg flex items-center justify-center ${bg} object-cover overflow-hidden`}
      >
        <Image priority unoptimized alt="Logo" src={image}></Image>
      </div>
      <p className="text-3xl underline">{header}</p>
      <p>{text}</p>
    </div>
  );
};

export default SystemOverviewCard;
