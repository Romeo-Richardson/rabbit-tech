import Image from "next/image";
import Navbar from "./components/Navbar";
import HomeDeviceSection from "./components/HomeDeviceSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar></Navbar>
      <HomeDeviceSection></HomeDeviceSection>
    </main>
  );
}
