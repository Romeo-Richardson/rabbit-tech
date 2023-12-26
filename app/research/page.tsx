import React from "react";
import ResearchHero from "../components/ResearchHero";
import ResearchHeroText from "../components/ResearchHeroText";
import ResearchVideo from "../components/ResearchVideo";
import Divider from "../components/Divider";
import Background from "../components/Background";
import ResearchNeuro from "../components/ResearchNeuro";
import Demonstration from "../components/Demonstration";
import Competitiveness from "../components/Competitiveness";
import NativeDevices from "../components/NativeDevices";
import Outlook from "../components/Outlook";
import Footnotes from "../components/Footnotes";
import Reference from "../components/Reference";
import Citation from "../components/Citation";

const ResearchPage = (): React.ReactNode => {
  return (
    <main className="flex min-h-screen flex-col">
      <ResearchHero></ResearchHero>
      <ResearchHeroText></ResearchHeroText>
      <ResearchVideo></ResearchVideo>
      <Divider></Divider>
      <Background></Background>
      <Divider></Divider>
      <ResearchNeuro></ResearchNeuro>
      <Divider></Divider>
      <Demonstration></Demonstration>
      <Competitiveness></Competitiveness>
      <NativeDevices></NativeDevices>
      <Divider></Divider>
      <Outlook></Outlook>
      <Divider></Divider>
      <Footnotes></Footnotes>
      <Divider></Divider>
      <Reference></Reference>
      <Divider></Divider>
      <Citation></Citation>
    </main>
  );
};

export default ResearchPage;
