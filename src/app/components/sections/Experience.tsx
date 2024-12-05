import Section from "@/app/components/Section"
import Timeline from "@/app/components/Timeline"
import ExperienceIcon from "@/app/components/icons/Experience"

import { getDictionary } from "@/app/dictionary"

export default async function Experience({ lang }: Lang) {

  const t = (await getDictionary(lang)).Experience

  return (
    <Section
      id="experience"
      icon={<ExperienceIcon variant="medium" />}
      title={t.title}
      className='my-20'
    >
      <article className="flex justify-center items-center flex-col mt-5 bg-white py-8 rounded-lg shadow-2xl dark:bg-black dark:shadow-black">
        {t.experiences?.map(e => (
          <Timeline
            key={e.company}
            {...e}
            locale={lang}
            label={t.label}
          />
        ))}
      </article>
    </Section>
  )
}