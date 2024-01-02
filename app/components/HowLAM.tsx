import React from "react";
import HowLAMSection, { howLAMProps } from "./HowLAMSection";

const HowLAM = (): React.ReactNode => {
  const howLAMSections: howLAMProps[] = [
    {
      video: "https://test-bucket-romeo.s3.us-west-1.amazonaws.com/0.mp4",
      videoNumber: "01",
      videoHeading: "intention",
      videoHeadingColor: "text-[#ffb901]",
      overlayHeadingTop: "understanding",
      overlayHeadingBottom: "without instructions",
      overlayTextTop:
        "Existing personal computers are limited to understanding commands rather than complex human intentions.",
      overlayTextBottom:
        "LAM first translates natural language requests into actionable steps and responses that the operating system can use in real time.",
      overlayColor: "bg-[#ffb901]",
    },
    {
      video: "https://test-bucket-romeo.s3.us-west-1.amazonaws.com/1.mp4",
      videoNumber: "02",
      videoHeading: "interface",
      videoHeadingColor: "text-[#f70000]",
      overlayHeadingTop: "acting upon",
      overlayHeadingBottom: "your intentions",
      overlayTextTop:
        "As opposed to application programming interfaces (APIs) that have limited functionality, LAM understands and operates human-oriented interfaces across all mobile and desktop environments.",
      overlayTextBottom:
        "LAM observes a human using the interface and aims to form a “conceptual blueprint” of the service behind it, carrying out the underlying intentions.",
      overlayColor: "bg-[#f70000]",
    },
    {
      video: "https://test-bucket-romeo.s3.us-west-1.amazonaws.com/2.mp4",
      videoNumber: "03",
      videoHeading: "interaction",
      videoHeadingColor: "text-[#53c83c]",
      overlayHeadingTop: "becoming",
      overlayHeadingBottom: "your virtual helper",
      overlayTextTop:
        "Not only does LAM understand how to interact with applications to achieve certain objectives, it also knows how to achieve it in a humanizing way.",
      overlayTextBottom:
        "LAM-powered rabbits™ act safely and efficiently, making them valuable virtual helpers for your everyday needs.",
      overlayColor: "bg-[#53c83c]",
    },
  ];
  return (
    <div className="w-[92%] mx-auto mb-20">
      <div className="h-24 flex items-center my-12">
        <p className="text-5xl max-md:text-3xl">{`how LAM's work`}</p>
      </div>
      <div className="flex flex-col items-center gap-12">
        {howLAMSections.map((section, key) => (
          <HowLAMSection key={key} {...section}></HowLAMSection>
        ))}
      </div>
    </div>
  );
};

export default HowLAM;
