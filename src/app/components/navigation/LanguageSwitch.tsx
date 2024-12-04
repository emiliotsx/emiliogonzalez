'use client'


import { useTransition } from 'react'
import { useRouter } from 'next/navigation';

import Badge from './link/Badge'

import { i18n } from '@/app/i18n.config'

export default function LanguageSwitch({ textLanguage, locale }: { textLanguage: string, locale: Language }) {

  const router = useRouter();
  const [isPending, startTransition] = useTransition()

  const onSelectChange = () => {
    const nextLocale = i18n.locales.filter(l => l !== locale)
    startTransition(() => router.push(`/${nextLocale}`))
  }

  return (
    <li className='group'>
      <button
        className='block p-3 px-4 text-green rounded-full border hover:text-white transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-125 hover:bg-green-medium hover:rotate-5 dark:bg-dark dark:text-green-medium hover:dark:text-white dark:border-2 dark:border-dark'
        disabled={isPending}
        onClick={onSelectChange}
        type='button'
      >
        <Badge text={textLanguage} />
        <span className='uppercase text-sm'>{locale}</span>
      </button>
    </li>
  )
}
