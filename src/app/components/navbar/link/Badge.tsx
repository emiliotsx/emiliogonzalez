export default function Badge({ text }: { text: string }) {
  return (
    <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-[0.75rem] font-semibold text-white bg-green-medium px-2.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-0 dark:bg-black dark:text-green-medium">
      {text}
    </span>
  )
}