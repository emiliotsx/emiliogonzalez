import NextLink from 'next/link'

import Project from "@/app/components/icons/Project"
import Experience from "@/app/components/icons/Experience"
import About from "@/app/components/icons/About"
import Moon from '@/app/components/icons/Moon'
import Sun from '@/app/components/icons/Sun'

export default function Link({ name, path, icon }: Link) {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ICONS: Record<string, any> = {
    About,
    Project,
    Experience,
    Moon,
    Sun
  }

  const Icon = ICONS[icon]

  return (
    <li className="px-2">
      <NextLink
        href={`#${path}`}
        className="block p-4 md:p-0 text-green rounded-full border hover:text-white transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-125 hover:bg-green-medium hover:rotate-5"
        title={name}
      >
        <span className='size-4'>
          <Icon />
        </span>
      </NextLink>
    </li>
  )
}
