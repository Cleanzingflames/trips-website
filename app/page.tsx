import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import SightingsMap from "@/components/SightingsMap";
import WitnessStatements from "@/components/WitnessStatements";
import Speculation from "@/components/Speculation";
import Timeline from "@/components/Timeline";
import SubmitReport from "@/components/SubmitReport";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <SightingsMap />
      <WitnessStatements />
      <Speculation />
      <Timeline />
      <SubmitReport />
    </>
  );
}