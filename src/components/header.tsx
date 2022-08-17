export const Header = () => {
  return (
    <header>
      <nav className="bg-sz-white shadow dark:bg-sz-white px-2 sm:px-4 py-2.5">
        <div className="container flex flex-wrap justify-between items-center mx-auto w-7/12">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-sz-secondary">
            🧟 Emilio González
          </span>
          <div className="flex items-center md:order-2">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-sz-secondary"></span>
          </div>
        </div>
      </nav>
    </header>
  )
}
