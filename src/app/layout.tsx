import './globals.css'
import NavBar from '@/components/navbar'
import { Share_Tech_Mono } from 'next/font/google'

const tech = Share_Tech_Mono({
   weight: '400',
   subsets: ['latin']
})

export const metadata = {
  title: 'Evaluación 2023',
  description: 'x',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={tech.className}>
      <body>
        <NavBar/>
        {children}
      </body>
    </html>
  )
}
