'use client'

import { ImageWithFullscreen } from '@/components/image-with-fullscreen'
import { LPSectionTitle } from '@/components/lp-components'
import { cn } from '@/lib/utils'
import { ArrowUpRight, Github } from 'lucide-react'
import Link from 'next/link'

interface Project {
  title: string
  url: string
  description: string
  year: string
  githubLink?: string
  images?: {
    src: string
    description: string
  }[]
  faviconHasBG?: boolean
}

const projects: Project[] = [
  {
    title: 'paukraft UI',
    url: 'https://ui.paukraft.com',
    description:
      'A collection of unique and practical UI components built with React and Tailwind CSS. Features experimental interfaces alongside practical components like comparison sliders and animated icons. Fully compatible with shadcn/ui.',
    year: '2025',
    githubLink: 'https://github.com/paukraft/ui',
    images: [
      {
        src: '/app-screenshots/ui.paukraft.com-lp.png',
        description: 'Landing Page',
      },
      {
        src: '/app-screenshots/ui.paukraft.com-radius-calculator.png',
        description: 'Radius Calculator',
      },
    ],
    faviconHasBG: false,
  },
  {
    title: 'AutoRedditShorts',
    url: 'https://autoredditshorts.com',
    description:
      'An automation service for creating and posting TikTok videos using content from chosen subreddits. Users can select a subreddit, set a posting schedule, and generate video shorts based on popular posts.',
    year: '2024',
    images: [
      {
        src: '/app-screenshots/autoredditshorts.com-lp.png',
        description: 'Landing Page',
      },
      {
        src: '/app-screenshots/autoredditshorts.com-short.png',
        description: 'Short Details',
      },
    ],
    faviconHasBG: false,
  },
  {
    title: 'Brandix AI',
    url: 'https://brandix.ai',
    description:
      'AI-Powered Brand Name Generator that assists users in creating brand names based on selected categories or input messages, while checking domain name availability and allowing users to save their favorite options.',
    year: '2023',
    images: [
      {
        src: '/app-screenshots/brandix.ai-lp.png',
        description: 'Landing Page',
      },
      {
        src: '/app-screenshots/brandix.ai-generator.png',
        description: 'Generator',
      },
    ],
    faviconHasBG: true,
  },
  {
    title: 'Webposter Lab',
    url: 'https://webposterlab.com',
    description:
      "An AI-powered service that automatically generates beautiful posters by analyzing website content. Simply input a URL and get a custom poster that captures your website's essence, perfect for marketing and social media.",
    year: '2024',
    githubLink: 'https://github.com/paukraft/webposter-lab',
    images: [
      {
        src: '/app-screenshots/webposterlab.com-lp.png',
        description: 'Landing Page',
      },
      {
        src: '/app-screenshots/webposterlab.com-nba.png',
        description: 'Poster Details',
      },
    ],
    faviconHasBG: true,
  },
  {
    title: 'Sharrings',
    url: 'https://sharrin.gs',
    description:
      'A service that consolidates all user links into a single manageable link, making it easier to share multiple social media and content links without clutter.',
    year: '2021',
    images: [
      {
        src: '/app-screenshots/sharrin.gs-lp.png',
        description: 'Landing Page',
      },
      {
        src: '/app-screenshots/sharrin.gs-profile.png',
        description: 'Profile',
      },
    ],
    faviconHasBG: false,
  },
]

export const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full max-w-5xl mx-auto px-6 md:px-12 pb-12 md:pb-24 flex flex-col gap-10 md:gap-16"
    >
      <LPSectionTitle>Side Projects</LPSectionTitle>
      <div className="grid gap-10 md:gap-12">
        {projects.map((project) => (
          <Project key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}

const Project = ({ project }: { project: Project }) => {
  return (
    <div className="group border border-muted rounded-lg p-5 md:p-6 hover:border-muted-foreground/20 transition-colors">
      <div className="flex flex-col gap-5">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <div className="flex items-start justify-between">
            <div className="flex gap-2">
              <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground w-fit">
                {project.year}
              </span>
              {project.githubLink && (
                <Link
                  href={project.githubLink}
                  target="_blank"
                  className="group/github rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground w-fit flex items-center gap-1"
                >
                  <Github className="inline-block h-3 w-3 mr-0.5" />
                  <span className="max-sm:hidden">Open Source</span>
                  <span className="sm:hidden">OS</span>
                </Link>
              )}
            </div>
          </div>

          <Link
            href={project.url}
            target="_blank"
            className="flex items-start gap-2 group/link"
          >
            <div
              className={cn(
                'flex items-center',
                !project.faviconHasBG && 'bg-muted rounded-md p-1'
              )}
            >
              <img
                src={`https://www.google.com/s2/favicons?domain=${project.url}&sz=32`}
                alt={`${project.title} favicon`}
                className="size-4 sm:size-5 rounded-sm"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="text-xl md:text-2xl font-semibold group-hover/link:text-primary transition-colors">
                  {project.title}
                </h3>
                <ArrowUpRight className="size-4 opacity-0 group-hover/link:opacity-100 transition-opacity" />
              </div>
              <span className="text-sm text-muted-foreground">
                {project.url.replace('https://', '')}
              </span>
            </div>
          </Link>
        </div>

        {/* Description */}
        <p className="text-sm md:text-base text-muted-foreground">
          {project.description}
        </p>

        {/* Images */}
        {project.images && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.images.map((image, index) => (
              <ImageWithFullscreen
                key={index}
                src={image.src}
                alt={`${project.title} ${image.description}`}
                className="rounded-md ring-1 ring-muted"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
