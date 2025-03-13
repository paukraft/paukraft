'use client'

import { LPSectionTitle } from '@/components/lp-components'
import * as motion from 'motion/react-client'

export const About = () => {
  return (
    <section
      id="about"
      className="w-full max-w-5xl mx-auto px-6 md:px-12 flex flex-col gap-10 md:gap-16 mb-24 md:mb-48"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        <LPSectionTitle>About</LPSectionTitle>
      </motion.div>

      <div className="grid gap-6 md:gap-8 text-lg md:text-xl text-muted-foreground">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          I&apos;m a{' '}
          <span className="text-primary font-medium">
            fullstack web developer
          </span>{' '}
          based in Germany, specializing in building modern, responsive web
          applications with a focus on user experience and performance.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          My expertise lies in the{' '}
          <span className="text-primary font-medium">Next.js ecosystem</span>,
          where I leverage React, TypeScript, and modern frontend technologies
          to create scalable and maintainable applications. I combine technical
          proficiency with an eye for{' '}
          <span className="text-primary font-medium">UI design</span> to deliver
          solutions that are both functional and aesthetically pleasing.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Recently, I&apos;ve been focused on developing{' '}
          <span className="text-primary font-medium">
            AI-powered applications
          </span>{' '}
          that automate complex workflows and enhance productivity. These
          systems either operate autonomously to dramatically improve efficiency
          or work alongside users to handle routine tasks, allowing teams to
          focus on creative and strategic work that requires human insight.
        </motion.p>
      </div>
    </section>
  )
}
