import React from "react";

const ResearchHeroText = (): React.ReactNode => {
  return (
    <div className="h-[325px] flex items-center">
      <div className="w-[60%] mx-auto">
        <p className="w-[85%] text-wrap indent-8">
          We have developed a system that can infer and model human actions on
          computer applications, perform the actions reliably and quickly, and
          is well-suited for deployment in various AI assistants and operating
          systems. Our system is called the Large Action Model (LAM). Enabled by
          recent advances in neuro-symbolic programming, the LAM allows for the
          direct modeling of the structure of various applications and user
          actions performed on them without a transitory representation, such as
          text. The LAM system achieves results competitive with
          state-of-the-art approaches in terms of accuracy, interpretability,
          and speed. Engineering the LAM architecture involves overcoming both
          research challenges and engineering complexities, from real-time
          communication to virtual network computing technologies. We hope that
          our efforts could help shape the next generation of
          natural-language-driven consumer experiences.
        </p>
      </div>
    </div>
  );
};

export default ResearchHeroText;
