'use client'
import SignUpForm from '@/app/components/forms/signup-form'
import React from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
Button


const SignIn = () => {
  const { data: session, status } = useSession()  
  return (
    <section className='flex flex-col items-center md:items-start gap-8 border rounded-md p-8 md:p-12'>
      {session ? (
        <div className='flex flex-col items-center justify-center gap-6'>
          <h1 className='text-3xl'>You are already signed in as {session.user.username}</h1>
          <Link href='/dashboard'>
            <Button>Go to Dashboard</Button>
          </Link>
        </div>
      ) : (
        <div className='flex flex-col gap-6'>
          <h3>Create an account with <br/> Code Collab</h3>
          <SignUpForm />
        </div>
      )}
    </section>
  )
}

export default SignIn