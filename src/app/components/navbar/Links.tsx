import Link from './Link'

export default function Links() {
  const links: Link[] = [
    { name: 'Inicio', path: 'home', icon: 'Moon' },
    { name: 'Proyectos', path: 'projects', icon: 'Project' },
    { name: 'Experiencia', path: 'experience', icon: 'Experience' },
    { name: 'Sobre Mí', path: 'about', icon: 'About' },
    { name: 'Tema', path: '', icon: 'Sun' }
  ]

  return (
    <ul className="flex items-center justify-center font-semibold">
      {links?.map(link => (
        <Link key={link.name} {...link} />
      ))}
    </ul>
  )
}