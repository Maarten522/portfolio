import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { LanguageProvider } from "@/hooks/use-language"
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollProgress } from "@/components/scroll-progress"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],      // altijd nodig
  weight: ["400", "700"],  // optioneel, selecteer de gewichten die je gebruikt
  variable: "--font-montserrat", // voor Tailwind/Custom Properties
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
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-B0D439R3HW" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-B0D439R3HW');`,
          }}
        />
      </head>
      <body className={`font-sans  ${GeistSans.variable} ${GeistMono.variable} ${montserrat.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <ScrollProgress />
          <LanguageProvider>
            <Suspense fallback={null}>{children}</Suspense>
          </LanguageProvider>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}