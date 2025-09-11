"use client"

import { useLanguage } from "@/hooks/use-language"
import { LanguageSwitcher } from "@/components/language-switcher"
import { Button } from "@/components/ui/button"

export function PortfolioHeader() {
  const { t } = useLanguage()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="font-bold text-xl font-mono">{"<MVDS/>"}</div>

        <nav className="hidden md:flex items-center space-x-6">
          <Button
            variant="ghost"
            onClick={() => scrollToSection("about")}
            className="text-muted-foreground hover:text-foreground"
          >
            {t("about")}
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection("projects")}
            className="text-muted-foreground hover:text-foreground"
          >
            {t("projects")}
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection("hobbies")}
            className="text-muted-foreground hover:text-foreground"
          >
            {t("hobbies")}
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection("contact")}
            className="text-muted-foreground hover:text-foreground"
          >
            {t("contact")}
          </Button>
        </nav>

        <LanguageSwitcher />
      </div>
    </header>
  )
}
