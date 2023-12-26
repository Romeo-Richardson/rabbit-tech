import Image from "next/image";
import React from "react";
import demonstrationGif from "../assets/learningbydemo-1.gif";
import Divider from "./Divider";

const Demonstration = (): React.ReactNode => {
  return (
    <>
      <div className="w-[92%] mx-auto">
        <div>
          <p className="text-3xl mb-10">background</p>
        </div>
        <div className="w-[65%] mx-auto mb-10">
          <p className=" text-wrap w-[85%]">
            {`LAM's modeling approach is rooted in imitation, or learning by
            demonstration: it observes a human using the interface and aims to
            reliably replicate the process, even if the interface is presented
            differently or slightly changed. Instead of having a black-box model
            uncontrollably outputting actions and adapting to the application
            during inference, LAM's "recipe" is more observable. This means that
            once the demonstration is provided, the synthesized routine runs
            directly on the target application without the need for a busy loop
            of "observation" or "thoughts," and any technically trained human
            should be able to inspect the "recipe" and reason about its inner
            workings. As LAM accumulates knowledge from demonstrations over
            time, it gains a deep understanding of every aspect of an interface
            exposed by an application and creates a "conceptual blueprint" of
            the underlying service provided by the application. LAM can be seen
            as a bridge, connecting users to these services through the
            application's interface.`}
          </p>
        </div>
      </div>
      <div className="bg-[#c2cbce] flex flex-col gap-12 py-10">
        <div>
          <video
            className="w-[60%] mx-auto rounded-lg"
            src={require("../../public/learningbydemo-0.mp4")}
            autoPlay
            loop
            muted
          ></video>
        </div>
        <div>
          <Image
            className="w-[60%] mx-auto rounded-lg"
            src={demonstrationGif}
            alt="Gif showing how Rabbit OS works"
            priority
            unoptimized
          ></Image>
        </div>
      </div>
      <div className="w-[92%] mx-auto my-10">
        <div className="w-[65%] mx-auto mb-10">
          <p className=" text-wrap w-[85%]">
            {`We believe that in the long run, LAM exhibits its own version of
            "scaling laws," [3] where the actions it learns can generalize to
            applications of all kinds, even generative ones. Over time, LAM
            could become increasingly helpful in solving complex problems
            spanning multiple apps that require professional skills to operate.`}
            <br />
            <br />
            {`By utilizing neuro-symbolic techniques in the loop, LAM sits on the
            very frontier of interdisciplinary scientific research in language
            modeling (LM), programming languages (PL), and formal methods (FM).
            Traditionally, the PL/FM community has focused on symbolic
            techniques — solver technologies that rely on logical principles of
            induction, deduction, and heuristic search. While these symbolic
            techniques can be highly explainable and come with strong
            guarantees, they suffer from a scalability limit. By contrast,
            recent innovations in the LM community are grounded in machine
            learning and neural techniques: while highly scalable, they suffer
            from a lack of explainability and come with no guarantees of the
            output produced. Inspired by the success of machine learning and
            neural techniques, the PL/FM community has recently made waves of
            progress on neuro-symbolic methods: by putting together neural
            techniques (such as LLM) and symbolic ones, one ends up combining
            the best parts of both worlds, making the task of creating scalable
            and explainable learning agents a feasible one. Yet to date, no one
            has put cutting-edge neuro-symbolic techniques into production — LAM
            seeks to pioneer this direction.`}
          </p>
        </div>
      </div>
      <Divider></Divider>
      <div className="w-[92%] mx-auto">
        <div>
          <p className="text-3xl mb-10">
            performing actions responsibly & reliably
          </p>
        </div>
        <div className="w-[65%] mx-auto mb-10">
          <p className=" text-wrap w-[85%]">
            {`LAM does not live in a vacuum. In order to efficiently leverage the
            power of LAM to execute tasks on behalf of users on dedicated
            hardware, we designed new platforms to schedule and manage
            LAM-powered routines. In addition, LAM interacts with applications
            designed for humans. This means that knowing only how to perform an
            objective is not sufficient: LAM and their peripheral software need
            to know how to do it in a humanizing, respectful way. This is
            further broken down into several key elements, in addition to our
            core model development, to support our system:`}
          </p>
        </div>
      </div>
    </>
  );
};

export default Demonstration;
