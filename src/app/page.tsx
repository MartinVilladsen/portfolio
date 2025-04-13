import { AboutMe } from "@/components/AboutMe";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { HomeSection } from "@/components/HomeSection";
import { FloatingButton } from "@/components/knap";

export default function Home() {
  return (
    <div>
      <HomeSection />
      <AboutMe />
      <Experience />
      <FloatingButton />
      <Contact />
      
    </div>
  );
}
