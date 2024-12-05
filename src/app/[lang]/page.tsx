import Me from "@/app/components/sections/Me"
import Experience from "@/app/components/sections/Experience"
import Projects from "@/app/components/sections/Projects"
import About from "@/app/components/sections/About"
import Navigation from "@/app/components/navigation/index"

export default async function Home({ params }: Params) {
  const { lang } = await params

  return (
    <>
      <main className="w-sm mx-auto h-auto px-5 md:w-[800px] md:px-7">
        <Me lang={lang} />
        <Projects lang={lang} />
        <Experience lang={lang} />
        <About lang={lang} />
      </main>
      <Navigation lang={lang} />
    </>
  )
}