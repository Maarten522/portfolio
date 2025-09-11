"use client"

import { useLanguage } from "@/hooks/use-language"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Calendar, MapPin, TrendingUp } from "lucide-react"

export function WorkExperienceSection() {
  const { language, t } = useLanguage()

  const experiences = [
    {
      company: "Zero Latency VR",
      role: {
        en: "Gamemaster",
        nl: "Gamemaster",
      },
      period: "2023 - Present",
      location: "Gent, BE",
      type: {
        en: "Student-job",
        nl: "Studentenjob",
      },
      description: {
        en: "Assisting customers with VR experiences, providing technical support, and ensuring smooth operation of the facility.",
        nl: "Helpen van klanten met VR-ervaringen, technische ondersteuning en zorgen voor een soepele werking van de faciliteit.",
      },
      technologies: ["Customer Service", "Technical Support", "Teamwork"],
      achievements: {},
      current: true,
    },
    {
      company: "Muziekschool Lochristi & De Pinte VZW",
      role: {
        en: "Camp leader",
        nl: "Kampleiding",
      },
      period: "2023 - Present",
      location: "Lochristi, BE",
      type: {
        en: "Volunteer",
        nl: "Vrijwillig",
      },
      description: {
        en: "Organizing and leading activities for children during summer and easter camps, ensuring a fun and safe environment.",
        nl: "Organiseren en leiden van activiteiten voor kinderen tijdens zomer- en paasvakanties, zorgen voor een leuke en veilige omgeving.",
      },
      technologies: [],
      achievements: {
      },
      current: true,
    },
    {
      company: "ArcelorMittal Gent",
      role: {
        en: "Computer Vision Intern",
        nl: "Computer Vision Stagiair",
      },
      period: "2025 (3 months)",
      location: "Gent, BE",
      type: {
        en: "Internship",
        nl: "Stage",
      },
      description: {
        en: "Developed and trained segmentation networks to identify defects in steel production, improving quality control processes.",
        nl: "Ontwikkeld en getraind van segmentatienetwerken om defecten in staalproductie te identificeren, wat de kwaliteitscontroleprocessen verbeterde.",
      },
      technologies: ["YoloV8", "CNN", "GroundingDino", "Python", "PyTorch", "Machine Learning"],
      achievements: {
        en: "Finished different AI models for segmentation and fire detection",
        nl: "Verschillende AI-modellen voor segmentatie en branddetectie afgerond",
      },
      current: false,
    },
  ]

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-balance">
            {t("workExperience")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t("WorkDescription")}
          </p>
        </div>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/20 bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Company Info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <Building2 className="h-5 w-5 text-primary" />
                          <h3 className="text-xl font-semibold text-foreground">{exp.company}</h3>
                          {exp.current && (
                            <Badge variant="default" className="bg-primary/10 text-primary border-primary/20">
                              {t("current")}
                            </Badge>
                          )}
                        </div>
                        <h4 className="text-lg font-medium text-primary mb-3">
                          {exp.role[language as keyof typeof exp.role] || exp.role.en}
                        </h4>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {exp.type[language as keyof typeof exp.type] || exp.type.en}
                      </Badge>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description[language as keyof typeof exp.description] || exp.description.en}
                    </p>

                 {/* Achievement */}
                    {exp.achievements[language as keyof typeof exp.achievements] || exp.achievements.en ? (
                    <div className="flex items-center gap-2 mb-4 p-3 bg-primary/5 rounded-lg border border-primary/10">
                        <TrendingUp className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium text-primary">
                        {exp.achievements[language as keyof typeof exp.achievements] || exp.achievements.en}
                        </span>
                    </div>
                    ) : null}

                    {/* Technologies */}
                    {exp.technologies.length > 0 && (
                    <div className="lg:w-64">
                        <h5 className="font-medium mb-3 text-foreground">
                        {t("technologiesUsed")}
                        </h5>
                        <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                            <Badge
                            key={techIndex}
                            variant="secondary"
                            className="text-xs bg-secondary/50 hover:bg-secondary/80 transition-colors"
                            >
                            {tech}
                            </Badge>
                        ))}
                        </div>
                    </div>
                    )}
                    </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            {t("collaborateMessage")}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            {t("getInTouch")}
          </a>
        </div>
      </div>
    </section>
  )
}
