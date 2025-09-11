"use client"

import { LanguageProvider } from "@/hooks/use-language"
import { PortfolioHeader } from "@/components/portfolio-header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { HobbiesSection } from "@/components/hobbies-section"
import { ContactSection } from "@/components/contact-section"
import { OpleidingSection } from "@/components/opleiding-section"
import { WorkExperienceSection } from "@/components/work-experiences"

export default function Portfolio() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground">
        <PortfolioHeader />
        <main>
          <HeroSection />
          <AboutSection />
          <OpleidingSection />
          <WorkExperienceSection />
          <ProjectsSection />
          <HobbiesSection />
          <ContactSection />
        </main>

        <footer className="py-8 text-center text-muted-foreground border-t border-border">
          <div className="container mx-auto px-4">
            <p>&copy; 2025 Maarten Van der Schueren. Built with love</p>
          </div>
        </footer>
      </div>
    </LanguageProvider>
  )
}
