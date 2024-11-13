export default function Link({ name, path }: Link) {
  return (
    <li>
      <a
        href={`#${path}`}
        className="block py-2 px-3 md:p-0 text-white rounded"
      >
        {name}
      </a>
    </li>
  )
}
