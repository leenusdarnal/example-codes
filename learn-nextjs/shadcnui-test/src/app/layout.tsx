import { ThemeProvider } from "@/components/ThemeProvider"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { NavBar } from "@/components/NavBar"
import Image from "next/image"
import mountain from "@/images/mountain.webp"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Testing ",
  description: "This is a test app ",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <link rel="icon" href="https://fav.farm/🌶" /> */}
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎯</text></svg>"
      />
      <body className={cn(inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="" enableSystem>
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
