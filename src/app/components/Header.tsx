export default function Header(): JSX.Element {
  return (
    <header className="fixed left-0 top-0 flex w-full justify-between border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
      <div className="ml-5 flex items-center">
        <h1 className="text-white text-2xl font-bold">Emilio</h1>
        <span className="bg-light-green rounded-full w-2 h-2 ml-2 mt-2"></span>
      </div>
      <div></div>
    </header>
  )
}