"use client";

import { useState } from "react";
import { useLanguage } from "@/hooks/use-language";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, X, Play } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const prefix = process.env.VERCEL !== "1" ? "/portfolio" : "";

const GRID_THRESHOLD = 3;

type Project = {
  title: string;
  description: string;
  image: string;
  video: string;
  code: string;
  website: string;
  tags: string[];
};

export function ProjectsSection() {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: t("project1Title"),
      description: t("project1Description"),
      image: `${prefix}/images/GIP.png`,
      video: `${prefix}/videos/eindwerk.mp4`,
      code: "",
      website: "",
      tags: ["PLC", "Elektriciteit", "Mechanica"],
    },
    {
      title: t("project3Title"),
      description: t("project3Description"),
      image: `${prefix}/images/chatbot.png`,
      video: "",
      code: "",
      website: "",
      tags: ["NLP", "TensorFlow", "Node.js"],
    },
     {
      title: t("project4Title"),
      description: t("project4Description"),
      image: `${prefix}/images/3DPrint.png`,
      video: "",
      code: "",
      website: "https://makerworld.com/nl/@Maarten522",
      tags: ["Fusion 360", "SolidWorks", "Bambu Studio", "3D Printing"],
    },
    {
      title: t("project5Title"),
      description: t("project5Description"),
      image: `${prefix}/images/magiccompass.png`,
      video: `${prefix}/videos/magisch kompas.mp4`,
      code: "",
      website: "",
      tags: ["Electronics", "Arduino", "Soldering", "3D Printing"],
    },
     
    {
      title: t("project2Title"),
      description: t("project2Description"),
      image: `${prefix}/images/solar.png`,
      video: "",
      code: "",
      website: "",
      tags: ["pandas", "scikit-learn", "Tensorflow"],
    },
    
  ];

  const useCarousel = projects.length > GRID_THRESHOLD;

  const ProjectCard = ({ project }: { project: Project }) => (
    <Card
      className="group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border-border h-full"
      onClick={() => setSelectedProject(project)}
    >
      <CardHeader className="p-0">
        <div className="h-48 bg-muted rounded-t-lg overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="mb-3 text-xl">{project.title}</CardTitle>
        <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span key={i} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">
              {tag}
            </span>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted-foreground/60 italic">{t("clickForInfo")}</p>
      </CardContent>
    </Card>
  );

  return (
    <section id="projects" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 font-[family-name:var(--font-playfair)]">
            {t("projectsTitle")}
          </h2>

          {useCarousel ? (
            <Carousel
              opts={{ align: "start", loop: true }}
              plugins={[Autoplay({ delay: 4000, stopOnInteraction: true, stopOnMouseEnter: true })]}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {projects.map((project, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <ProjectCard project={project} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-4 md:-left-6" />
              <CarouselNext className="-right-4 md:-right-6" />
            </Carousel>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Project detail modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-card border border-border rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header afbeelding */}
            <div className="relative h-56 bg-muted rounded-t-2xl overflow-hidden">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-contain"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 bg-background/80 hover:bg-background text-foreground rounded-full p-1.5 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-bold font-[family-name:var(--font-playfair)]">
                {selectedProject.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag, i) => (
                  <span key={i} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {selectedProject.description}
              </p>

              {/* Video */}
              {selectedProject.video && (
                <div className="rounded-xl overflow-hidden bg-black">
                  <video controls className="w-full max-h-72">
                    <source src={selectedProject.video} type="video/mp4" />
                  </video>
                </div>
              )}

              {/* Knoppen */}
              {(selectedProject.code || selectedProject.website) && (
                <div className="flex gap-3 pt-2">
                  {selectedProject.code && (
                    <Button
                      variant="outline"
                      className="flex-1 bg-transparent"
                      onClick={() => window.open(selectedProject.code, "_blank")}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  )}
                  {selectedProject.website && (
                    <Button
                      variant="outline"
                      className="flex-1 bg-transparent"
                      onClick={() => window.open(selectedProject.website, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Bekijk project
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
