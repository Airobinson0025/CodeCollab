import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './mode-toggle'

const links = [
  { href: '/pricing', label: 'Pricing' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/features', label: 'Features' },
  { href: '/demo', label: 'Demo' },
  { href: '/register', label: 'Sign Up' }
]

const Navbar = () => {
  return (
    <div className='fixed flex items-center justify-between w-full p-3 bg-transparent backdrop-blur-md'>
        <Link href='/'>
            <h4>Code Collab</h4>
        </Link>

        <nav className='flex items-center gap-8'>
            <ul className='hidden md:flex items-center gap-8'>
                {links.map((link, index) => (
                    <li key={index} className='text-md font-medium hover:scale-105 hover:text-primary transition duration-300'>
                        <Link href={link.href}>{link.label}</Link>
                    </li>
                ))}
            </ul>
            <ModeToggle />
        </nav>
    </div>
  )
}

export default Navbar