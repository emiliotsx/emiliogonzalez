export const Footer = () => {

  const currentlyYear = () => {
    const date = new Date();
    const year = date.getFullYear();
    return year || '';
  }

  return (
    <footer className="absolute bottom-0 w-full bg-sz-white py-4 shadow dark:bg-sz-white flex flex-col items-center">
      <span className="font-bold text-l text-sz-secondary">
        © {currentlyYear()} Emilio González | #superzombie🧟
      </span>
      <span className="font-bold text-l text-sz-secondary">
        Made with Love and Next.js
      </span>
    </footer>
  )
}
