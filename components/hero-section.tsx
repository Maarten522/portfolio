"use client"

import { useLanguage } from "@/hooks/use-language"
import { useTypewriter } from "@/hooks/use-typewriter"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

const prefix = process.env.NODE_ENV === "production" && process.env.VERCEL !== "1" ? "/portfolio" : "";


export function HeroSection() {
  const { t, language } = useLanguage()

  const subtitleWords =
    language === "en"
      ? [
          "Specializing in Data & AI",
          "Machine Learning",
          "Graduate Applied Computer Science",
          "Technology Enthusiast",
          "Student Industrial Sciences",
        ]
      : [
          "Gespecialiseerd in Data & AI",
          "Machine Learning",
          "Afgestudeerd student Toegepaste Informatica",
          "Probleemoplosser",
          "Student Industriële Wetenschappen",
        ]

  const typewriterText = useTypewriter({
    words: subtitleWords,
    typeSpeed: 100,
    deleteSpeed: 50,
    delayBetweenWords: 2000,
  })

  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    element?.scrollIntoView({ behavior: "smooth" })
  }
  const scrollToAbout = () => {
    const element = document.getElementById("about")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-background via-background to-card">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="relative w-40 h-40 md:w-60 md:h-60 mx-auto mt-30 mb-10">
              <img
                src={`${prefix}/cartoon.png`}
                alt="Profile picture"
                className="w-full h-full rounded-full object-cover border-4 border-primary/20 shadow-2xl"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-[family-name:var(--font-playfair)] text-balance">
            {t("heroTitle")}
          </h1>
          <h2 className="text-2xl md:text-3xl text-primary mb-8 font-semibold"><span>{typewriterText}</span>
            <span className="animate-pulse ml-1 text-primary">|</span></h2>
         

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
            >
              {t("viewWork")}
            </Button>

            <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => window.open("https://github.com/maarten522", "_blank")}
                >
                  <Github className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => window.open("https://www.linkedin.com/in/maartenvds", "_blank")}
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => (window.location.href = "mailto:maarten.vanderschueren@telenet.be")}
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground cursor-pointer" onClick={(scrollToAbout)}/>
      </div>
    </section>
  )
}
