"use client"

import { useState } from "react"
import { useLanguage } from "@/hooks/use-language"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const prefix = process.env.NODE_ENV === "production" && process.env.VERCEL !== "1" ? "/portfolio" : "";


export function ProjectsSection() {
  const { t } = useLanguage()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentVideo, setCurrentVideo] = useState<string | null>(null)

  const projects = [
    {
      title: t("project1Title"),
      description: t("project1Description"),
      image: `${prefix}/GIP.png`,
      video: `${prefix}/eindwerk.mp4`, // Voeg hier de videolink toe
      code: "",
      tags: ["PLC", "Elektriciteit", "Mechanica"],
    },
    {
      title: t("project2Title"),
      description: t("project2Description"),
      image: `${prefix}/solar.png`,
      video: "",
      code: "",
      tags: ["pandas", "scikit-learn", "Tensorflow"],
    },
    {
      title: t("project3Title"),
      description: t("project3Description"),
      image: `${prefix}/chatbot.png`,
      video: "",
      code: "",
      tags: ["NLP", "TensorFlow", "Node.js"],
    },
  ]

  const openModal = (video: string) => {
    setCurrentVideo(video)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setCurrentVideo(null)
    setIsModalOpen(false)
  }

  return (
    <section id="projects" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 font-[family-name:var(--font-playfair)]">
            {t("projectsTitle")}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border"
              >
                <CardHeader className="p-0">
                  <div className="h-90 bg-muted rounded-t-lg overflow-hidden">
                    <img
                      src={project.image || `${prefix}/placeholder.svg`}
                      alt={project.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="mb-3 text-xl">{project.title}</CardTitle>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    {project.code && ( // Controleer of er een code-link is
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 bg-transparent"
                        onClick={() => window.open(project.code, "_blank")}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    )}
                    {project.video && ( // Controleer of er een video is
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 bg-transparent"
                        onClick={() => openModal(project.video)}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && currentVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-3xl w-full">
            <div className="relative">
              <video controls autoPlay muted loop className="w-full">
                <source src={currentVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2"
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}