'use client'
import React from 'react'
import { useSession } from 'next-auth/react'
import WorkspaceNavbar from '../../components/global/workspace-navbar'
import Loading from '@/app/components/global/loading'
import { useRouter } from 'next/navigation'


const Workspace = ({children}) => {
  
  const { data: session, status } = useSession()
  const router = useRouter()

  if(!session) {
    router.push('/sign-in')
  }

  return (
    <div>
      
    </div>
  )
  
}

export default Workspace