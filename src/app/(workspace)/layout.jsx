'use client'
import React from 'react'
import WorkspaceNavbar from '../components/global/workspace-navbar'
import { useSession } from 'next-auth/react'
import Loading from '../components/global/loading'

const WorkspaceLayout = ({children}) => {
    const { data: session, status } = useSession()

    if(status === 'loading') {
        return (
            <div>
                <Loading />
            </div>
        )
    }
  return (
    <div>
        <WorkspaceNavbar />
        <div className='mx-8'>
            {children}
        </div>
    </div>
  )
}

export default WorkspaceLayout