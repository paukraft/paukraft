import { LPSectionTitle } from '@/components/lp-components'
import LetterSwapPingPong from '@/components/ui/letter-swap-pingpong-anim'

export const About = () => {
  return (
    <section
      id="about"
      className="w-full max-w-5xl mx-auto px-6 md:px-24 flex flex-col gap-12 md:gap-24 mb-24 md:mb-72"
    >
      <LPSectionTitle>About</LPSectionTitle>
      <div className="grid gap-6 md:gap-8 text-lg md:text-xl text-muted-foreground">
        <p>
          I&apos;m a{' '}
          <LetterSwapPingPong
            label="fullstack web developer"
            staggerFrom={'center'}
            reverse={false}
            className="text-primary"
          />{' '}
          based in Germany. My expertise lies deep within the{' '}
          <LetterSwapPingPong
            label="Next.js ecosystem"
            staggerFrom={'center'}
            reverse={false}
            className="text-primary"
          />{' '}
          where I build{' '}
          <LetterSwapPingPong
            label="digital experiences"
            staggerFrom={'center'}
            reverse={false}
            className="text-primary"
          />{' '}
          that bridge functionality and user experience.
        </p>
        <p>
          While I primarily identify as a developer, I&apos;ve cultivated an eye
          for{' '}
          <LetterSwapPingPong
            label="UI design"
            staggerFrom={'center'}
            reverse={false}
            className="text-primary"
          />{' '}
          —creating interfaces that are both functional and aesthetically
          pleasing. Though I wouldn&apos;t call myself a designer, I understand
          the principles that make digital products{' '}
          <LetterSwapPingPong
            label="feel right."
            staggerFrom={'center'}
            reverse={false}
            className="text-primary"
          />
        </p>
        <p>
          My recent focus has been on developing{' '}
          <LetterSwapPingPong
            label="AI agent systems"
            staggerFrom={'center'}
            reverse={false}
            className="text-primary"
          />{' '}
          that automate traditionally human tasks. These{' '}
          <LetterSwapPingPong
            label="intelligent agents"
            staggerFrom={'center'}
            reverse={false}
            className="text-primary"
          />{' '}
          either handle entire workflows to dramatically boost efficiency, or
          work alongside humans to tackle mundane tasks. This{' '}
          <LetterSwapPingPong
            label="automation"
            staggerFrom={'center'}
            reverse={false}
            className="text-primary"
          />{' '}
          empowers teams to focus on what truly matters - the creative and
          strategic elements that machines can&apos;t replace.
        </p>
      </div>
    </section>
  )
}
