import Project from "@/app/components/icons/Project"
import Experience from "@/app/components/icons/Experience"
import About from "@/app/components/icons/About"
import Home from '@/app/components/icons/Home'
import Moon from '@/app/components/icons/Moon'
import Sun from '@/app/components/icons/Sun'

const ICONS_MOBILE: Record<string, any> = {
  About: <About variant='small' />,
  Project: <Project variant='small' />,
  Experience: <Experience variant='small' />,
  Home: <Home variant='small' />,
  Moon: <Moon variant='small' />,
  Sun: <Sun variant='small' />
}

const ICONS_DESKTOP: Record<string, any> = {
  About: <About variant='medium' />,
  Project: <Project variant='medium' />,
  Experience: <Experience variant='medium' />,
  Home: <Home variant='medium' />,
  Moon: <Moon variant='medium' />,
  Sun: <Sun variant='medium' />
}

export default function Icon({ icon }: { icon: string }) {
  const iconMobile = ICONS_MOBILE[icon] as React.ReactNode
  const iconDesktop = ICONS_DESKTOP[icon] as React.ReactNode

  return (
    <>
      <span className='block md:hidden'>
        {iconMobile}
      </span>
      <span className='hidden md:size-6 md:flex md:items-center md:justify-center'>
        {iconDesktop}
      </span>
    </>
  )
}