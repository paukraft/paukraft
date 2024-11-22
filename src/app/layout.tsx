import Footer from '@/components/footer'
import { TrackiTrack } from '@/components/tracki-track'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import './globals.css'

const urbanist = Urbanist({
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--urbanist',
})
export const metadata: Metadata = {
  title: 'Pau Kraft - Fullstack Web Developer',
  description:
    'Fullstack web developer based in Germany, specializing in Next.js and building digital experiences that bridge functionality and user experience.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn('antialiased font-urbanist', urbanist.variable)}>
        {children}
        <Footer />
        <TrackiTrack />
      </body>
    </html>
  )
}
