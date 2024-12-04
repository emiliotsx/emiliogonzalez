import jycwedding from '@/app/assets/projects/jycwedding.png'
import kymwedding from '@/app/assets/projects/kymwedding.png'
import medinachangwedding from '@/app/assets/projects/medinachangwedding.png'

import Section from '@/app/components/Section'
import Card from "@/app/components/card";
import Project from "@/app/components/icons/Project"

import { getDictionary } from '@/app/dictionary'

export default async function Projects({ lang }: Lang) {

  const t = (await getDictionary(lang)).Projects

  const images: Record<string, any> = {
    jycwedding,
    kymwedding,
    medinachangwedding
  }

  return (
    <Section
      id="projects"
      icon={<Project variant="medium" />}
      title={t.title}
      className='my-20'
    >
      <article className="flex justify-center items-center flex-col -mt-5">
        {t.projects?.map(p => {
          const image = images[p.image]
          return (
            <Card
              key={p.image}
              image={image}
              title={p.title}
              description={p.description}
              url={p.url}
              tecnologies={p.tecnologies}
              labelButton={t.labelButton}
            />
          )
        })}
      </article>
    </Section>
  )
}