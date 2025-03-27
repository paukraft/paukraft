'use client'

import { LPSectionTitle } from '@/components/lp-components' // Ensure this path is correct for your project
import { cn } from '@/lib/utils' // Ensure this path is correct for your project
import * as motion from 'motion/react-client' // Using the specific client import for motion
import Link from 'next/link'

// Define the type for a career entry
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

// --- Updated careerData with Enhanced SODEFA Description ---
const careerData: CareerEntry[] = [
  {
    company: 'SODEFA',
    companyType: 'Software Agency',
    position: 'Fullstack Developer',
    url: 'https://sodefa.de', // Assuming this is the correct URL
    period: {
      from: '2022',
      to: 'Present',
    },
    description:
      'Core developer on Teampilot AI, a generative AI platform. Designed and implemented its core multi-agent system and the Perplexity.ai-like web connection feature (synthesizing web info via search APIs, Cheerio crawling, custom summarization). Integrated LLMs (OpenAI) and built RAG pipelines (Qdrant, OpenAI embeddings). Developed 5+ full-stack client apps (Next.js, tRPC, PostgreSQL) and collaborated directly with clients. Solely developed a data enrichment platform using Next.js (App Router, Server Components) & PostgreSQL; this platform leverages Teampilot AI\'s multi-agent capabilities to automate complex data enrichment tasks, effectively replacing manual processes previously handled by student workers ("Werkstudenten"). Features a user-friendly shadcn/ui interface. Also involved in client onboarding/support within small agile teams.',
    // Technologies list remains comprehensive
    technologies: [
      'Next.js',
      'TypeScript',
      'tRPC',
      'PostgreSQL',
      'AI Integration',
      'Multi-Agent Systems', // Added emphasis
      'LLMs',
      'OpenAI API',
      'RAG',
      'Qdrant',
      'Web Crawling',
      'Cheerio',
      'Prompt Engineering',
      'Automation', // Added emphasis
      'shadcn/ui',
      'Vercel',
      'Node.js',
      'Agile',
      'MS Dynamics 365 BC',
    ],
  },
  {
    company: 'it-Plan',
    companyType: 'Software Agency',
    position: 'Fullstack Developer (Part-Time)',
    url: 'https://www.it-plan.de/', // Assuming this is the correct URL
    period: {
      from: '2020',
      to: '2022',
    },
    description:
      'Led the design, development, and deployment of Pegel-Dashboard (React, Node.js/Express), an internal platform managing a large-scale project digitizing physical water level records for German government agencies. Built a Node.js resource management system to optimize digitization by dynamically scaling Hetzner servers based on processing demands, preventing database overload and ensuring efficient resource utilization. Developed an interactive viewer (Next.js, tRPC) for overlaying digitized data onto original record images, enabling visual verification. Engineered its custom, high-performance Canvas rendering solution to handle large images and complex coordinate transformations (non-standard origins, aspect ratios). Collaborated with 3 developers on the core digitization, providing monitoring tools.',
    // Technologies list remains consistent
    technologies: [
      'React',
      'Node.js',
      'Express.js',
      'Next.js',
      'tRPC',
      'JavaScript (ES6+)',
      'Canvas API',
      'Hetzner',
      'MySQL', // Note: Confirm if MySQL was used or replace/remove if unsure.
      'Resource Management',
      'Data Visualization',
    ],
  },
]
// --- End of Updated careerData ---

// The main Career component section
export const Career = () => {
  return (
    <section
      id="work-experience"
      className="w-full max-w-5xl mx-auto px-6 md:px-12 flex flex-col gap-10 md:gap-16 mb-24 md:mb-48" // Adjust styling as needed
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        {/* Ensure LPSectionTitle component is imported correctly and works */}
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
            {/* Render the component for each individual career entry */}
            <CareerEntryItem entry={entry} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

// Renamed component to avoid naming conflict with the type 'CareerEntry'
const CareerEntryItem = ({ entry }: { entry: CareerEntry }) => {
  return (
    <div className="group">
      {/* Link wraps the entire entry, linking to the company URL */}
      <Link
        href={entry.url}
        target="_blank"
        rel="noopener noreferrer" // Good practice for target="_blank"
        className="block relative"
      >
        <article className="relative transition-all">
          <div className="flex flex-col gap-4">
            {/* Header section with Company Name, Type, Position, and Period */}
            <div className="flex flex-col gap-1">
              <div className="inline-flex items-baseline gap-2 flex-wrap">
                {' '}
                {/* Added flex-wrap */}
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

            {/* Job Description */}
            <p className="text-sm md:text-base text-muted-foreground">
              {entry.description}
            </p>

            {/* Technologies List */}
            <div className="flex flex-wrap gap-2 mt-1">
              {entry.technologies.map((tech, techIndex) => (
                <motion.span
                  key={techIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.3, delay: 0.1 + techIndex * 0.05 }}
                  // Styling for the technology tags - ensure these classes match your design system (e.g., Tailwind)
                  className={cn(
                    'px-3 py-1 text-xs font-medium rounded-full',
                    'bg-muted text-muted-foreground' // Example styling
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

// Optional: If this is the only export from the file, you might use:
// export default Career;
