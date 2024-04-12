'use client'
import { Button } from '@/app/components/ui/button'
import Link  from 'next/link'
import React from 'react'
import { useSession } from 'next-auth/react'
import Loading from './loading'



const Hero = () => {
  const { data: session, status } = useSession()

  if(status === 'loading') {
    return null
  }

  return (
    <section className='px-8 h-[700px] flex flex-col items-start justify-center'>
        <h1>Elevate Your Collaboration <br/> With Other Developers</h1>
        <p className='max-w-xl'>Unlock the power of teamwork with Code Collab. Seamlessly share code, screens, and ideas in real-time. Revolutionize your workflow and achieve more together. Get started now!</p>
        <Link href={session ? '/workspace' : '/sign-up'} className='mt-6'>
            <Button size='lg' className='text-md hover:scale-95 transition duration-300'>
              {session ? 'Continue to workspace' : 'Get Started with Code Collab'}
            </Button>
        </Link>
    </section>
  )
}

export default Hero