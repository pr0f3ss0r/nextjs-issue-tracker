import Link from 'next/link'
import React from 'react'
import { FaBug } from "react-icons/fa6";

const NavBar = () => {

    const links = [
        {label:"DashBoard", href: "/"},
        {label:"Issues", href: "/issues"}
    ]

  return (
    <nav className='flex space-x-5 border-b-2 h-14 items-center px-5 mb-5'>
        <Link href="/"><FaBug /> </Link>
       <ul className='flex space-x-5'>
        {links.map((link)=>(
             <Link key={link.href}
             className='text-zinc-400 hover:text-zinc-50 transition-colors'
             href={link.href}>{link.label}
             </Link> 
        ))}
       </ul>
    </nav>
  )
}

export default NavBar