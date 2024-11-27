import Timeline from "@/app/components/Timeline"
import ExperienceIcon from "@/app/components/icons/Experience"

import { EXPERIENCES } from "@/app/data/experience"

export default function Experience() {
  return (
    <section id="experience" className="max-w-sm mx-auto lg:w-[800px] my-3 mt-20">
      <article className="flex items-center">
        <div className="pr-2">
          <ExperienceIcon size="8" />
        </div>
        <h2 className="text-3xl text-italic font-bold text-green tracking-tight">Experiencia Laboral</h2>
      </article>
      <article className="flex justify-center items-center flex-col mt-10 bg-white py-8 rounded-lg shadow-2xl">
        {EXPERIENCES.map(e => (
          <Timeline
            key={e.company}
            {...e}
          />
        ))}
      </article>
    </section>
  )
}