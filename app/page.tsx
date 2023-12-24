import Image from "next/image";
import Navbar from "./components/Navbar";
import HomeDeviceSection from "./components/HomeDeviceSection";
import HomeFactoryVideo from "./components/HomeFactoryVideo";
import HomeOS from "./components/HomeOS";
import Divider from "./components/Divider";
import SystemOverview from "./components/SystemOverview";
import HowLAM from "./components/HowLAM";
import ComingSoon from "./components/ComingSoon";
import LatestUpdates from "./components/LatestUpdates";
import Hiring from "./components/Hiring";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HomeDeviceSection></HomeDeviceSection>
      <HomeFactoryVideo></HomeFactoryVideo>
      <HomeOS></HomeOS>
      <Divider></Divider>
      <SystemOverview></SystemOverview>
      <Divider></Divider>
      <HowLAM></HowLAM>
      <Divider></Divider>
      <ComingSoon></ComingSoon>
      <Divider></Divider>
      <LatestUpdates></LatestUpdates>
      <Divider></Divider>
      <Hiring></Hiring>
    </main>
  );
}
