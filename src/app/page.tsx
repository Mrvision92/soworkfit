import { Hero } from "@/components/home/Hero";
import { Objectifs } from "@/components/home/Objectifs";
import { Coachings } from "@/components/home/Coachings";
import { Coach } from "@/components/home/Coach";
import { Methode } from "@/components/home/Methode";
import { Transformations } from "@/components/home/Transformations";
import { Nutrition } from "@/components/home/Nutrition";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Objectifs />
      <Coachings />
      <Coach />
      <Methode />
      <Transformations />
      <Nutrition />
      <FinalCTA />
    </>
  );
}
