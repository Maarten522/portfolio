"use client"

import Link from "next/link"
import { useLanguage } from "@/hooks/use-language"
import { Button } from "@/components/ui/button"
import { Compass, Home } from "lucide-react"

export function NotFoundContent() {
  const { t } = useLanguage()

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-background via-background to-card">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-xl mx-auto">
          <Compass className="h-16 w-16 mx-auto mb-8 text-primary animate-pulse" />

          <h1 className="text-7xl md:text-8xl font-bold mb-4 text-primary font-[family-name:var(--font-playfair)]">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 font-[family-name:var(--font-playfair)]">
            {t("notFoundTitle")}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 text-pretty">
            {t("notFoundDescription")}
          </p>

          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
            <Link href="/">
              <Home className="h-5 w-5 mr-2" />
              {t("backHome")}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
