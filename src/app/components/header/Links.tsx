import Link from './Link'

export default function Links() {
  const links: Link[] = [
    { name: 'Proyectos', path: 'proyects' },
    { name: 'Experiencia Laboral', path: 'experience' },
    { name: 'Sobre Mí', path: 'about' },
  ]

  return (
    <div className="bg-transparent">
      <ul className="flex items-center justify-center font-semibold rounded-lg">
        {links?.map(link => (
          <Link key={link.name} {...link} />
        ))}
      </ul>
    </div>
  )
}