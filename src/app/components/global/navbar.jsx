'use client'
import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './mode-toggle'
import { useSession, signOut } from 'next-auth/react'
import { usePathname } from 'next/navigation'




const Navbar = () => {
  const { data: session, status } = useSession()
  const pathname = usePathname()

  const links = session
    ? [
        { href: '/pricing', label: 'Pricing' },
        { href: '/workspace', label: 'Workspace' },
        { href: '/features', label: 'Features' },
        { href: '/blog', label: 'Blog' },
        { href: '#', label: 'Log Out', onClick: (e) => {
          e.preventDefault()
          signOut()
        
        }}
      ]
    : [
        { href: '/pricing', label: 'Pricing' },
        { href: '/workspace', label: 'Workspace' },
        { href: '/features', label: 'Features' },
        { href: '/blog', label: 'Blog' },
        { href: '/sign-in', label: 'Sign In'}
      ];

      
      const isNavbarVisible = !pathname.includes('/workspace')

  
  return (
    <div className={ isNavbarVisible ? 'fixed flex items-center justify-between w-full p-3 bg-transparent backdrop-blur-md' : 'hidden'}>
        <Link href='/'>
            <h4>Code Collab</h4>
        </Link>

        <nav className='flex items-center gap-6'>
            <ul className='hidden md:flex items-center gap-8'>
                {links.map((link, index) => (
                    <li key={index} className='text-md font-medium hover:scale-105 hover:text-primary transition duration-300'>
                        {link.href === '#' ? (
                             <Link href={link.href} onClick={link.onClick}>{link.label}</Link>
                        ) : (
                            <Link href={link.href}>{link.label}</Link>
                        )}
                    </li>
                ))}
            </ul>
            <ModeToggle />
        </nav>
    </div>
  )
}

export default Navbar