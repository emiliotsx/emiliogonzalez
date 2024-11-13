import Links from "./Links"

export default function Header() {
  return (
    <header className="w-full mx-auto lg:w-[800px]">
      <nav className="bg-black bg-opacity-65 border-b-2 border-white max-w-screen-xl">
        <div className="flex flex-wrap flex-col items-center justify-between mx-auto py-2">
          <span className="self-center text-lg font-semibold whitespace-nowrap">emilio.tsx</span>
        </div>
        <Links />
      </nav>
    </header>
  )
}