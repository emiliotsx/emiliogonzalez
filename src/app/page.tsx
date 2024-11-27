import Me from '@/app/components/sections/Me'
import Experience from '@/app/components/sections/Experience'
import Projects from '@/app/components/sections/Projects'
import About from '@/app/components/sections/About'

export default function Home() {
  return (
    <main className="h-screen-whitout-header p-4 mb-10">
      <Me />
      <Projects />
      <Experience />
      <About />
    </main>
  );
}
