"use client"

import type React from "react"
import { Darker_Grotesque } from "next/font/google"
import "./globals.css"

const darkerGrotesque = Darker_Grotesque({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-darker-grotesque",
})

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style jsx>
          {`
            html {
              font-family: ${darkerGrotesque.style.fontFamily};
              --font-sans: ${darkerGrotesque.variable};
            }
          `}
        </style>
      </head>
      <body className={darkerGrotesque.className}>{children}</body>
    </html>
  )
}
