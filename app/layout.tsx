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
  description: "Portfolio van Maarten Van der Schueren — Bachelor Toegepaste Informatica, gepassioneerd door AI, data en techniek.",
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  openGraph: {
    title: "Portfolio - Maarten Van der Schueren",
    description: "Bachelor Toegepaste Informatica | AI · Data · Elektromechanica",
    url: "https://maartenvds.be",
    siteName: "Maarten Van der Schueren",
    images: [
      {
        url: "https://maartenvds.be/images/maartenBanner.jpg",
        width: 1200,
        height: 675,
        alt: "Portfolio Maarten Van der Schueren",
      },
    ],
    locale: "nl_BE",
    type: "website",
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
