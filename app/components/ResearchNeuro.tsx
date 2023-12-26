import Image from "next/image";
import React from "react";
import tokenGraph from "../assets/whyanewmodelgraphic.jpg";

const ResearchNeuro = (): React.ReactNode => {
  return (
    <>
      <div className="w-[92%] mx-auto">
        <div>
          <p className="text-3xl">why a new neuro-symbolic model?</p>
        </div>
        <div className="w-[65%] mx-auto my-10">
          <p className="text-wrap w-[85%]">
            Our key observation is that the inherent structures of
            human-computer interactions differ from natural language or vision.
            The applications are expressed in a form that is more structured
            than a rasterized image and more verbose and noisy than a sentence
            or a paragraph. The characteristics we desire from a LAM are also
            different from a foundation model that understands language or
            vision alone: while we may want an intelligent chatbot to be
            creative, LAM-learned actions on applications should be highly
            regular, minimalistic (per Occam’s razor), stable, and explainable.
          </p>
        </div>
      </div>
      <div className="text-black bg-[#c2cbce]">
        <div className="w-[85%] mt-10 mx-auto">
          <p className="text-3xl">
            language models are ill-equipped to comprehend applications with raw
            text
          </p>
          <br />
          <p className="w-[55%] text-wrap">
            We measure the tokens required to represent common web applications
            across different snapshots in raw HTML. State-of-the-art large
            language models, with their existing tokenizers, have trouble
            fitting the raw-text application representation within their context
            window.
          </p>
        </div>
        <div>
          <Image src={tokenGraph} alt="Rabbit token graph"></Image>
        </div>
      </div>
      <div className="w-[92%] mx-auto mt-10 mb-20">
        <div className="w-[65%] mx-auto">
          <p className="text-wrap w-[85%]">
            Neural language models, by design, are not well suited to perform
            these tasks alone. Although they have shown the ability to
            understand and utilize application programming interfaces [16], user
            interfaces are very different and fundamentally less compatible with
            text. This implies that any neural language model operating a
            user-oriented interface would require a preprocessing step to
            transform such applications, and the actions performed on them, into
            a transitory representation of either raw text, rasterized images,
            or some tokenized sequence. Then, some form of reasoning would be
            performed using either test-time-adaptive prompt templates [23],
            instruction-driven [8], or reinforcement-learning-based fine-tuning
            [6]. Language models here would need to serve as end-to-end (action)
            reasoners, a task they still struggle to perform well [17]. This
            approach has several additional disadvantages: a tokenized sequence
            or a pixel array discards important structural information contained
            in applications [25], is often too long and noisy even for the most
            powerful and context-aware language models [24], and introduces
            vagueness on actions described in natural language [23]. Existing
            works and benchmarks either fail to provide promising results on
            real-life, complex applications [22] or completely rely on users to
            design and provide actions.
            <br />
            <br />
            Concurrently, there is a body of literature in the field of web
            automation and robotic process automation that involves the use of
            symbolic algorithms [2], [7], [19]. These methods have shown
            promising results in narrow domains and have been implemented in
            various products, ranging from productivity software [9] to
            computer-aided design [20]. The main challenge in these applications
            is the difficulty in generalization. Often, a specialized formal
            specification needs to be designed for a specific problem, and the
            heuristics used to solve one problem do not translate well to
            others.
            <br />
            <br />
            Both sides advocate for a hybrid approach, which involves combining
            a neural component and a symbolic component, a nascent field in its
            early stages of development:
          </p>
          <br />
          <br />
          <ul className="list-disc w-[75%] flex flex-col gap-4">
            <li className="ml-32">
              <p>
                We can define and model complex application structures, beyond
                simple token sequences, from first principles. They are
                compatible with both a symbolic algorithm and a neural network,
                where actions and action sequences are first-class citizens.
              </p>
            </li>
            <li className="ml-32">
              <p>
                We can achieve explainability, fast inference, and simplicity of
                a heuristic (which performs actions to satisfy user intentions)
                by leveraging a symbolic algorithm [2].
              </p>
            </li>
            <li className="ml-32">
              <p>
                We can benefit from the language, vision, and zero-shot
                reasoning capabilities of a neural network [10], which improve
                as more data becomes available [3].
              </p>
            </li>
          </ul>
          <br />
          <br />
          <p className=" text-wrap w-[85%]">
            We are optimistic that by investing in research efforts and
            computational resources, aided by similar preceding works in
            respective fields, this line of neuro-symbolic research could yield
            fruitful results. These fresh perspectives allow us to develop
            unique formulations and models that are surprisingly effective on
            the benchmarks we care about.
            <br />
            <br />
            To assist with the new model, we designed the technical stack from
            the ground up, from the data collection platform to a new network
            architecture that utilizes both transformer-style attention and
            graph-based message passing, combined with program synthesizers that
            are demonstration and example-guided [21].
          </p>
        </div>
      </div>
    </>
  );
};

export default ResearchNeuro;
