import React from "react";

const Footnotes = (): React.ReactNode => {
  return (
    <div className="w-[92%] mx-auto mb-10">
      <div>
        <p className="text-3xl mb-10">footnotes</p>
      </div>
      <div className="w-[65%] mx-auto mb-10">
        <ul className="list-disc w-[75%] flex flex-col gap-4">
          <li className="ml-32">
            <p>
              A plausible use case is operating applications with natural
              language while driving.
            </p>
          </li>
          <li className="ml-32">
            <p>
              The main issue with the lack of available APIs is mostly
              non-technical. Some, like music streaming services, are
              contractually not allowed to provide a self-serve, non-bespoke API
              due to licensing agreements with an external party. Others face
              resource constraints, degraded user experience, long-term
              strategic uncertainty, and security risks, and will exhibit high
              business development friction and poor unit economics when
              negotiating a dedicated API.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footnotes;
