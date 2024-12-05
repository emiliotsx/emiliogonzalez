import Icon from "../navigation/link/Icon"

export default function Tecnologie({ name }: { name: string }) {
  const CLASSES: Record<string, string> = {
    "Next": "bg-black text-white dark:bg-dark dark:text-white",
    "Tailwind": "bg-[#003159] text-white dark:bg-[#003159] dark:text-white"
  }

  const TEXT: Record<string, string> = {
    "Next": "Next.js",
    "Tailwind": "Tailwind CSS"
  }

  const ICON_CLASSNAME: Record<string, string> = {
    "Next": "bg-white rounded-full md:-px-4",
    "Tailwind": ""
  }

  return (
    <button
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full group max-w-fit text-[0.75rem] tracking-tight cursor-auto md:py-[0.15rem] ${CLASSES[name]}`}
    >
      <Icon icon={name} className={ICON_CLASSNAME[name]} />
      {TEXT[name]}
    </button>
  )
}