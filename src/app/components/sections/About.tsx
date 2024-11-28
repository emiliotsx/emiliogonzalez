import Image from 'next/image'

import Section from '@/app/components/Section'
import profile from '@/app/assets/profile.png'
import AboutIcon from "@/app/components/icons/About"

export default function About() {

  const year = new Date().getFullYear()

  const TextGreenStrong = ({ text }: { text: string }) => (
    <span className="font-semibold text-green dark:text-green-medium">{text}</span>
  )

  return (
    <Section
      id="about"
      icon={<AboutIcon variant="medium" />}
      title="Sobre Mí !"
      className='my-20 md:pb-6'
    >
      <article className='flex justify-center transition-all duration-500 -rotate-3 hover:rotate-0 animate-element'>
        <Image
          src={profile}
          alt='Emilio González'
          height={400}
          width={400}
        />
      </article>
      <article className="px-4 animate-element">
        <p className="text-green text-wrap tracking-tight py-2 dark:text-white">
          Mi nombre es Emilio González, soy programador desde <TextGreenStrong text="2018" />. Tengo experiencia como <TextGreenStrong text="Frontend y Backend" />, tambien administrando <TextGreenStrong text="Bases de datos relacionales y no relaciones" />
        </p>
        <p className="text-green text-wrap tracking-tight py-2 dark:text-white">
          Actualmente <TextGreenStrong text="estoy encargado de la creación y mantenimiento de módulos para sistemas empresariales" /> enfocados en mejorar la productividad de los usuarios.
        </p>
        <p className="text-green text-wrap tracking-tight pt-4 pb-3 text-sm text-center dark:text-white">
          <TextGreenStrong text={`© ${year} Emilio González. Casi todos los derechos reservados`} />
        </p>
      </article>
    </Section>
  )
}