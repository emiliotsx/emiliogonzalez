import { useLocale, useTranslations } from 'next-intl'

import Link from './link'
import Theme from './Theme'
import LanguageSwitch from './LanguageSwitch'

export default function Links() {
  const t = useTranslations("Navigation")
  const locale = useLocale()

  const links: Link[] = [
    { name: t("home"), path: 'home', icon: 'Home' },
    { name: t("projects"), path: 'projects', icon: 'Project' },
    { name: t("experience"), path: 'experience', icon: 'Experience' },
    { name: t("about"), path: 'about', icon: 'About' }
  ]

  return (
    <ul className="flex items-center justify-around font-semibold md:h-12">
      {links?.map(link => (
        <Link key={link.name} {...link} />
      ))}
      <Theme
        textThemeDark={t("textThemeDark")}
        textThemeLight={t("textThemeLight")}
      />
      <LanguageSwitch
        textLanguage={t("textLanguage")}
        locale={locale}
      />
    </ul>
  )
}