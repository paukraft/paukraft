import AnimatedGradient from '@/components/ui/animated-gradient'
import VariableFontHoverByLetter from '@/components/ui/variable-font-hover-by-letter'
import VerticalCutReveal from '@/components/ui/vertical-cut-reveal'
import About from './about'
import { MyTechStack } from './my-techstack'
import Projects from './projects'

export default function Home() {
  return (
    <>
      <main className="min-h-[98svh] flex items-center justify-center relative">
        <div className="absolute top-12 bg-background hover:bg-muted px-4 py-1.5 text-base gap-2 inline-flex items-center rounded-full border transition-colors">
          <VerticalCutReveal
            splitBy="characters"
            staggerDuration={0.025}
            staggerFrom="first"
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 21,
            }}
          >
            Fullstack Web Developer
          </VerticalCutReveal>
        </div>
        <div className="flex flex-col items-center gap-6 justify-center max-sm:mx-4 max-sm:w-full p-10 md:p-16 relative">
          <AnimatedGradient
            colors={['#3B82F6', '#60A5FA', '#93C5FD']}
            speed={0.1}
            blur="heavy"
            blobSize="small"
            className="dark:invert dark:hue-rotate-180"
          />
          <div className="text-5xl sm:text-7xl md:text-[10rem] font-black leading-none text-center relative">
            Pau Kraft
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 sm:justify-between w-full max-w-[662px] text-xl md:text-3xl items-center relative">
            <a href="#about">
              <VariableFontHoverByLetter
                label="About"
                staggerDuration={0.03}
                fromFontVariationSettings="'wght' 400, 'slnt' 0"
                toFontVariationSettings="'wght' 800, 'slnt' -10"
              />
            </a>
            <a href="#projects">
              <VariableFontHoverByLetter
                label="Projects"
                staggerDuration={0.03}
                fromFontVariationSettings="'wght' 400, 'slnt' 0"
                toFontVariationSettings="'wght' 800, 'slnt' -10"
              />
            </a>
            <a href="https://bsky.app/profile/paukraft.com" target="_blank">
              <VariableFontHoverByLetter
                label="Bluesky"
                staggerDuration={0.03}
                fromFontVariationSettings="'wght' 400, 'slnt' 0"
                toFontVariationSettings="'wght' 800, 'slnt' -10"
                staggerFrom={'last'}
              />
            </a>
            <a href="https://twitter.com/paukraft" target="_blank">
              <VariableFontHoverByLetter
                label="Twitter / X"
                staggerDuration={0.03}
                fromFontVariationSettings="'wght' 400, 'slnt' 0"
                toFontVariationSettings="'wght' 800, 'slnt' -10"
                staggerFrom={'last'}
              />
            </a>
          </div>
        </div>
      </main>
      <About />
      <MyTechStack />
      <Projects />
    </>
  )
}
