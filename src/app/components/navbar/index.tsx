import Links from "@/app/components/navbar/Links"

export default function Navbar() {
  return (
    <nav className="w-full mx-auto lg:w-[800px] px-12 py-3 fixed bottom-0 left-0 z-50 backdrop-blur-sm h-24" >
      <div className="py-1 bg-white bg-opacity-65 border shadow-2xl max-w-screen-xl rounded-3xl">
        <Links />
      </div>
    </nav>
  )
}