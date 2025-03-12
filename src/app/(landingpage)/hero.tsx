import meImage from '@/assets/me.jpeg'
import AnimatedGradient from '@/components/ui/animated-gradient'
import { Mail, MapPin } from 'lucide-react'
import * as motion from 'motion/react-client'
import Image from 'next/image'
import Link from 'next/link'

export const Hero = () => {
  return (
    <main className="min-h-[82svh] flex items-center justify-center relative">
      {/* Background gradient - more subtle */}
      <div className="absolute inset-0 opacity-30">
        <AnimatedGradient
          colors={['#3B82F6', '#60A5FA', '#93C5FD']}
          speed={0.08}
          blur="heavy"
          blobSize="small"
          className="dark:invert dark:hue-rotate-180"
        />
      </div>

      {/* Content container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 flex flex-col items-center">
        {/* Content wrapper - side by side on desktop */}
        <div className="w-full flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 mb-16 md:mb-24">
          {/* Left side - Text content */}
          <div className="flex flex-col items-center md:items-start md:flex-1">
            {/* Title badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex bg-background/80 backdrop-blur-sm px-4 py-1.5 text-base gap-2 items-center rounded-full border mb-5"
            >
              Fullstack Web Developer
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none text-center md:text-left mb-7"
            >
              Pau Kraft
            </motion.h1>

            {/* Description - more professional */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground text-center md:text-left max-w-md mb-5"
            >
              Building scalable web applications with modern technologies and a
              focus on user experience.
            </motion.p>

            {/* Location and Email */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-5 self-center md:self-start"
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground/70">
                <MapPin className="h-3.5 w-3.5" strokeWidth={2} />
                <span>Freiburg, Germany</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-3.5 w-3.5 text-primary" strokeWidth={2} />
                <Link
                  href="mailto:me@paukraft.com"
                  className="text-primary hover:text-primary/80 transition-colors relative group"
                >
                  me@paukraft.com
                  <span className="absolute -bottom-0.5 left-0 w-full h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right side - Image with simplified styling */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative md:flex-shrink-0"
          >
            <div className="relative size-48 md:size-56 rounded-2xl overflow-hidden border-2 border-background/80 shadow-lg">
              <Image
                src={meImage}
                alt="Pau Kraft"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -inset-1 bg-blue-500/10 dark:bg-blue-400/10 blur-xl rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </main>
  )
}
