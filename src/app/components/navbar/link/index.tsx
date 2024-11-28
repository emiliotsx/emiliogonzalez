'use client'

import NextLink from 'next/link'

import Badge from './Badge'
import Icon from './Icon'

export default function Link({ name, path, icon }: Link) {

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const href = e.currentTarget.getAttribute('href')
    if (!href && !href?.startsWith("#")) return

    const element = document.getElementById(href.slice(1))
    if (!element) return

    const topPosition = element.getBoundingClientRect().top + window.scrollY - 20
    window.scrollTo({
      top: topPosition,
      behavior: 'smooth'
    })
  }

  return (
    <li className='group'>
      <NextLink
        href={`#${path}`}
        onClick={handleScroll}
        className="block p-4 text-green rounded-full border hover:text-white transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-125 hover:bg-green-medium hover:rotate-5 dark:bg-black dark:text-green-medium hover:dark:text-white dark:border-2 dark:border-dark"
      >
        <Badge name={name} />
        <Icon icon={icon} />
      </NextLink>
    </li>
  )
}
