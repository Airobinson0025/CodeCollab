import React from 'react'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Dashboard = async () => {
  
  const session = await getServerSession(authOptions)
  console.log(session)
  
  
  if(session) {
    return (
      <div className='h-screen flex flex-col items-center justify-center'>
        <h1 className='text-center'>Welcome to Code Collab <br/>{session.user.username}</h1>
      </div>
    )
  } else {
    return (
      <div className='h-screen flex flex-col items-center justify-center gap-6'>
        <h1>Please Sign In to View Your Dashboard</h1>
        <Link href='/sign-in'>
          <Button>Continue to Sign In</Button>
        </Link>
      </div>
    )
  }
  
}

export default Dashboard