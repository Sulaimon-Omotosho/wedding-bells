import type { Metadata } from 'next'
import {
  Inter,
  Sofadi_One,
  Plus_Jakarta_Sans,
  Fascinate_Inline,
  Great_Vibes,
  Indie_Flower,
} from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

const fontSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
})

const fascinate = Fascinate_Inline({
  subsets: ['latin'],
  variable: '--font-fascinate_inline',
  weight: ['400'],
})

const sofadiOne = Sofadi_One({
  subsets: ['latin'],
  variable: '--font-sofadi_one',
  weight: ['400'],
})

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  variable: '--font-great_vibes',
  weight: ['400'],
})

const indieFlower = Indie_Flower({
  subsets: ['latin'],
  variable: '--font-indie_flower',
  weight: ['400'],
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
          fontSans.variable,
          sofadiOne.variable,
          greatVibes.variable,
          indieFlower.variable,
          fascinate.variable
        )}
      >
        <Navbar />
        <Image
          src='/assets/images/initials.jpg'
          width={100}
          height={100}
          alt='initials'
          className='fixed rounded-full left-4 md:left-10 bottom-4 md:top-8 z-20'
        />
        {children}
      </body>
    </html>
  )
}
