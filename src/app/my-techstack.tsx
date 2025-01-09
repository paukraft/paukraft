'use client'

import AnimatedGradient from '@/components/ui/animated-gradient'
import { LogoCarousel } from '@/components/ui/logo-carousel'
import { FaAws } from 'react-icons/fa'
import {
  SiNextdotjs,
  SiOpenai,
  SiPostgresql,
  SiPosthog,
  SiReact,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si'

const techStackLogos = [
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'React', icon: SiReact },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'AWS', icon: FaAws },
  { name: 'Vercel', icon: SiVercel },
  { name: 'shadcn/ui', icon: SiShadcnui },
  { name: 'PostHog', icon: SiPosthog },
  { name: 'OpenAI', icon: SiOpenai },
]

export const MyTechStack = () => {
  return (
    <div className="flex justify-center mb-24 md:mb-72">
      <section
        id="tech-stack"
        className="relative overflow-hidden md:min-w-[1000px] max-sm:w-full"
      >
        <div className="absolute inset-0">
          <AnimatedGradient
            colors={['#3B82F6', '#60A5FA', '#93C5FD']}
            speed={0.05}
            blur="heavy"
            blobSize="small"
            className="dark:invert dark:hue-rotate-180"
          />
        </div>
        <div className="relative p-10 max-sm:px-0 mx-auto w-min">
          <LogoCarousel columnCount={3} logos={techStackLogos} speed={3000} />
        </div>
      </section>
    </div>
  )
}
