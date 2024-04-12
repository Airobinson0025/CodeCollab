'use client'
import SignUpForm from '@/app/components/forms/signup-form'
import React from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { Button } from '@/app/components/ui/button'
Button


const SignIn = () => {
  const { data: session, status } = useSession()  
  return (
    <div className='flex flex-col gap-6 border p-8 rounded-md'>
      <h3>Create an account with <br/> Code Collab</h3>
      <SignUpForm />
    </div>
  )
}

export default SignIn