import SignInForm from '@/app/components/forms/signin-form'
import React from 'react'


const SignIn = () => {
  return (
    <div className='flex flex-col items-center md:items-start gap-8 border rounded-md p-8 md:p-12 mt-16'>
      <h3>Sign in to your <br/> Code Collab account.</h3>
      <SignInForm />
    </div>
  )
}

export default SignIn