'use client'
import { TextAlignJustify } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react"

const navLinks = [
    {
        href:"/",
        label:"Home"
    },
    {
        href:"/",
        label:"About"
    },
    {
        href:"/",
        label:"Gallery"
    },
    {
        href:"/",
        label:"Contact"
    },
]


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [navName, setNavName] = useState('Home');
    const pathName = usePathname();

    const handleClick = () => {
        setMenuOpen(!menuOpen);
    }

  return (
    <nav className="fixed top-0 left-0 right-0 z-100 p-4 md:p-6">
        <div className="container bg-white flex max-w-7xl border border-stone-200/50 glass-panel px-6 py-3  mx-auto rounded-full justify-between items-center shadow-sm shadow-amber-50">
                {/* logo */}
                <div className="mr-10">
                    <Link href={'/'}>
                        Logo 
                    </Link>
                </div>
   
                {/* Mobile */}
                <button onClick={handleClick} className="inline-flex text-white md:hidden items-center justify-center rounded-md text-center px-3.5 py-2.5 border">
                    <TextAlignJustify />
                </button>

                <div className={`top-20 right-10 bg-white rounded-b-xl md:hidden transition-all ${menuOpen ? 'absolute' : 'hidden'}`}>
                    <div className="flex flex-col w-40 p-1 transition-all">
                        {navLinks.map((navLink) => {
                        return(

                            <Link href={navLink.href} className="block uppercase font-medium px-4 py-2 text-forest-900 
                            hover:text-slate-600 hover:bg-slate-200 rounded-md" >{navLink.label}</Link>
                        )
                        })}
                        </div>
                </div>

                {/* Desktop */}
                <div className="hidden md:flex items-center space-x-5 md:gap-4">
                    {navLinks.map((navLink) => {
                        return(
                            // <Link href={navLink.href} className=" font-medium text-forest-900 
                            // hover:text-forest-700 transition-colors border-b border-b-gold-500" >{navLink.label}</Link>
                            <Link onClick={() => setNavName(navLink.label)} href={navLink.href} className={`uppercase p-1.5 inline-block
                                text-gold-500 hover:text-white transition-color transition-transform
                                font-medium ${navName === navLink.label ? "border-b-2 border-white" : "" }`}>
                                    {navLink.label}
                            </Link>
                        )
                        })}
                </div>
        </div>
    </nav>
  )
}

export default Navbar