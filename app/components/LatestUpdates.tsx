import React from "react";
import UpdateSection from "./UpdateSection";

const LatestUpdates = (): React.ReactNode => {
  return (
    <div className="w-[92%] mx-auto flex flex-col gap-4 pb-16">
      <div className="flex items-center">
        <p className="text-5xl max-md:text-3xl py-4">Latest Updates</p>
      </div>
      <div className="flex flex-col justify-center gap-16">
        <UpdateSection></UpdateSection>
        <UpdateSection></UpdateSection>
      </div>
    </div>
  );
};

export default LatestUpdates;
