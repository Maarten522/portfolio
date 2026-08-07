import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import localFont from "next/font/local"
import { Suspense } from "react"
import { LanguageProvider } from "@/hooks/use-language"
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollProgress } from "@/components/scroll-progress"
import "./globals.css"

const montserrat = localFont({
  src: [
    { path: "../public/fonts/Montserrat-Regular.ttf", weight: "400" },
    { path: "../public/fonts/Montserrat-Bold.ttf", weight: "700" },
  ],
  variable: "--font-montserrat",
})


export const metadata: Metadata = {
  title: "Portfolio - Maarten Van der Schueren",
  description: "Portfolio Maarten Van der Schueren",
  icons: {
    icon: "/images/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <head />
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${montserrat.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <ScrollProgress />
          <LanguageProvider>
            <Suspense fallback={null}>{children}</Suspense>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}