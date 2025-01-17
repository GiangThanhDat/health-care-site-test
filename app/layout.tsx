import type { Metadata } from "next"
import { Inter, Noto_Sans_JP } from "next/font/google"
import { Footer } from "./components/footer"
import { GoToTopButton } from "./components/go-to-top"
import { Header } from "./components/header"
import "./globals.css"

const notoSans = Noto_Sans_JP({
  weight: ["400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
})

const inter = Inter({
  weight: ["400", "500", "700"],
  style: "normal",
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${notoSans.className} ${inter.variable}`}>
        <Header />
        {children}
        <Footer />
        <GoToTopButton />
      </body>
    </html>
  )
}
