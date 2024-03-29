export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

import "@/app/global.css"
import Navbar from "./comps/Navbar/page"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body> <Navbar />
        {children}</body>
    </html>
  )
}
