import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeContextProveder } from "@/context/ThemeContext";
import Theme from "@/components/theme/Theme";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Blog App',
  description: 'The best blog app!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProveder>
            <Theme>
              <Navbar/>
                {children}
              <Footer/>
            </Theme>
        </ThemeContextProveder>
      </body>
    </html>
  )
}
