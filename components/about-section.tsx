"use client"

import { useLanguage } from "@/hooks/use-language"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Brain, TrendingUp } from "lucide-react"

export function AboutSection() {
  const { t } = useLanguage()

  const skills = [
    { icon: Code, label: "Programming", color: "text-blue-400" },
    { icon: Database, label: "Data Analysis", color: "text-green-400" },
    { icon: Brain, label: "Machine Learning", color: "text-purple-400" },
    { icon: TrendingUp, label: "Statistics", color: "text-orange-400" },
  ]

  return (
    <section id="about" className="py-20 bg-card/80">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 font-[family-name:var(--font-playfair)]">
            {t("aboutTitle")}
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-pretty">{t("aboutDescription")}</p>

              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <Card
                    key={index}
                    className="bg-background/50 border-border/50 hover:bg-background/80 transition-colors"
                  >
                    <CardContent className="p-4 text-center">
                      <skill.icon className={`h-8 w-8 mx-auto mb-2 ${skill.color}`} />
                      <p className="text-sm font-medium">{skill.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                <div className="text-6xl"><img src="/maarten.jpg" alt="" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
