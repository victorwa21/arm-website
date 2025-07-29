import type React from "react"
import type { Metadata } from "next"
import { Darker_Grotesque } from "next/font/google"
import "./globals.css"

const darkerGrotesque = Darker_Grotesque({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-darker-grotesque",
})

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${darkerGrotesque.style.fontFamily};
  --font-sans: ${darkerGrotesque.variable};
}
        `}</style>
      </head>
      <body className={darkerGrotesque.className}>{children}</body>
    </html>
  )
}
