
import Section from '@/app/components/Section'
import GitHub from "@/app/components/icons/GitHub"
import LinkedIn from "@/app/components/icons/LinkedIn"
import Codepen from "@/app/components/icons/Codepen"
import Email from "@/app/components/icons/Email"

export default function Me() {

  const years = new Date().getFullYear() - 2018

  const socialsMedia: SocialMeda[] = [
    { url: 'https://github.com/emiliotsx', icon: 'GitHub' },
    { url: 'https://www.linkedin.com/in/emiliotsx', icon: 'LinkedIn' },
    { url: 'https://codepen.io/emiliotsx', icon: 'Codepen' },
    { url: 'mailto:emiliofgonzalez7@gmail.com', icon: 'Email', text: 'Contáctame' }
  ]

  const SOCIAL_ICONS: Record<string, any> = {
    GitHub,
    LinkedIn,
    Codepen,
    Email
  }

  return (
    <Section
      id="home"
      className="mt-5 mb-20"
    >
      <article>
        {/* dark:text-shadow-green */}
        <h1 className="font-black text-4xl text-green tracking-tight">Emilio González</h1>
        <h2 className="font-bold text-2xl my-2 text-green-medium tracking-tight">Desarrollador Web</h2>
        <p className="text-wrap font-medium text-xl my-2 tracking-tight">+ {years} años de experiencia con sede en Guatemala, apasionado por el desarrollo web.</p>
      </article>
      <article className="flex flex-wrap gap-2 mt-4">
        {socialsMedia.map(({ url, icon, text }) => {
          const Icon = SOCIAL_ICONS[icon]
          return (
            // text-green-medium bg-green
            <a
              key={icon}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-3 py-1 bg-green text-white transition rounded-full group min-w-32 max-w-fit text-md hover:bg-green-medium hover:text-white"
            >
              <Icon />
              {text ?? icon}
            </a>
          )
        })}
      </article>
    </Section>
  )
}