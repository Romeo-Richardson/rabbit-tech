import React from "react";
import PerformingActions from "../assets/performingactions.jpg";
import Image from "next/image";

const Competitiveness = (): React.ReactNode => {
  return (
    <>
      <div className="text-black bg-[#c2cbce]">
        <div className="w-[85%] mt-10 mx-auto">
          <p className="text-3xl">
            early signs of LAM competitiveness in web navigation tasks
          </p>
          <br />
          <p className="w-[55%] text-wrap">
            Web environments, along with mobile and desktop environments, are of
            interest to LAM. Additionally, the task of web navigation assesses a
            subset of actions that we care about. Although recent web navigation
            algorithms have shown human-level performance in a simulated
            environment (MiniWoB++), they still struggle on real websites. When
            tested on the MindWeb benchmark dataset, the most effective method
            only achieves an accuracy of 70.8% in locating the target element.
            Since the latency is not reported in the respective works, we have
            omitted the column.
            <br />
            <br />
            We provide a preliminary evaluation of LAM using our internal
            benchmark. The dataset comprises 283 episodes, consisting of 17
            tasks gathered from 14 different real-world websites, including
            Airbb, Google Flights, Shein, Spotify, and others. We have evaluated
            both a purely neural approach and a neuro-symbolic approach. While
            the pure neural-based method demonstrates competitive performance in
            locating the target element, incorporating the symbolic method
            significantly improves accuracy and latency.
          </p>
        </div>
        <div>
          <Image src={PerformingActions} alt="Rabbit performance grid"></Image>
        </div>
      </div>
      <div className="w-[92%] mx-auto mt-10">
        <div className="w-[65%] mx-auto mb-10">
          <ul className="list-disc w-[75%] flex flex-col gap-4">
            <li className="ml-32">
              <p>
                Cloud infrastructure to spin up environments for such AI to be
                able to behave like a human because most software requires its
                user to behave like a human, however they define and determine
                it. We have built a special cluster of virtualized environments
                that can run LAM on consumer applications, whether in testing or
                production. It provides an advanced level of security and
                scalability, enabling us to rapidly prototype our foundation
                model research.
              </p>
            </li>
            <li className="ml-32">
              <p>
                Hardware-software programming interfaces to deliver the
                multimedia experience of AI-human cooperation because additive
                bundling of existing protocols is very poorly optimized. We have
                created our own optimizations for protocols used in multimedia
                interactions between our users and our operating system, as well
                as Virtual Network Computing (VNC) protocols for both users
                assisting rabbits in performing sensitive operations like
                authentication or payment, and for rabbits learning from user
                demonstrations.
              </p>
            </li>
            <li className="ml-32">
              <p>
                A unified standard to test, observe, and iterate the AI along
                with the product because LAM needs a "gym" to continue to learn
                and adapt and requires observations from product usage and
                external assistance. Our unique formalization of web, desktop,
                and mobile application structures, along with the actions
                performed on them, has enabled us to effectively utilize
                internet-scale scraped data and human feedback to train our
                models, all while requiring relatively low computational power.
              </p>
            </li>
          </ul>
          <br />
          <br />
          <p className=" text-wrap w-[85%]">
            This process highlights our dedication towards responsible
            deployment of LAM: it is put on a guardrail to produce behaviors
            that are safe, efficient, and indistinguishable from human behavior,
            making them a comfortable choice to delegate user interactions.
          </p>
        </div>
      </div>
    </>
  );
};

export default Competitiveness;
