import Image from 'next/image'

import Section from '@/app/components/Section'
import profile from '@/app/assets/profile.png'
import AboutIcon from "@/app/components/icons/About"

import { getDictionary } from '@/app/dictionary'

export default async function About({ lang }: Lang) {
  const t = (await getDictionary(lang)).About

  const year = new Date().getFullYear()

  const TextGreenStrong = ({ text }: { text: string }) => (
    <span className="font-semibold text-green dark:text-green-medium">{text}</span>
  )

  return (
    <Section
      id="about"
      icon={<AboutIcon variant="medium" />}
      title={t.title}
      className='my-20 md:pb-6'
    >
      <article className='flex justify-center transition-all duration-500 -rotate-3 hover:rotate-0 animate-element'>
        <Image
          src={profile}
          alt='Emilio González'
          height={400}
          width={400}
        />
      </article>
      <article className="px-4 animate-element">
        <p className="text-green text-wrap tracking-tight py-2 dark:text-white">
          {t.paragraphOne} <TextGreenStrong text="2018" />. {t.paragraphTwo} <TextGreenStrong text="Frontend y Backend" />, {t.paragraphThree} <TextGreenStrong text={t.paragraphFour} />
        </p>
        <p className="text-green text-wrap tracking-tight py-2 dark:text-white">
          {t.paragraphFive} <TextGreenStrong text={t.paragraphSix} /> {t.paragraphSeven}
        </p>
        <p className="text-green text-wrap tracking-tight pt-4 pb-3 text-sm text-center dark:text-white">
          <TextGreenStrong text={`© ${year} Emilio González. ${t.footer}`} />
        </p>
      </article>
    </Section>
  )
}