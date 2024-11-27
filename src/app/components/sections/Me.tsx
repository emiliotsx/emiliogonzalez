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
    <section id="home" className="max-w-sm mx-auto lg:w-[800px] my-3">
      <article>
        {/* dark:text-shadow-green */}
        <h1 className="font-black text-4xl text-green tracking-tight">Emilio González</h1>
        <h2 className="font-bold text-2xl my-2 text-green-medium tracking-tight">Desarrollador Web</h2>
        <p className="text-wrap font-medium text-xl my-2 tracking-tight">+ {years} años de experiencia con sede en Guatemala, apasionado por el desarrollo web.</p>
      </article>
      <article className="flex flex-wrap gap-2 mt-4">
        {socialsMedia.map(({ url, icon }) => {
          const Icon = SOCIAL_ICONS[icon]
          return (
            // text-green-medium bg-green
            <a
              key={icon}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-3 py-1 bg-green text-white transition rounded-full group max-w-fit hover:bg-green-medium hover:text-white"
            >
              <Icon />
              {icon}
            </a>
          )
        })}
      </article>
    </section>
  )
}