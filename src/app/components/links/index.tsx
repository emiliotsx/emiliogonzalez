import Link from './Link'

export default function Links() {
  const links: Link[] = [
    { name: 'Home', path: 'home', icon: 'Moon' },
    { name: 'Proyectos', path: 'projects', icon: 'Project' },
    { name: 'Experiencia Laboral', path: 'experience', icon: 'Experience' },
    { name: 'Sobre Mí', path: 'about', icon: 'About' },
    { name: 'Theme', path: '', icon: 'Sun' }
  ]

  return (
    <ul className="flex items-center justify-center font-semibold">
      {links?.map(link => (
        <Link key={link.name} {...link} />
      ))}
    </ul>
  )
}