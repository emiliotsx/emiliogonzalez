import Section from '@/app/components/Section'
import Timeline from "@/app/components/Timeline"
import ExperienceIcon from "@/app/components/icons/Experience"

import { EXPERIENCES } from "@/app/data/experience"

export default function Experience() {
  return (
    <Section
      id="experience"
      icon={<ExperienceIcon variant="medium" />}
      title="Experiencia Laboral"
      className='my-20'
    >
      <article className="flex justify-center items-center flex-col mt-5 bg-white py-8 rounded-lg shadow-2xl">
        {EXPERIENCES.map(e => (
          <Timeline
            key={e.company}
            {...e}
          />
        ))}
      </article>
    </Section>
  )
}