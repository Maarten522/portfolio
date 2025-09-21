"use client"

import { useLanguage } from "@/hooks/use-language"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Calendar, Star } from "lucide-react"

interface EducationItem {
  id: string
  institution: string
  degree: string
  period: string
  description: string
  certificates?: string[]
  vaardigheden?: string[]
  status: "completed" | "current" | "upcoming"
}

const educationData = {
  en: [
    {
      id: "master",
      institution: "University of Ghent",
      degree: "Master Industrial Sciences - Electronics-ICT",
      period: "2025 - 2028",
      description:
        "Focus on advanced technologies and in-depth knowledge in electronics and ICT. Aimed at innovation and research.",
      certificates: [],
      vaardigheden: [],
      status: "current" as const,
    },
    {
      id: "bachelor",
      institution: "University College of Ghent",
      degree: "Bachelor Applied Computer Science - Data & AI",
      period: "2022 - 2025",
      description:
        "Specializing in data science, artificial intelligence, and machine learning. Focus on practical applications and real-world problem solving.",
      certificates: ["IBM Master The Mainframe", "Bachelor Applied Computer Science"],
      vaardigheden: ["Python", "Machine Learning", "Data Analysis", "SQL", "TensorFlow", "PyTorch"],
      status: "completed" as const,
    },
    {
      id: "highschool",
      institution: "Edugo Campus Glorieux",
      degree: "Electromechanics - TSO",
      period: "2016 - 2022",
      description:
        "Graduated with a heart for mechanic and electronic solutions. Strong foundation in analytical thinking and problem solving.",
      certificates: ["VCA"],
      vaardigheden: ["PLC", "Pneumatics", "Electrical Systems"],
      status: "completed" as const,
    },
  ],
  nl: [
    {
      id: "master",
      institution: "Universiteit van Gent",
      degree: "Master Industriële Wetenschappen - Elektronica-ICT",
      period: "2025 - 2028",
      description:
        "Focus op geavanceerde technologieën en diepgaande kennis in elektronica en ICT. Gericht op innovatie en onderzoek.",
      certificates: [],
      vaardigheden: [],
      status: "current" as const,
    },
    {
      id: "bachelor",
      institution: "Hogeschool Gent",
      degree: "Bachelor Informatica - Data & AI",
      period: "2022 - 2025",
      description:
        "Specialisatie in data science, kunstmatige intelligentie en machine learning. Focus op praktische toepassingen en echte problemen oplossen.",
      certificates: ["IBM Master The Mainframe", "Bachelor Toegepaste Informatica"],
      vaardigheden: ["Python", "Machine Learning", "Data Analyse", "SQL", "TensorFlow", "PyTorch"],
      status: "completed" as const,
    },
    {
      id: "highschool",
      institution: "Edugo Campus Glorieux",
      degree: "Elektromechanica - TSO",
      period: "2016 - 2022",
      description:
        "Afgestudeerd met een hart voor mechanische en elektronische oplossingen. Sterke basis in analytisch denken en probleemoplossing.",
      certificates: ["VCA certificaat", "Diploma Elektormechanica 3de graad"],
      vaardigheden: ["PLC", "Pneumatiek", "Elektrische Systemen"],
      status: "completed" as const,
    },
  ],
}

const translations = {
  en: {
    title: "Education",
    subtitle: "My academic journey in computer science and data & AI",
    current: "Current",
    completed: "Completed",
    certificates: "Certificates",
    vaardigheden: "Skills",
  },
  nl: {
    title: "Onderwijs",
    subtitle: "Mijn academische reis in informatica en data & AI",
    current: "Huidig",
    completed: "Voltooid",
    certificates: "Certificaten",
    vaardigheden: "Vaardigheden",
  },
}

export function OpleidingSection() {
  const { language } = useLanguage()
  const t = translations[language]
  const education = educationData[language]

  return (
    <section id="education" className="py-12 sm:py-16 lg:py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance">{t.title}</h2>
          </div>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty px-4">{t.subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="hidden sm:block absolute left-6 lg:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>

            <div className="space-y-8 sm:space-y-12">
              {education.map((item, index) => (
                <div key={item.id} className="relative flex items-start gap-4 sm:gap-6 lg:gap-8">
                  <div
                    className={`relative z-10 flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full border-4 flex-shrink-0 ${
                      item.status === "current"
                        ? "bg-primary border-primary shadow-lg shadow-primary/25"
                        : "bg-background border-primary/30"
                    }`}
                  >
                    <GraduationCap
                      className={`h-4 w-4 sm:h-6 sm:w-6 ${item.status === "current" ? "text-primary-foreground" : "text-primary"}`}
                    />
                  </div>

                  {/* Content card */}
                  <Card className="flex-1 border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 sm:mb-6 gap-2">
                        <div className="flex-1">
                          <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-1">{item.degree}</h3>
                          <p className="text-primary font-medium text-sm sm:text-base">{item.institution}</p>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                            <span>{item.period}</span>
                          </div>
                          <Badge variant={item.status === "current" ? "default" : "secondary"} className="self-start">
                            {item.status === "current" ? t.current : t.completed}
                          </Badge>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4 text-pretty text-sm sm:text-base leading-relaxed">
                        {item.description}
                      </p>

                      {item.certificates && item.certificates.length > 0 && (
                        <div className="mb-4">
                          <div className="flex items-center gap-2 mb-3">
                            <Award className="h-4 w-4 text-primary" />
                            <span className="text-sm font-medium text-foreground">{t.certificates}:</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {item.certificates.map((cert, certIndex) => (
                              <Badge key={certIndex} variant="outline" className="text-xs">
                                {cert}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      {item.vaardigheden && item.vaardigheden.length > 0 && (
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <Star className="h-4 w-4 text-primary" />
                            <span className="text-sm font-medium text-foreground">{t.vaardigheden}:</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {item.vaardigheden.map((vaardig, vaardIndex) => (
                              <Badge key={vaardIndex} variant="secondary" className="text-xs">
                                {vaardig}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
