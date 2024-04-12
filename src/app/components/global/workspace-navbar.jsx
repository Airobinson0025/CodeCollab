import React from 'react'
import Link from 'next/link'
import { Button } from '@/app/components/ui/button'
import { IoHomeSharp, IoPerson, IoSettingsSharp, IoDesktopSharp, IoChatboxSharp } from 'react-icons/io5'
import { usePathname } from 'next/navigation'
import { ModeToggle } from './mode-toggle'

const workspaceLinks = [
    { href: '/workspace', label: 'Home', icon: <IoHomeSharp  /> },
    { href: '/workspace/rooms', label: 'Rooms', icon: <IoDesktopSharp /> },
    { href: '/workspace/chats', label: 'Chats', icon: <IoChatboxSharp /> },
    { href: '/workspace/profile', label: 'Profile', icon: <IoPerson /> },
    { href: '/workspace/settings', label: 'Settings', icon: <IoSettingsSharp /> },
]

const WorkspaceNavbar = () => {
    const pathname = usePathname()



  return (
    <div className='fixed flex items-center justify-between p-3 w-full bg-transparent backdrop-blur-md'>
        <div>
            <Link href='/'>
                <h4 className='text-primary dark:text-white'>Code Collab</h4>
            </Link>
        </div>
        <nav>
            <ul className='flex items-center gap-10 border py-2 px-6 rounded-full shadow-md'>
                {workspaceLinks.map((link, index) => (
                    <li key={index} className={link.href === pathname ? 'text-primary' : 'text-normal hover:text-primary transition duration-300'}>
                        <Link href={link.href} className='font-medium'>{link.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
        <div className='flex items-center gap-4'>
            <Link href='/'>
                <Button>
                    <IoHomeSharp size={18}/>
                </Button>
            </Link>
            <ModeToggle />
        </div>
    </div>
  )
}

export default WorkspaceNavbar