import { About } from './about'
import { Career } from './career'
import { Contact } from './contact'
import { Hero } from './hero'
import { Hiring } from './hiring'
import { MyTechStack } from './my-techstack'
import { Projects } from './projects'

export default function Home() {
  return (
    <>
      <Hero />
      <Hiring />
      <About />
      <MyTechStack />
      <Career />
      <Projects />
      <Contact />
    </>
  )
}
