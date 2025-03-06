import { HeroSection } from "../components/hero-section"
import { AboutSection } from "../components/about-section"
import { ProjectsSection } from "../components/projects-section"
import { ContactSection } from "../components/contact-section"
import { Header } from "../components/header"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16 space-y-16">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  )
}