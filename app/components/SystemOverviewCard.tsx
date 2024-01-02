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
    <div className="h-full flex flex-col max-lg:max-w-[330px] max-lg:min-w-[330px] max-lg:max-h-[450px] my-4 w-1/4 gap-4 pb-20">
      <div
        className={`grow  max-lg:min-w-[330px] max-lg:min-h-[330px] max-lg:max-h-[330px] w-full rounded-lg flex items-center justify-center ${bg} object-cover overflow-hidden`}
      >
        <Image priority unoptimized alt="Logo" src={image}></Image>
      </div>
      <div className="h-[100px]">
        <p className="text-3xl underline">{header}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default SystemOverviewCard;
