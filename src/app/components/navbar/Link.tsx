'use client'

import React from 'react'
import NextLink from 'next/link'

import Project from "@/app/components/icons/Project"
import Experience from "@/app/components/icons/Experience"
import About from "@/app/components/icons/About"
import Moon from '@/app/components/icons/Moon'
import Sun from '@/app/components/icons/Sun'
import Home from '@/app/components/icons/Home'

export default function Link({ name, path, icon }: Link) {

  const ICONS_MOBILE: Record<string, any> = {
    About: <About variant='small' />,
    Project: <Project variant='small' />,
    Experience: <Experience variant='small' />,
    Moon: <Moon variant='small' />,
    Sun: <Sun variant='small' />,
    Home: <Home variant='small' />
  }

  const ICONS_DESKTOP: Record<string, any> = {
    About: <About variant='medium' />,
    Project: <Project variant='medium' />,
    Experience: <Experience variant='medium' />,
    Moon: <Moon variant='medium' />,
    Sun: <Sun variant='medium' />,
    Home: <Home variant='medium' />
  }

  const iconMobile = ICONS_MOBILE[icon] as React.ReactNode
  const iconDesktop = ICONS_DESKTOP[icon] as React.ReactNode

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
        className="block p-4 text-green rounded-full border hover:text-white transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-125 hover:bg-green-medium hover:rotate-5"
        title={name}
      >
        <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-[0.75rem] font-semibold text-white bg-green px-2.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-0">
          {name}
        </span>
        <span className='block md:hidden'>
          {iconMobile}
        </span>
        <span className='hidden md:size-6 md:flex md:items-center md:justify-center'>
          {iconDesktop}
        </span>
      </NextLink>
    </li>
  )
}
