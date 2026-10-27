import HeroSection from "@/components/hero/hero-section";
import FeaturedProjects from "@/components/projects/featured-projects";
import AboutPreview from "@/components/about/about-preview";
import SkillsSection from "@/components/skills/skills-section";
import ProblemSolvingPreview from "@/components/problem-solving/problem-solving-preview";
import EducationSection from "@/components/education/education-section";
import CredentialsPreview from "@/components/credentials/credentials-preview";
import ContactSection from "@/components/contact/contact-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedProjects />
      <AboutPreview />
      <SkillsSection />
      <ProblemSolvingPreview />
      <EducationSection />
      <CredentialsPreview />
      <ContactSection />
    </main>
  );
}
