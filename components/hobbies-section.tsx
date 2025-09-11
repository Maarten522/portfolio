"use client"

import { useLanguage } from "@/hooks/use-language"
import { Card, CardContent } from "@/components/ui/card"
import { Camera, Gamepad2, BookOpen, Code2, Music, Drum, CodeIcon, Cpu } from "lucide-react"

export function HobbiesSection() {
  const { t } = useLanguage()

  const hobbies = [
    {
      icon: Cpu,
      title: t("hobby4"),
      description: t("hobby4Description"),
      color: "text-blue-400",
    },
    {
      icon: Gamepad2,
      title: t("hobby2"),
      description: t("hobby2Description"),
      color: "text-green-400",
    },
    {
      icon: Drum,
      title: t("hobby3"),
      description: t("hobby3Description"),
      color: "text-yellow-400",
    },
    {
      icon: Camera,
      title: t("hobby1"),
      description: t("hobby1Description"),
      color: "text-pink-400",
    },
    
  ]

  return (
    <section id="hobbies" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 font-[family-name:var(--font-playfair)]">
            {t("hobbiesTitle")}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hobbies.map((hobby, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-background/50 border-border/50"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <hobby.icon
                      className={`h-12 w-12 mx-auto ${hobby.color} group-hover:scale-110 transition-transform duration-300`}
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{hobby.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed text-pretty">{hobby.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
