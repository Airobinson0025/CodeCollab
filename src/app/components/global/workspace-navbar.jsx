'use client'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/app/components/ui/button'
import { IoHomeSharp, IoPerson, IoSettingsSharp, IoDesktopSharp, IoChatboxSharp } from 'react-icons/io5'
import { usePathname } from 'next/navigation'
import { ModeToggle } from './mode-toggle'

const workspaceLinks = [
    { href: '/workspace', label: 'Home', icon: <IoHomeSharp  /> },
    { href: '/workspace/sessions', label: 'Sessions', icon: <IoDesktopSharp /> },
    { href: '/workspace/chats', label: 'Chats', icon: <IoChatboxSharp /> },
    { href: '/workspace/notes', label: 'Notes', icon: <IoPerson /> },
    { href: '/workspace/profile', label: 'Profile', icon: <IoSettingsSharp /> },
]

const WorkspaceNavbar = () => {
    const pathname = usePathname()



  return (
    <div className='fixed flex items-center justify-between p-3 w-full bg-transparent backdrop-blur-md z-40'>
        <div>
            <Link href='/'>
                <h4 className='text-primary dark:text-white'>Code Collab</h4>
            </Link>
        </div>
        <nav>
            <ul className='hidden md:flex items-center gap-10 border py-2 px-6 rounded-full shadow-md'>
                {workspaceLinks.map((link, index) => (
                    <li key={index} className={link.href === pathname ? 'text-primary' : 'text-slate-300 hover:text-primary transition duration-300'}>
                        <Link href={link.href} className='font-medium'>{link.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
        <div className='flex items-center gap-4'>
            <Link href='/workspace'>
                <Button>
                    <IoHomeSharp size={18}/>
                </Button>
            </Link>
            <ModeToggle className='z-[1000]'/>
        </div>
    </div>
  )
}

export default WorkspaceNavbar