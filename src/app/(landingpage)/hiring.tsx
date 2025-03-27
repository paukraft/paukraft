'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { cn } from '@/lib/utils'
import { Briefcase, Github, Linkedin, Mail, Twitter } from 'lucide-react'
import * as motion from 'motion/react-client'
import Link from 'next/link'

const contactLinks = [
  {
    name: 'Email',
    href: 'mailto:me@paukraft.com',
    icon: Mail,
    description: 'Direct email contact',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/paukraft',
    icon: Linkedin,
    description: 'Professional profile & experience',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/paukraft',
    icon: Github,
    description: 'Code repositories & contributions',
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/paukraft',
    icon: Twitter,
    description: 'Updates and thoughts',
  },
]

export const Hiring = () => {
  return (
    <section className="w-full bg-muted/30 mb-20 relative z-10">
      <div className="w-full max-w-5xl mx-auto px-6 md:px-12 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12"
        >
          <div className="flex items-center gap-4">
            <div className="size-12 md:size-14 rounded-full bg-primary/10 flex items-center justify-center">
              <Briefcase className="size-6 md:size-7 text-primary" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-1">
                Open to New Opportunities
              </h2>
              <p className="text-sm md:text-base text-muted-foreground">
                Currently seeking fullstack developer positions
              </p>
            </div>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className="w-full md:w-auto">
                Get in Touch
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Let&apos;s Connect</DialogTitle>
                <DialogDescription>
                  Feel free to reach out through any of these channels. I&apos;m
                  looking forward to discussing potential opportunities.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                {contactLinks.map((link, index) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    target={
                      link.href.startsWith('mailto') ? undefined : '_blank'
                    }
                    className={cn(
                      'flex items-center gap-4 p-4 rounded-lg transition-colors',
                      'bg-muted/50 hover:bg-muted'
                    )}
                  >
                    <div className="size-10 rounded-full bg-background flex items-center justify-center">
                      <link.icon className="size-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{link.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {link.description}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>
      </div>
    </section>
  )
}
