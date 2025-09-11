"use client"

import { useLanguage } from "@/hooks/use-language"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Github, Linkedin } from "lucide-react"

export function ContactSection() {
  const { t } = useLanguage()

  const contacts = [
    {
      icon: Mail,
      label: t("email"),
      value: "maarten.vanderschueren@telenet.be",
      href: "mailto:maarten.vanderschueren@telenet.be",
      color: "text-red-400",
    },
    {
      icon: Github,
      label: t("github"),
      value: "github.com/maarten522",
      href: "https://github.com/maarten522",
      color: "text-gray-400",
    },
    {
      icon: Linkedin,
      label: t("linkedin"),
      value: "linkedin.com/in/maartenvds",
      href: "https://linkedin.com/in/maartenvds",
      color: "text-blue-400",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-card/80">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 font-[family-name:var(--font-playfair)]">{t("contactTitle")}</h2>
          <p className="text-lg text-muted-foreground mb-12 text-pretty">{t("contactDescription")}</p>

          <div className="grid md:grid-cols-3 gap-6">
            {contacts.map((contact, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border"
              >
                <CardContent className="p-6 text-center">
                  <contact.icon
                    className={`h-8 w-8 mx-auto mb-4 ${contact.color} group-hover:scale-110 transition-transform duration-300`}
                  />
                  <h3 className="font-semibold mb-2">{contact.label}</h3>
                  <Button variant="link" className="text-muted-foreground hover:text-primary p-0 h-auto" asChild>
                    <a href={contact.href} target="_blank" rel="noopener noreferrer">
                      {contact.value}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
