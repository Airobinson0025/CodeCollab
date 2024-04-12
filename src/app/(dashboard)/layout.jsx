'use client'
import React from 'react'
import WorkspaceNavbar from '../components/global/workspace-navbar'
import { useSession } from 'next-auth/react'
import Loading from '../components/global/loading'

const Layout = ({children}) => {
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
        <main>
            {children}
        </main>
    </div>
  )
}

export default Layout