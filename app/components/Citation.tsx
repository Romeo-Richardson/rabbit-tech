import React from "react";

const Citation = (): React.ReactNode => {
  return (
    <div className="w-[92%] mx-auto pb-10">
      <div>
        <p className="text-3xl mb-10">citation</p>
      </div>
      <div className="w-[65%] mx-auto mb-10 flex flex-col gap-6">
        <p>
          If you find the work useful in your research, please consider citing:
        </p>
        <div className="w-[85%] bg-[#1d1d1d] flex flex-col p-14 rounded-xl">
          <p>{`@misc{rabbit2023,`}</p>
          <p className="indent-8">{`author = {rabbit research team},`}</p>
          <p className="indent-8">{`title = {Learning human actions on computer applications},`}</p>
          <p className="indent-8">{`url = {https://rabbit.tech/research},`}</p>
          <p>{`}`}</p>
        </div>
      </div>
    </div>
  );
};

export default Citation;
