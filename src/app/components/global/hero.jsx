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
        <p className='max-w-xl'>Unlock the power of teamwork with Code Collab. Seamlessly share code, screens, and ideas in real-time. Revolutionize your workflow and achieve more together. Get started now, or login!</p>
        <div className='flex items-center gap-3'>
        <Link href='/sign-up' className='mt-6'>
            <Button size='lg' variant='primary' className='border text-md hover:scale-105 shadow-md hover:bg-primary hover:text-secondary dark:hover:text-white transition duration-300'>
              Get Started
            </Button>
        </Link>
        <Link href={session ? '/workspace' : 'sign-in'} className='mt-6'>
            <Button size='lg' variant='' className='text-md hover:scale-105 hover:dark:text-white transition duration-300'>
              Sign In
            </Button>
        </Link>
        </div>
    </section>
  )
}

export default Hero