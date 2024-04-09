import SignUpForm from '@/app/components/forms/signup-form'
import React from 'react'


const SignIn = () => {
  return (
    <section className='flex flex-col items-center md:items-start gap-8 border rounded-md p-8 md:p-12'>
      <h3>Create an account with <br/>Code Collab.</h3>
      <SignUpForm />
    </section>
  )
}

export default SignIn