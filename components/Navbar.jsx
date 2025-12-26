'use client'
import { TextAlignJustify } from "lucide-react";
import Link from "next/link";
import Logo from '../public/logo.png'
import { usePathname } from "next/navigation";
import { useState } from "react"
import Image from "next/image";

const navLinks = [
    {
        href:"/",
        label:"Home"
    },
    {
        href:"/#about",
        label:"About"
    },
    {
        href:"/gallery",
        label:"Gallery"
    },
    {
        href:"/#ministries",
        label:"Ministries"
    },
    {
        href:"/#contact",
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
        <div className="container relative bg-white flex max-w-7xl border border-stone-200/50 glass-panel px-6 py-3  mx-auto rounded-full justify-between items-center shadow-sm shadow-gold-500">
                {/* logo */}
                <div >
                    <Link href={'/'}>
                        <Image src={Logo} width={70} height={70} className="absolute top-0 md:-top-1" alt="logo" />
                    </Link>
                </div>
   
                {/* Mobile */}
                <button onClick={handleClick} className="inline-flex text-forest-900 md:hidden items-center justify-center rounded-md text-center px-3.5 py-2.5 border">
                    <TextAlignJustify />
                </button>

                <div className={`top-15 right-10 bg-white rounded-b-xl border border-text-forest-900 border-t-0 md:hidden transition-all ${menuOpen ? 'absolute' : 'hidden'} `}>
                    <div className="flex flex-col w-40 p-1 transition-all">
                        {navLinks.map((navLink, index) => {
                        return(

                        <Link key={index} href={navLink.href} className="block uppercase font-medium px-4 py-2 text-forest-900 
                        hover:text-white hover:bg-gold-500 rounded-md" >{navLink.label}</Link>
                        )
                        })}
                    </div>
                </div>

                {/* Desktop */}
                <div className="hidden md:flex items-center space-x-5 md:gap-4">
                    {navLinks.map((navLink , index) => {
                        return(
                            <Link key={index} onClick={() => setNavName(navLink.label)} href={navLink.href} className={`uppercase p-1.5 inline-block
                                text-forest-900 hover:text-gold-500 transition-color transition-transform
                                font-medium ${navName === navLink.label ? "text-gold-500" : "" }`}>
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