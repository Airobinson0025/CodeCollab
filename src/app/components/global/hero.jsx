'use client'
import { Button } from '@/app/components/ui/button'
import Link  from 'next/link'
import React from 'react'
import { useSession } from 'next-auth/react'



const Hero = () => {
  const { data: session, status } = useSession()

  if(status === 'loading') {
    return null
  }

  return (
    <section className='px-8 h-[700px] flex flex-col items-start justify-center'>
        <h1>Elevate Your Collaboration <br/> With Other Developers</h1>
        <p className='max-w-xl'>Unlock the power of teamwork with Code Collab. Seamlessly share code, screens, and ideas in real-time. Revolutionize your workflow and achieve more together. Get started now, or login!</p>
        {session? (
          <Link href='/workspace' className='mt-6'>
            <Button variant='secondary' className='border hover:scale-105 hover:bg-primary transition duration-200'>Continue to workspace</Button>
          </Link>
        ): (
          <div className='flex items-center justify-center gap-3 mt-6'>
            <Link href='/sign-up'>
                <Button className='shadow-lg hover:scale-105 transition duration-200'>Get Started Now</Button>
            </Link>
            <Link href='/sign-in'>
                <Button variant='secondary' className='border shadow-lg hover:scale-105 transition duration-200'>Sign In</Button>
            </Link>
          </div>
        )}
    </section>
  )
}

export default Hero