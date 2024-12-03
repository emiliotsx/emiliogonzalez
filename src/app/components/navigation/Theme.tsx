'use client'

import { useState, useEffect } from 'react'

import Badge from './link/Badge'
import Icon from './link/Icon'

export default function Theme({ textThemeDark, textThemeLight }: { textThemeDark: string, textThemeLight: string }) {

  const [theme, setTheme] = useState<Theme>('')

  useEffect(() => {
    handleSetInitTheme()
    handleClassTheme()
  }, [theme])

  const handleSetInitTheme = () => {
    if (theme !== '') return;

    const storageTheme = window.localStorage.getItem("theme") as Theme ?? ''
    if (storageTheme !== '') return setTheme(storageTheme)

    const currentTheme = (window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
    handleSetTheme(currentTheme)
  }

  const handleClassTheme = () => {
    const html = document.querySelector('html')
    if (theme === 'dark') {
      html?.classList.add('dark')
    } else {
      html?.classList.remove('dark')
    }
  }

  const handleSetTheme = (theme: Theme) => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    window.localStorage.setItem("theme", newTheme)
    setTheme(newTheme)
  }

  return (
    <li className='group'>
      <button
        onClick={() => handleSetTheme(theme)}
        className="block p-4 text-green rounded-full border hover:text-white transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-125 hover:bg-green-medium hover:rotate-5 dark:bg-black dark:text-green-medium hover:dark:text-white dark:border-2 dark:border-dark"
        type='button'
      >
        <Badge text={theme === 'light' ? textThemeDark : textThemeLight} />
        <Icon icon={theme === 'light' ? 'Moon' : 'Sun'} />
      </button>
    </li>
  )
}