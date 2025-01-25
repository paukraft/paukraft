'use client'

import { LPSectionTitle } from '@/components/lp-components'
import LetterSwapPingPong from '@/components/ui/letter-swap-pingpong-anim'
import { cn } from '@/lib/utils'
import { motion } from 'motion/react'
import Link from 'next/link'
import { useRef, useState } from 'react'

type CareerEntry = {
  company: string
  companyType: string
  position: string
  url: string
  period: {
    from: string
    to: string | 'Present'
  }
  description: string
  technologies: string[]
}

const careerData: CareerEntry[] = [
  {
    company: 'SODEFA',
    companyType: 'Software Agency',
    position: 'Fullstack Software Developer',
    url: 'https://sodefa.de',
    period: {
      from: '2022',
      to: 'Present',
    },
    description:
      'Developing various client projects and internal tools, with a key role in Teampilot AI - a ChatGPT-like solution for enterprise clients. Building modern web applications with a focus on AI agents and automation. Working directly with enterprise clients.',
    technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'PostgreSQL', 'AWS'],
  },
  {
    company: 'it-Plan',
    companyType: 'Software Agency',
    position: 'Fullstack Software Developer (Part-Time)',
    url: 'https://www.it-plan.de/',
    period: {
      from: '2020',
      to: '2022',
    },
    description:
      'Led development as sole fullstack developer on a web platform for monitoring, managing and automating multi-step analog-to-digital data transformation processes for a major enterprise client.',
    technologies: ['React', 'JavaScript', 'MySQL', 'Hetzner', 'Node.js'],
  },
]

export const Career = () => {
  return (
    <section
      id="career"
      className="w-full max-w-5xl mx-auto px-6 md:px-24 flex flex-col gap-12 md:gap-24 mb-24 md:mb-72"
    >
      <LPSectionTitle>Career</LPSectionTitle>
      <div className="grid gap-12 md:gap-16">
        {careerData.map((entry, index) => (
          <CareerEntry key={index} entry={entry} />
        ))}
      </div>
    </section>
  )
}

const CareerEntry = ({ entry }: { entry: CareerEntry }) => {
  const ref = useRef<HTMLAnchorElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative">
      <motion.div
        className={cn(
          'fixed inset-0',
          'bg-dots-pattern dark:bg-dots-pattern-dark',
          '[background-size:4px_4px]',
          '[backdrop-filter:brightness(1.2)_blur(3px)]',
          'opacity-0 transition-opacity duration-300 pointer-events-none',
          'z-[1]',
          'max-sm:hidden',
          isHovered && 'opacity-80'
        )}
      />
      <Link
        href={entry.url}
        target="_blank"
        className="group block relative"
        ref={ref}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.article
          className={cn(
            'relative transition-transform',
            'transition-[z-index] duration-300 relative',
            isHovered ? 'z-[2]' : 'z-0'
          )}
        >
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <div className="inline-flex items-baseline gap-2">
                <h3 className="text-2xl md:text-3xl">
                  <LetterSwapPingPong
                    label={entry.company}
                    staggerFrom={'center'}
                    reverse={false}
                    className="group-hover:text-primary transition-colors"
                  />
                </h3>
                <span className="text-sm text-muted-foreground/60">
                  {entry.companyType}
                </span>
              </div>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-sm md:text-base">
                <span className="text-muted-foreground font-medium">
                  {entry.position}
                </span>
                <span className="text-xs text-muted-foreground/60">
                  {entry.period.from} - {entry.period.to}
                </span>
              </div>
            </div>

            <p className="text-sm md:text-base text-muted-foreground max-w-2xl">
              {entry.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {entry.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className={cn(
                    'px-3 py-1 text-xs font-medium rounded-full',
                    'bg-muted text-muted-foreground'
                  )}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.article>
      </Link>
    </div>
  )
}
