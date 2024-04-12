'use client'
import React from 'react'
import { useSession } from 'next-auth/react'
import WorkspaceNavbar from '../../components/global/workspace-navbar'
import Loading from '@/app/components/global/loading'


const Workspace = ({children}) => {
  
  const { data: session, status } = useSession()

  return (
    <div>
      
    </div>
  )
  
}

export default Workspace