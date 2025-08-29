import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Open_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const heading = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["700", "800", "900"],
  variable: "--font-heading",
})

const body = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Minimalist, modern portfolio",
  
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable} antialiased`} suppressHydrationWarning>
      <body className="font-sans bg-black text-foreground theme-animate">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
