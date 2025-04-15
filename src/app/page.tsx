import { AboutMe } from "@/components/AboutMe";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { HomeSection } from "@/components/HomeSection";
import { FloatingButton } from "@/components/knap";
import { Project } from "@/components/Projects";

export default function Home() {
  return (
    <div>
      <HomeSection />
      <AboutMe />
      <Experience />
      <Project />
      <FloatingButton />
      <Contact />
      <br />
    </div>
  );
}
