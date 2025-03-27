'use client'

import AnimatedGradient from '@/components/ui/animated-gradient'
import { cn } from '@/lib/utils'
import { ArrowRight, Briefcase, Mail, Sparkles } from 'lucide-react'
import * as motion from 'motion/react-client'
import Link from 'next/link'
import { useState } from 'react'

const contactMethods = [
  {
    name: 'Email',
    description: 'Discuss potential collaboration',
    value: 'me@paukraft.com',
    icon: Mail,
    href: 'mailto:me@paukraft.com',
  },
  {
    name: 'Resume',
    description: 'Review my skills and experience',
    value: 'View online',
    icon: Briefcase,
    href: '/resume-kraft.pdf', // Assuming you have this file
  },
]

export const Contact = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)

  return (
    <section id="contact" className="w-full py-24 relative bg-background">
      {/* Gradient background */}
      <AnimatedGradient
        colors={['hsl(var(--primary) / 0.2)', 'hsl(var(--secondary) / 0.15)']}
        blur="medium"
        speed={0.08}
        className="opacity-60"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
            <Sparkles className="size-3.5" />
            Let&apos;s work together
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I&apos;m a passionate developer seeking opportunities with
            forward-thinking tech companies. I bring expertise in delivering
            scalable, user-centered applications with modern frameworks and
            clean architecture. I&apos;m eager to contribute to innovative
            projects where I can drive value and grow professionally.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {contactMethods.map((method, index) => (
            <Link
              key={method.name}
              href={method.href}
              target={method.href.startsWith('mailto') ? undefined : '_blank'}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              className={cn(
                'block p-6 rounded-lg border border-border/50 backdrop-blur-sm bg-card/70 h-full transition-all duration-300',
                hoverIndex === index && 'border-primary/50 shadow-md'
              )}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <method.icon className="size-6 text-primary" />
                </div>
                <ArrowRight
                  className={cn(
                    'size-5 text-muted-foreground transition-transform duration-300',
                    hoverIndex === index && 'translate-x-1 text-primary'
                  )}
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{method.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {method.description}
                </p>
                <p className="font-medium">{method.value}</p>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
