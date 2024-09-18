import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

const fontSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Wedding Bells',
  description: 'Taye and Obi ties the knot',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'min-h-screen bg-dark-300 font-sans antialiased remove-scrollbar relative',
          fontSans.variable
        )}
      >
        <Navbar />
        <Image
          src='/assets/images/initials.jpg'
          width={100}
          height={100}
          alt='initials'
          className='fixed rounded-full left-4 md:left-10 bottom-4 md:top-8'
        />
        {children}
      </body>
    </html>
  )
}
