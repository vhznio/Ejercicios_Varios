import './globals.css'
import NavBar from '@/components/navbar'

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
    <html lang="en">
      <body>
        <NavBar/>
        {children}
      </body>
    </html>
  )
}
