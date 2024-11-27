import Image from 'next/image'

import profile from '@/app/assets/profile.png'

import AboutIcon from "@/app/components/icons/About"


export default function About() {

  const TextGreenStrong = ({ description }: { description: string }) => (
    <span className="font-semibold text-green">{description}</span>
  )

  return (
    <section id="about" className="max-w-sm mx-auto lg:w-[800px] my-3 mt-20 h-96">
      <article className="flex items-center">
        <div className="pr-2">
          <AboutIcon size="8" />
        </div>
        <h2 className="text-3xl text-italic font-bold text-green">Sobre Mí !</h2>
      </article>
      <article className='flex justify-center transition-all duration-500 -rotate-3 hover:rotate-0'>
        <Image
          src={profile}
          alt='Emilio González'
          height={400}
          width={400}
        />
      </article>
      <article className="p-4 pt-0">
        <p className="text-green text-wrap tracking-tight py-2">
          Mi nombre es Emilio González, soy programador desde <TextGreenStrong description="2018" />. Tengo experiencia como <TextGreenStrong description="Frontend y Backend" />, tambien administrando <TextGreenStrong description="Bases de datos relacionales y no relaciones" />
        </p>
        <p className="text-green text-wrap tracking-tight py-2">
          Actualmente <TextGreenStrong description="estoy encargado de la creación y mantenimiento de módulos para sistemas empresariales" /> enfocados en mejorar la productividad de los usuarios.
        </p>
      </article>
    </section>
  )
}