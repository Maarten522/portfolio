import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { LanguageProvider } from "@/hooks/use-language"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],      // altijd nodig
  weight: ["400", "700"],  // optioneel, selecteer de gewichten die je gebruikt
  variable: "--font-montserrat", // voor Tailwind/Custom Properties
})


export const metadata: Metadata = {
  title: "Portfolio - Maarten Van der Schueren",
  description: "Portfolio Maarten Van der Schueren",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl" className="dark">
      <body className={`font-sans  ${GeistSans.variable} ${GeistMono.variable} ${montserrat.variable}`}>
        <LanguageProvider>
          <Suspense fallback={null}>{children}</Suspense>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}