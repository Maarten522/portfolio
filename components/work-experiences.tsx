"use client"

import { useLanguage } from "@/hooks/use-language"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Calendar, MapPin, TrendingUp } from "lucide-react"
import { nl } from "date-fns/locale"

export function WorkExperienceSection() {
  const { language, t } = useLanguage()

  const experiences = [
    {
      company: "Zero Latency VR",
      role: {
        en: "Gamemaster",
        nl: "Gamemaster",
      },
      period: {
        en: "2022 - Present",
        nl: "2022 - Heden",
      },
      location: "Gent, BE",
      type: {
        en: "Student-job",
        nl: "Studentenjob",
      },
      description: {
        en: "Assisting customers with VR experiences, providing technical support, and ensuring smooth operation of the facility.",
        nl: "Helpen van klanten met VR-ervaringen, technische ondersteuning en zorgen voor een soepele werking van de faciliteit.",
      },
      technologies: {
        en: ["Customer Service", "Technical Support", "Teamwork"],
        nl: ["Klantenservice", "Technische ondersteuning", "Teamwerk"],
      },
      achievements: {
        en: "Excellent customer satisfaction ratings",
        nl: "Uitstekende klanttevredenheidscijfers",
      },
      current: true,
    },
    {
      company: "Muziekschool Lochristi & De Pinte VZW",
      role: {
        en: "Camp leader",
        nl: "Kampleiding",
      },
      period: {
        en: "2023 - Present",
        nl: "2023 - Heden",
      },
      location: "Lochristi, BE",
      type: {
        en: "Volunteer",
        nl: "Vrijwillig",
      },
      description: {
        en: "Organizing and leading activities for children during summer and easter camps, ensuring a fun and safe environment.",
        nl: "Organiseren en leiden van activiteiten voor kinderen tijdens zomer- en paasvakanties, zorgen voor een leuke en veilige omgeving.",
      },
      technologies: {
        en: ["Leadership", "Event Planning", "Child Care"],
        nl: ["Leiderschap", "Evenementenplanning", "Kinderopvang"],
      },
      achievements: {
        en: "Successfully managed groups of 20+ children",
        nl: "Succesvol groepen van 20+ kinderen geleid",
      },
      current: true,
    },
    {
      company: "Foodbar Margot",
      role: {
        en: "Waiter & bartender",
        nl: "Ober & barman",
      },
      period: {
        en: "2021 - 2022",
        nl: "2021 - 2022",
      },
      location: "Laarne, BE",
      type: {
        en: "Student",
        nl: "Student",
      },
      description: {
        en: "Serving food and drinks, managing customer orders, and ensuring a pleasant dining experience.",
        nl: "Opdienen van eten en drinken, opnemen van klantbestellingen en zorgen voor een aangename eetervaring.",
      },
      technologies: {
        en: ["Serving", "Customer Service", "Independence"],
        nl: ["Opdienen", "Klantvriendelijkheid", "Zelstandigheid"],
      },
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
      period: {
        en: "2025 (3 months)",
        nl: "2025 (3 maanden)",
      },
      location: "Gent, BE",
      type: {
        en: "Internship",
        nl: "Stage",
      },
      description: {
        en: "Developed and trained segmentation networks to identify defects in steel production, improving quality control processes.",
        nl: "Ontwikkeld en getraind van segmentatienetwerken om defecten in staalproductie te identificeren, wat de kwaliteitscontroleprocessen verbeterde.",
      },
      technologies: {
        en: ["YoloV8", "CNN", "GroundingDino", "Python", "PyTorch", "Machine Learning"],
        nl: ["YoloV8", "CNN", "GroundingDino", "Python", "PyTorch", "Machine Learning"],
      },
      achievements: {
        en: "Finished different AI models for segmentation and fire detection",
        nl: "Verschillende AI-modellen voor segmentatie en branddetectie afgerond",
      },
      current: false,
    },
  ]

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-balance">{t("workExperience")}</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty px-4">
            {t("WorkDescription")}
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/20 bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col gap-4 sm:gap-6">
                  {/* Company Info */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                          <div className="flex items-center gap-2">
                            <Building2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                            <h3 className="text-lg sm:text-xl font-semibold text-foreground">{exp.company}</h3>
                          </div>
                          {exp.current && (
                            <Badge
                              variant="default"
                              className="bg-primary/10 text-primary border-primary/20 self-start"
                            >
                              {t("current")}
                            </Badge>
                          )}
                        </div>
                        <h4 className="text-base sm:text-lg font-medium text-primary mb-3">
                          {exp.role[language as keyof typeof exp.role] || exp.role.en}
                        </h4>
                      </div>
                      <Badge variant="outline" className="text-xs self-start">
                        {exp.type[language as keyof typeof exp.type] || exp.type.en}
                      </Badge>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                        <span>{exp.period[language as keyof typeof exp.period] || exp.period.en}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                      {exp.description[language as keyof typeof exp.description] || exp.description.en}
                    </p>

                    {/* Achievement */}
                    {(exp.achievements[language as keyof typeof exp.achievements] || exp.achievements.en) && (
                      <div className="flex items-start gap-2 mb-4 p-3 bg-primary/5 rounded-lg border border-primary/10">
                        <TrendingUp className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-primary">
                          {exp.achievements[language as keyof typeof exp.achievements] || exp.achievements.en}
                        </span>
                      </div>
                    )}

                    {/* Technologies */}
                    {exp.technologies[language as keyof typeof exp.technologies]?.length > 0 && (
                      <div className="mt-4">
                        <h5 className="font-medium mb-3 text-foreground text-sm sm:text-base">
                          {t("technologiesUsed")}
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies[language as keyof typeof exp.technologies].map((tech, techIndex) => (
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
        <div className="text-center mt-8 sm:mt-12 px-4">
          <p className="text-muted-foreground mb-4 text-sm sm:text-base">{t("collaborateMessage")}</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium text-sm sm:text-base"
          >
            {t("getInTouch")}
          </a>
        </div>
      </div>
    </section>
  )
}
