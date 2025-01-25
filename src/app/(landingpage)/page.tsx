import { About } from './about'
import { Career } from './career'
import { Hero } from './hero'
import { MyTechStack } from './my-techstack'
import { Projects } from './projects'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <MyTechStack />
      <Career />
      <Projects />
    </>
  )
}
