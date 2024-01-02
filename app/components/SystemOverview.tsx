import React from "react";
import SystemOverviewCard, { overviewCardProps } from "./SystemOverviewCard";
import KernelImage from "../assets/kernel.png";
import lamImage from "../assets/LAM.png";
import osImage from "../assets/OS.png";
import RabbitOsImage from "../assets/rabbit-green.png";

const SystemOverview = (): React.ReactNode => {
  const overviewCards: overviewCardProps[] = [
    {
      image: KernelImage,
      header: "Kernel",
      text: "the cloud-based infrastructure that makes realtime interactions viable.",
      bg: "bg-[#6f36dd]",
    },
    {
      image: lamImage,
      header: "Large Action Model (LAM)",
      text: "a new type of foundation model that understands human intentions on computers.",
      bg: "bg-[#ffb000]",
    },
    {
      image: osImage,
      header: "rabbit",
      text: "utilize LAM to carry out human intentions in user interfaces.",
      bg: "bg-[#f80000]",
    },
    {
      image: RabbitOsImage,
      header: "rabbit OS",
      text: "packages the technologies into a delightful and organic experience.",
      bg: "bg-[#49c134]",
    },
  ];
  return (
    <div className="h-[625px] max-lg:h-auto  w-[92%] mx-auto flex flex-col">
      <div className=" h-24 flex items-center">
        <p className="text-5xl max-md:text-3xl">System Overview</p>
      </div>
      <div className="grow flex max-lg:flex-wrap max-lg:justify-center gap-6">
        {overviewCards.map((card, key) => (
          <SystemOverviewCard key={key} {...card}></SystemOverviewCard>
        ))}
      </div>
    </div>
  );
};

export default SystemOverview;
