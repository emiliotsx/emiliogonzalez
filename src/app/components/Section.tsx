export default function Section({
  icon,
  title,
  className,
  id,
  children,
}: Props) {
  return (
    <section id={id} className={`${className}`}>
      <article className="flex items-center">
        {icon && <div className="pr-2">{icon}</div>}
        {title && <h2 className="text-3xl text-italic font-bold text-green tracking-tight">{title}</h2>}
      </article>
      {children}
    </section>
  )
}

interface Props {
  icon?: React.ReactNode
  title?: string
  className?: string
  id: string
  children: React.ReactNode
}