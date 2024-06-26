import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { NavBar } from "./navbar"

export const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    isMenuOpen 
      ? document.documentElement.classList.add('overflow-y-hidden', 'max-h-0', 'scrollbar-none')
      : document.documentElement.classList.remove('overflow-y-hidden', 'max-h-0', 'scrollbar-none')

    return () => document.documentElement.classList.remove('overflow-y-hidden', 'max-h-0', 'scrollbar-none')
  }, [isMenuOpen])

  return (
    <>
      <header className="bg-zinc-900/20">
        <nav 
          className="relative text-gray-300 font-semibold"
        >
          <div className="flex items-center justify-between gap-3 py-4 mx-12">
            <NavBar className="flex max-lg:hidden" />
            
            <div className="hidden max-lg:block cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="text-4xl" />
            </div>
          </div>
        </nav>
      </header>

      {isMenuOpen && (
        <nav 
          className="absolute top-0 right-0 left-0 bottom-0 lg:bottom-auto bg-gray-300 bg-gradient-to-b from-gray-300 to-slate-400 text-gray-900 font-extrabold z-[1]"
        >
          <div 
            className="hidden max-lg:block fixed left-0 cursor-pointer py-4 mx-12" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <X className="text-4xl mr-3" />
          </div>

          <NavBar 
            className="lg:hidden flex flex-col items-center justify-center h-full" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </nav>       
      )}
    </>
  )
}