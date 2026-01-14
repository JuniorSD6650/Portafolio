import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import TechStackSection from "../components/TechStackSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactFooter from "../components/ContactFooter";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-slate-900 to-slate-800 min-h-screen text-slate-100 font-inter">
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <ProjectsSection />
      <ContactFooter />
    </main>
  );
}
