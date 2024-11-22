import About from './about'
import Projects from './projects'

export default function Home() {
  return (
    <>
      <main className="min-h-screen p-6 md:p-24 flex flex-col items-center gap-6 justify-center relative">
        <div className="absolute top-12 rounded-full border px-2.5 py-1 bg-muted text-sm md:text-base text-center">
          I build stuff on the Internet
        </div>
        <div className="text-5xl sm:text-7xl md:text-[10rem] font-black leading-none text-center">
          Pau Kraft
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 sm:justify-between w-full max-w-[662px] text-xl md:text-3xl items-center">
          <a href="#about" className="hover:italic">
            About
          </a>
          <a href="#projects" className="hover:italic">
            Projects
          </a>
          <a
            href="https://bsky.app/profile/paukraft.bsky.social"
            target="_blank"
            className="hover:italic"
          >
            Bluesky
          </a>
          <a
            href="https://twitter.com/paukraft"
            target="_blank"
            className="hover:italic"
          >
            Twitter / X
          </a>
        </div>
      </main>
      <About />
      <Projects />
    </>
  )
}
