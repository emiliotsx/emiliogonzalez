import Card from "../Card";

import jycwedding from '@/app/assets/projects/jycwedding.png'
import kymwedding from '@/app/assets/projects/kymwedding.png'
import medinachangwedding from '@/app/assets/projects/medinachangwedding.png'
import Project from "@/app/components/icons/Project"

import { PROJECTS } from '@/app/data/projects'

export default function Projects() {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const images: Record<string, any> = {
    jycwedding,
    kymwedding,
    medinachangwedding
  }

  return (
    <section id="projects" className="max-w-sm mx-auto lg:w-[800px] my-3 mt-20">
      <article className="flex items-center">
        <div className="pr-2">
          <Project size="8" />
        </div>
        <h2 className="text-3xl text-italic font-bold text-green">Proyectos</h2>
      </article>
      <article className="flex justify-center items-center flex-col -mt-5">
        {PROJECTS.map(p => {
          const image = images[p.image]
          return (
            <Card
              key={p.image}
              image={image}
              title={p.title}
              description={p.description}
              url={p.url}
            />
          )
        })}
      </article>
    </section>
  )
}