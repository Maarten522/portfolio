"use client"

import { useState } from "react"
import { useLanguage } from "@/hooks/use-language"
import { Card, CardContent } from "@/components/ui/card"
import { Camera, Gamepad2, Music, Drum, Cpu, ChevronDown, ChevronUp, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const photos = [
  "/images/photography/photo1.jpg",
  "/images/photography/photo2.jpg",
  "/images/photography/photo3.jpg",
  "/images/photography/photo4.jpg",
  "/images/photography/photo5.jpg",
  "/images/photography/photo6.jpg",
]

export function HobbiesSection() {
  const { t } = useLanguage()
  const [galleryOpen, setGalleryOpen] = useState(false)
  const [lightboxPhoto, setLightboxPhoto] = useState<string | null>(null)

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

          {/* Fotografie gallerij */}
          <div className="mt-10">
            <div className="flex justify-center">
              <Button
                variant="outline"
                className="gap-2 bg-transparent"
                onClick={() => setGalleryOpen((o) => !o)}
              >
                <Camera className="h-4 w-4 text-pink-400" />
                {galleryOpen ? t("hidePhotos") : t("showPhotos")}
                {galleryOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </Button>
            </div>

            <AnimatePresence>
              {galleryOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-6">
                    {photos.map((src, i) => (
                      <div
                        key={i}
                        className="aspect-square overflow-hidden rounded-xl cursor-pointer group relative"
                        onClick={() => setLightboxPhoto(src)}
                      >
                        <img
                          src={src}
                          alt={`Foto ${i + 1}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            onClick={() => setLightboxPhoto(null)}
          >
            <button
              className="absolute top-4 right-4 text-white/80 hover:text-white"
              onClick={() => setLightboxPhoto(null)}
            >
              <X className="h-8 w-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={lightboxPhoto}
              alt="Foto"
              className="max-w-full max-h-[90vh] object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
