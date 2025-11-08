"use client"

import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiTensorflow,
  SiPandas,
  SiDocker,
  SiArduino,
  SiEclipseide,
  SiNumpy,
  SiNeo4J,
} from "react-icons/si"

import { FaGithub, FaJava, FaLinux } from "react-icons/fa";

const skills = [
  { icon: SiPython, name: "Python", color: "#3776AB" },
  { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { icon: SiMongodb, name: "MongoDB", color: "#13AA52" },
  { icon: SiGit, name: "Git", color: "#F1502F" },
  { icon: SiTensorflow, name: "TensorFlow", color: "#FF6F00" },
  { icon: SiPandas, name: "Pandas", color: "#150458" },
  { icon: SiDocker, name: "Docker", color: "#2496ED" },
  { icon: FaJava, name: "Java", color: "#e8932c" },
  { icon: SiArduino, name: "Arduino", color: "#00969c" },
  { icon: FaGithub, name: "Github", color: "#ffffff" },
  { icon: SiEclipseide, name: "Eclips (Java)", color: "#3f2c78" },
  { icon: SiNumpy, name: "Numpy", color: "#4caacf" },
  { icon: SiNeo4J, name: "Neo4j", color: "#014163" },
  { icon: FaLinux, name: "Linux", color: "#ffffff" },

]

export function SkillsCarousel() {
  return (
    <section className="py-8 sm:py-12 bg-card/30 backdrop-blur-sm border-y border-border/50">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-sm font-semibold text-muted-foreground mb-6 uppercase tracking-wide">
          Tech Skills
        </h3>

        <div className="overflow-hidden">
          <div className="flex animate-scroll gap-8 sm:gap-12">
            {/* Original set */}
            {skills.map((skill, index) => (
              <div
                key={`original-${index}`}
                className="flex-shrink-0 flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-lg bg-background/50 border border-border/50 hover:border-primary/50 hover:bg-background/80 transition-all duration-300 group"
              >
                <div className="flex flex-col items-center justify-center gap-2">
                  <skill.icon
                    className="w-8 h-8 sm:w-10 sm:h-10 group-hover:scale-110 transition-transform duration-300"
                    style={{ color: skill.color }}
                  />
                  <span className="text-xs font-medium text-foreground text-center">{skill.name}</span>
                </div>
              </div>
            ))}

            {/* Duplicated set for infinite loop */}
            {skills.map((skill, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex-shrink-0 flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-lg bg-background/50 border border-border/50 hover:border-primary/50 hover:bg-background/80 transition-all duration-300 group"
              >
                <div className="flex flex-col items-center justify-center gap-2">
                  <skill.icon
                    className="w-8 h-8 sm:w-10 sm:h-10 group-hover:scale-110 transition-transform duration-300"
                    style={{ color: skill.color }}
                  />
                  <span className="text-xs font-medium text-foreground text-center">{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 15s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
