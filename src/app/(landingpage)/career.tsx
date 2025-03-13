'use client'

import { LPSectionTitle } from '@/components/lp-components'
import { cn } from '@/lib/utils'
import * as motion from 'motion/react-client'
import Link from 'next/link'

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
      id="work-experience"
      className="w-full max-w-5xl mx-auto px-6 md:px-12 flex flex-col gap-10 md:gap-16 mb-24 md:mb-48"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <LPSectionTitle>Work Experience</LPSectionTitle>
      </motion.div>

      <div className="grid gap-10 md:gap-12">
        {careerData.map((entry, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <CareerEntry entry={entry} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

const CareerEntry = ({ entry }: { entry: CareerEntry }) => {
  return (
    <div className="group">
      <Link href={entry.url} target="_blank" className="block relative">
        <article className="relative transition-all">
          <div className="flex flex-col gap-4">
            {/* Header */}
            <div className="flex flex-col gap-1">
              <div className="inline-flex items-baseline gap-2">
                <h3 className="text-2xl md:text-3xl font-semibold group-hover:text-primary transition-colors">
                  {entry.company}
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

            {/* Description */}
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl">
              {entry.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mt-1">
              {entry.technologies.map((tech, techIndex) => (
                <motion.span
                  key={techIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.3, delay: 0.1 + techIndex * 0.05 }}
                  className={cn(
                    'px-3 py-1 text-xs font-medium rounded-full',
                    'bg-muted text-muted-foreground'
                  )}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </article>
      </Link>
    </div>
  )
}
