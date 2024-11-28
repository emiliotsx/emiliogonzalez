import Me from '@/app/components/sections/Me'
import Experience from '@/app/components/sections/Experience'
import Projects from '@/app/components/sections/Projects'
import About from '@/app/components/sections/About'

export default function Home() {
  return (
    <main className="w-sm mx-auto h-auto px-5 md:w-[800px] md:px-7">
      <Me />
      <Projects />
      <Experience />
      <About />
    </main>
  )
}
