import Links from "@/app/components/navigation/Links"

export default async function Navigation({ lang }: Lang) {
  console.log('lang', lang)
  return (
    <>
      <nav className="w-full mx-auto px-3 py-2 fixed bottom-0 left-0 right-0 z-10 md:flex md:justify-center" >
        <div className="py-1 bg-white bg-opacity-65 border shadow-2xl max-w-screen-xl rounded-3xl md:w-[450px] md:content-center md:px-1 md:py-3 dark:bg-black dark:border-black">
          <Links lang={lang} />
        </div>
      </nav>
      <div className="gradient-blur h-[75px] md:h-[100px]">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  )
}