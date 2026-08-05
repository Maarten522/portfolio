"use client"

import { useLanguage } from "@/hooks/use-language"
import { LanguageSwitcher } from "@/components/language-switcher"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { useEffect, useState } from "react"

export function PortfolioHeader() {
  const { t } = useLanguage()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

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
            onClick={() => scrollToSection("education")}
            className="text-muted-foreground hover:text-foreground"
          >
            {t("education")}
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

        <div className="flex items-center gap-3">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="text-muted-foreground hover:text-foreground"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          )}
          <a
            href="https://www.instagram.com/maarten522/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
          </a>
          <a
            href="https://www.facebook.com/maarten.vanderschueren.9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Facebook"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  )
}
