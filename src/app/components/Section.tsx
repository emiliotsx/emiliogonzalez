export default function Section({
  icon,
  title,
  className,
  children,
}: Readonly<{
  icon?: React.ReactNode;
  title?: string;
  className?: string;
  children: React.ReactNode;
}>) {
  return (
    <section className={`w-full mx-auto lg:w-[800px] my-3 py-6 ${className}`}>
      <article className="flex items-center">
        {icon && <div className="flex justify-center items-center size-8">{icon}</div>}
        {title && <h2 className="text-3xl font-semibold gap-x-3">{title}</h2>}
      </article>
      {children}
    </section>
  )
}