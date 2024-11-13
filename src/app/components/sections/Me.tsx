import Image from "next/image"

import profile from '@/app/assets/profile.jpg'

import Section from "../Section"
import GitHub from "../icons/GitHub"
import LinkedIn from "../icons/LinkedIn"
import Codepen from "../icons/Codepen"

export default function Me() {

  const years = new Date().getFullYear() - 2018

  const socialsMedia: SocialMeda[] = [
    { url: 'https://github.com/emiliotsx', icon: 'GitHub' },
    { url: 'https://www.linkedin.com/in/emiliotsx', icon: 'LinkedIn' },
    { url: 'https://codepen.io/emiliotsx', icon: 'Codepen' }
  ]

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const SOCIAL_ICONS: Record<string, any> = {
    GitHub,
    LinkedIn,
    Codepen
  }

  return (
    <Section className="flex justify-center flex-col items-center">
      <article className="flex justify-center items-center flex-col text-center">
        <div className="relative w-52 h-52 overflow-hidden rounded-full mb-2">
          <Image
            src={profile}
            width={208}
            height={208}
            alt="Emilio González"
            className="aspect-square object-cover"
          />
        </div>
        <h1 className="font-black text-3xl">Emilio González</h1>
        <h2 className="font-medium text-lg my-1">Desarrollador Web con + {years} años de experiencia</h2>
      </article>
      <article className="flex flex-wrap gap-2 mt-3">
        {socialsMedia.map(({ url, icon }) => {
          const Icon = SOCIAL_ICONS[icon]
          return (
            <a
              key={icon}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-1 text-green-medium transition bg-green rounded-full group max-w-fit"
            >
              <Icon />
              {icon}
            </a>
          )
        })}
      </article>
    </Section>
  )
}