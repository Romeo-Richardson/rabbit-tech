import React from "react";

const Background = (): React.ReactNode => {
  return (
    <div className="w-[92%] mx-auto">
      <div>
        <p className="text-3xl mb-10">background</p>
      </div>
      <div className="w-[65%] mx-auto">
        <p className=" text-wrap w-[85%]">
          The proliferation of personalized experiences delivered via mobile
          applications has been a dominant theme of the last decade of personal
          computing. Enabled by a graphical user interface, these applications
          allow interaction without any programming experience. Under such a
          scheme, service providers enhance hardware with various software
          add-ons, while hardware manufacturers enable new types of applications
          through new features, forming a symbiotic relationship.
          <br />
          <br />
          The advent of neural language models, a breakthrough in natural
          language processing, has enabled new capabilities in machine
          comprehension of a wide range of natural language-related problems in
          daily life [11], [12]. With the equally rapid commodification in
          speech recognition [13] and synthesis [14], where cost and latency
          have dropped below the real-time barrier while maintaining fidelity,
          we can already build machines that understand human intentions with
          sufficient depth, nuance, and context, with realistic effort and cost.
          <br />
          <br />
          Enabled by such progress, a new kind of user interaction experience
          arises where a device’s primary user interface is via spoken natural
          language instead of touch [A]. The process started a decade ago in
          smart speakers (Alexa [15], Google Home, Raven, DuerOS), and has
          recently accelerated with AI chatbots (ChatGPT, Claude) and operating
          systems with a natural language-based user interface (rabbit).
          Designing this new type of device comes with a series of challenges
          previously unforeseen, the most significant of which is the
          unavailability of application programming interfaces (API) for major
          service providers [B]. To address this issue, we take advantage of
          neuro-symbolic programming to directly learn user interactions with
          applications, bypassing the need to translate natural language user
          requests into rigid APIs. To ensure a seamless on-device user
          experience, we face a broader range of engineering challenges
          involving real-time communication, virtual network computing, and web
          automation. We characterize our system as a (Large) Action Model, or
          LAM, emphasizing our commitment to better understand actions,
          specifically human intentions expressed through actions on computers,
          and, by extension, in the physical world. We believe our efforts could
          contribute to the further embodiment of intelligent algorithms that
          positively benefit our daily lives.
        </p>
        <div className="w-[85%]">
          <p className=" text-wrap w-[80%] text-3xl text-green-600 mx-auto my-10">
            {`“the (Large) Action Model, or LAM, emphasizes our commitment to better understand actions, specifically human intentions expressed through actions on computers and, by extension, in the physical world.”`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Background;
