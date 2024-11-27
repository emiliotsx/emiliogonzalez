import Image from "next/image"
import Preview from "./icons/Preview"

export default function Card({ image, title, description, url }: Props) {
  return (
    <div className="w-sm overflow-hidden bg-white shadow-2xl rounded-xl mt-10 md:flex md:flex-row md:w-full">
      <header className="relative h-[200px] w-full group md:h-[220px] md:w-[800px]">
        <div className="h-[200px] md:h-auto md:w-2/4 md:rounded-none md:rounded-s-lg">
          <Image
            src={image}
            alt={url}
            fill
            objectFit='cover'
            className="grayscale transition-all duration-500 ease-in-out group-hover:grayscale-0 group-hover:scale-110"
          />
        </div>
      </header>
      <div className="px-5 pt-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-wrap">{title}</h5>
        <p className="mb-3 font-normal tracking-tight">{description}</p>
      </div>
      <footer className="px-5 pt-1 pb-5">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-around px-2 py-2 text-sm text-white transition bg-green rounded-lg w-24 hover:bg-green-medium hover:text-white"
        >
          Ver Sitio
          <Preview />
        </a>
      </footer>
    </div>
  )
}

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any
  title: string
  description: string
  url: string
}