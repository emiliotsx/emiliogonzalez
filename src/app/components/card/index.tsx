import Image from "next/image"

import Preview from "../icons/Preview"
import Tecnologie from "./Tecnologie"

export default function Card({ image, title, description, url, tecnologies, labelButton }: Props) {
  return (
    <div className="w-sm overflow-hidden bg-white shadow-2xl rounded-xl mt-10 md:flex md:flex-row md:w-full animate-element dark:bg-black dark:shadow-black">
      <header className="relative h-[200px] w-full group md:h-auto md:w-[400px]">
        <div className="h-[200px] md:h-auto md:w-48 md:rounded-none md:rounded-s-lg ">
          <Image
            src={image}
            alt={url}
            fill
            className="object-cover grayscale transition-all duration-500 ease-in-out group-hover:grayscale-0 group-hover:scale-110"
          />
        </div>
      </header>
      <div className="md:w-[500px] md:ps-1">
        <div className="px-5 pt-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-wrap text-green dark:text-white">{title}</h5>
          <ul className="flex flex-row gap-x-2 mb-2">
            {tecnologies.map(t => (
              <li key={t}>
                <Tecnologie name={t} />
              </li>
            ))}
          </ul>
          <p className="mb-3 font-normal tracking-tight text-green dark:text-white">{description}</p>
        </div>
        <footer className="px-5 pt-1 pb-5">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-around px-2 py-2 text-white transition bg-green rounded-lg w-28 hover:bg-green-medium hover:text-white md:font-semibold dark:text-green-medium hover:dark:text-white dark:border-2 dark:border-green-medium"
          >
            {labelButton}
            <Preview />
          </a>
        </footer>
      </div>
    </div>
  )
}

interface Props extends Project {
  labelButton: string
}