import Section from '@/app/components/Section'
import Card from "@/app/components/Card";
import Project from "@/app/components/icons/Project"

import jycwedding from '@/app/assets/projects/jycwedding.png'
import kymwedding from '@/app/assets/projects/kymwedding.png'
import medinachangwedding from '@/app/assets/projects/medinachangwedding.png'

import { PROJECTS } from '@/app/data/projects'

export default function Projects() {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const images: Record<string, any> = {
    jycwedding,
    kymwedding,
    medinachangwedding
  }

  return (
    <Section
      id="projects"
      icon={<Project variant="medium" />}
      title="Proyectos"
      className='my-20'
    >
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
    </Section>
  )
}