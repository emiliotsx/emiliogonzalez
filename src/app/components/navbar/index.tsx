import Links from "@/app/components/navbar/Links"

export default function Navbar() {
  return (
    <nav className="w-full mx-auto px-3 py-2 fixed bottom-0 left-0 right-0 z-50 backdrop-blur-sm md:flex md:justify-center" >
      <div className="py-1 bg-white bg-opacity-65 border shadow-2xl max-w-screen-xl rounded-3xl md:w-[450px] md:content-center md:px-1 md:py-3 dark:bg-black dark:border-black">
        <Links />
      </div>
    </nav>
  )
}