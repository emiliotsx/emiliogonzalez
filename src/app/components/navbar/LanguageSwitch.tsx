'use client'

import { useParams } from 'next/navigation'
import { useTransition } from 'react'

import { usePathname, useRouter, routing } from '@/i18n/routing'

import Badge from './link/Badge'
import Icon from './link/Icon'

export default function LanguageSwitch({ textLanguage, locale }: { textLanguage: string, locale: string }) {

  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const pathname = usePathname()
  const params = useParams()

  const onSelectChange = () => {
    const nextLocale = routing.locales.filter(l => l !== locale)
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      )
    })
  }

  return (
    <button
      className='block p-4 text-green rounded-full border hover:text-white transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-125 hover:bg-green-medium hover:rotate-5 dark:bg-black dark:text-green-medium hover:dark:text-white dark:border-2 dark:border-dark'
      disabled={isPending}
      onClick={onSelectChange}
      type='button'
    >
      <Badge text={textLanguage} />
      <Icon icon={`${locale === "es" ? "Spain" : "Usa"}`} />
    </button>
  )
}
