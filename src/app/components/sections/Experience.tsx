import { useLocale, useTranslations } from 'next-intl'

import Section from '@/app/components/Section'
import Timeline from "@/app/components/Timeline"
import ExperienceIcon from "@/app/components/icons/Experience"

import { EXPERIENCES } from "@/app/data/experience"

export default function Experience() {

  const t = useTranslations("Experience")
  const locale = useLocale() as Language

  return (
    <Section
      id="experience"
      icon={<ExperienceIcon variant="medium" />}
      title={t("title")}
      className='my-20'
    >
      <article className="flex justify-center items-center flex-col mt-5 bg-white py-8 rounded-lg shadow-2xl dark:bg-black dark:shadow-black">
        {EXPERIENCES[locale]?.map(e => (
          <Timeline
            key={e.company}
            {...e}
            locale={locale}
            label={t("label")}
          />
        ))}
      </article>
    </Section>
  )
}