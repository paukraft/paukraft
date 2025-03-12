'use client'

import { LPSectionTitle } from '@/components/lp-components'
import { cn } from '@/lib/utils'
import { FaAws } from 'react-icons/fa'
import {
  SiCloudflare,
  SiDrizzle,
  SiHetzner,
  SiNextdotjs,
  SiOpenai,
  SiPostgresql,
  SiPosthog,
  SiPrisma,
  SiReact,
  SiShadcnui,
  SiTailwindcss,
  SiTrpc,
  SiTypescript,
  SiVercel,
} from 'react-icons/si'

// Custom BetterAuth logo component
const BetterAuthLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="60"
    height="45"
    viewBox="0 0 60 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('w-5 h-5', props.className)}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 0H15V15H30V30H15V45H0V30V15V0ZM45 30V15H30V0H45H60V15V30V45H45H30V30H45Z"
      className="fill-current"
    />
  </svg>
)

type TechCategory = {
  name: string
  technologies: {
    name: string
    icon: React.ElementType
  }[]
}

const techCategories: TechCategory[] = [
  {
    name: 'Frontend',
    technologies: [
      { name: 'React', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'shadcn/ui', icon: SiShadcnui },
    ],
  },
  {
    name: 'Backend',
    technologies: [
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'Prisma', icon: SiPrisma },
      { name: 'Drizzle', icon: SiDrizzle },
      { name: 'tRPC', icon: SiTrpc },
      { name: 'BetterAuth', icon: BetterAuthLogo },
    ],
  },
  {
    name: 'Infrastructure & Tools',
    technologies: [
      { name: 'AWS', icon: FaAws },
      { name: 'Vercel', icon: SiVercel },
      { name: 'Cloudflare', icon: SiCloudflare },
      { name: 'Hetzner', icon: SiHetzner },
      { name: 'PostHog', icon: SiPosthog },
      { name: 'OpenAI', icon: SiOpenai },
    ],
  },
]

export const MyTechStack = () => {
  return (
    <section
      id="tech-stack"
      className="w-full max-w-5xl mx-auto px-6 md:px-12 flex flex-col gap-10 md:gap-16 mb-24 md:mb-48"
    >
      <LPSectionTitle>Tech Stack</LPSectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {techCategories.map((category) => (
          <div key={category.name} className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold">{category.name}</h3>
            <div className="grid grid-cols-2 gap-4">
              {category.technologies.map((tech) => (
                <div
                  key={tech.name}
                  className={cn(
                    'flex items-center gap-3 p-3 rounded-lg',
                    'bg-muted/50 hover:bg-muted transition-colors'
                  )}
                >
                  <tech.icon className="size-5 text-primary" />
                  <span className="text-sm font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
