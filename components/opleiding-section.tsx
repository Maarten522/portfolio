"use client"

import { useLanguage } from "@/hooks/use-language"

export function OpleidingSection() {
  const { t } = useLanguage()

  const timelineItems = [
    {
      year: "2025",
      title: t("graduated"),
      description: t("graduatedDescription"),
      isEvent: true, // Dit is een gebeurtenis
    },
    {
      year: "2025",
      title: t("internship"),
      description: t("internshipDescription"),
      isEvent: true, // Dit is een gebeurtenis
    },
    {
      year: "2022 - 2025",
      title: t("thirdDegree"),
      institution: t("thirdInstitution"),
      description: t("thirdDescription"),
      isEvent: false, // Dit is een opleiding
    },
    {
      year: "2023",
      title: t("studentJob"),
      description: t("studentJobDescription"),
      isEvent: true, // Dit is een gebeurtenis
    },
    {
      year: "2022",
      title: t("certificate"),
      description: t("certificateDescription"),
      isEvent: true, // Dit is een gebeurtenis
    },
    {
      year: "2022",
      title: t("tsoGraduated"),
      description: t("tsoGraduatedDescription"),
      isEvent: true, // Dit is een gebeurtenis
    },
    {
      year: "2018 - 2022",
      title: t("secondDegree"),
      institution: t("secondInstitution"),
      description: t("secondDescription"),
      isEvent: false, // Dit is een opleiding
    },
    {
      year: "2016 - 2018",
      title: t("firstDegree"),
      institution: t("firstInstitution"),
      description: t("firstDescription"),
      isEvent: false, // Dit is een opleiding
    },
  ]

  return (
    <section id="opleiding" className="py-20 bg-card/0">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-50 font-[family-name:var(--font-playfair)]">
            {t("educationTitle")}
          </h2>

          <div className="relative flex items-center">
            {/* Horizontale lijn */}
            <div className="absolute top-1/2 transform -translate-y-1/2 w-full border-t border-muted-foreground"></div>

            {/* Tijdlijn items */}
            {timelineItems.map((item, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center text-center w-1/4 px-4"
              >
                {/* Cirkel */}
                <div
                  className={`absolute w-4 h-4 ${
                    item.isEvent ? "bg-secondary" : "bg-primary"
                  } rounded-full border border-muted-foreground top-1/2 transform -translate-y-1/2`}
                ></div>

                {/* Inhoud */}
                <div
                  className={`relative ${
                    item.isEvent ? "-top-36" : "top-36"
                  } w-[180%] ${
                    item.isEvent ? "text-right" : "text-left"
                  }`}
                  style={{
                    transformOrigin: "center", // Rotatiepunt in het midden
                  }}
                >
                  <p className="text-sm text-muted-foreground">{item.year}</p>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  {item.institution && (
                    <p className="text-sm text-muted-foreground italic">{item.institution}</p>
                  )}
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}