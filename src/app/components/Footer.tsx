import Links from "@/app/components/links"

export default function Footer() {
  return (
    <footer className="w-full mx-auto lg:w-[800px] px-12 py-3 fixed bottom-0 z-50 backdrop-blur-sm">
      <nav className="py-1  bg-white bg-opacity-65 border border-green-medium max-w-screen-xl rounded-3xl" >
        <Links />
      </nav>
    </footer>
  )
}