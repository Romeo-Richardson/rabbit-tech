import React from "react";

type reference = {
  title: string;
  link: string;
};

const Reference = (): React.ReactNode => {
  const references: reference[] = [
    {
      title: "[1] R. Sutton, “The bitter lesson,” Mar. 13, 2019.",
      link: "http://www.incompleteideas.net/IncIdeas/BitterLesson.html",
    },
    {
      title:
        "[2] S. Barman, “Ringer: web automation by demonstration,” Sigplan Notices, vol. 51, no. 10, pp. 748–764, Oct. 2016, doi: 10.1145/3022671.2984020.",
      link: "https://dl.acm.org/doi/10.1145/3022671.2984020",
    },
    {
      title:
        "[3] J. Kaplan, “Scaling laws for neural language models,” arXiv.org, Jan. 23, 2020.",
      link: "https://arxiv.org/abs/2001.08361",
    },
    {
      title:
        "[4] X. Zhai, “Scaling vision transformers,” arXiv.org, Jun. 08, 2021.",
      link: "https://arxiv.org/abs/2001.08361https://arxiv.org/abs/2106.04560v2",
    },
    {
      title:
        "[5] T. Schick, “Toolformer: Language models can teach themselves to use tools,” arXiv.org, Feb. 09, 2023.",
      link: "https://arxiv.org/abs/2302.04761",
    },
    {
      title:
        "[6] E. Z. Liu, “Reinforcement learning on web interfaces using Workflow-Guided exploration,” arXiv.org, Feb. 24, 2018.",
      link: "https://arxiv.org/abs/1802.08802",
    },
    {
      title:
        "[7] Q. Chen, “Web Question Answering with Neurosymbolic Program Synthesis,” arXiv.org, Apr. 14, 2021.",
      link: "https://arxiv.org/abs/2104.07162",
    },
    {
      title:
        "[8] I. Gur, “A Real-World WebAgent with Planning, Long Context Understanding, and Program Synthesis,” arXiv.org, Jul. 24, 2023.",
      link: "https://arxiv.org/abs/2307.12856",
    },
    {
      title:
        "[9] S. Gulwani, “Automating string processing in spreadsheets using input-output examples,” 38th Annual ACM SIGPLAN-SIGACT Symposium on Principles of Programming Languages, Jan. 2011, doi: 10.1145/1926385.1926423.",
      link: "https://doi.org/10.1145/1926385.1926423",
    },
    {
      title: "[10] OpenAI, “GPT-4V(ision) system card.”",
      link: "https://openai.com/research/gpt-4v-system-card",
    },
    {
      title:
        "[11] M. R. Morris, “Levels of AGI: Operationalizing progress on the path to AGI,” arXiv.org, Nov. 04, 2023.",
      link: "https://arxiv.org/abs/2311.02462",
    },
    {
      title:
        "[12] T. B. Brown, “Language Models are Few-Shot Learners,” arXiv.org, May 28, 2020.",
      link: "https://arxiv.org/abs/2005.14165",
    },
    {
      title:
        "[13] A. Radford, “Robust speech recognition via Large-Scale Weak Supervision,” arXiv.org, Dec. 06, 2022.",
      link: "https://arxiv.org/abs/2212.04356",
    },
    {
      title:
        "[14] J. Shen, “Natural TTS synthesis by conditioning WaveNet on MEL spectrogram predictions,” arXiv.org, Dec. 16, 2017.",
      link: "https://arxiv.org/abs/1712.05884",
    },
    {
      title:
        "[15] Amazon Web Services, “AWS re:Invent 2015 | (MBL310) Alexa Voice Service Under the Hood,” YouTube. Oct. 12, 2015.",
      link: "https://www.youtube.com/watch?v=qEYbjCXOU7Q",
    },
    {
      title: "[16] OpenAI, “ChatGPT plugins.”",
      link: "https://openai.com/blog/chatgpt-plugins",
    },
    {
      title:
        "[17] J. Huang, “Large language models cannot Self-Correct reasoning yet,” arXiv.org, Oct. 03, 2023.",
      link: "https://arxiv.org/abs/2310.01798",
    },
    {
      title:
        "[18] S. G. Patil, “Gorilla: Large Language Model Connected with Massive APIs,” arXiv.org, May 24, 2023.",
      link: "https://arxiv.org/abs/2305.15334",
    },
    {
      title:
        "[19] M. Raza, “Web Data Extraction using Hybrid Program Synthesis: A Combination of Top-down and Bottom-up Inference,” 2020 ACM SIGMOD International Conference on Management of Data, May 2020, doi: 10.1145/3318464.3380608.",
      link: "https://doi.org/10.1145/3318464.3380608",
    },
    {
      title:
        "[20] J. Feser, “Metric Program synthesis,” arXiv.org, Jun. 13, 2022.",
      link: "https://arxiv.org/abs/2206.06164",
    },
    {
      title:
        "[21] A. Solar-Lezama, “The sketching approach to program synthesis,” in Lecture Notes in Computer Science, 2009, pp. 4–13. doi: 10.1007/978-3-642-10672-9_3.",
      link: "https://doi.org/10.1007/978-3-642-10672-9_3",
    },
    {
      title: "[22] Farama Foundation, “MiniWOB++ Documentation.”",
      link: "https://miniwob.farama.org/index.html",
    },
    {
      title:
        "[23] P. Sodhi, “HeaP: Hierarchical Policies for Web Actions using LLMs,” arXiv.org, Oct. 05, 2023.",
      link: "https://aps.arxiv.org/abs/2310.03720",
    },
    {
      title:
        "[24] I. Gur, “Understanding HTML with Large Language Models,” arXiv.org, Oct. 08, 2022.",
      link: "https://arxiv.org/abs/2210.03945",
    },
    {
      title:
        "[25] S. Geisler, “Transformers meet directed graphs,” arXiv.org, Jan. 31, 2023.",
      link: "https://arxiv.org/abs/2302.00049",
    },
    {
      title:
        "[26] X. Deng, “Mind2Web: towards a generalist agent for the web,” arXiv.org, Jun. 09, 2023.",
      link: "https://arxiv.org/abs/2306.06070",
    },
    {
      title:
        "[27] H. Furuta, “Multimodal Web Navigation with Instruction-Finetuned Foundation Models,” arXiv.org, May 19, 2023.",
      link: "https://arxiv.org/abs/2305.11854",
    },
    {
      title:
        "[28] L. Zheng, “Synapse: Trajectory-as-Exemplar Prompting with Memory for Computer Control,” arXiv.org, Jun. 13, 2023.",
      link: "https://arxiv.org/abs/2306.07863",
    },
  ];
  return (
    <div className="w-[92%] mx-auto pb-10">
      <div>
        <p className="text-3xl mb-10">reference</p>
      </div>
      <div className="w-[65%] mx-auto mb-10 flex flex-col gap-4">
        {references.map((ref, key) => (
          <a
            key={key}
            href={ref.link}
            className="w-[85%] text-gray-500 hover:text-gray-400 transition-colors "
          >
            {ref.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Reference;
