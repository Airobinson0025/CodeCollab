'use client'
import React, { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import UserWebcam from '@/app/components/global/user-webcam'
import WebcamConnection from '@/app/components/global/webcam-connection'
import WorkspaceHero from '@/app/components/global/workspace-hero'
import Loading from '@/app/components/global/loading'
import { useRouter } from 'next/navigation'
import RecentMeetings from '@/app/components/global/recent-meetings'




const WorkspaceHome = () => {
    const { data: session, status } = useSession()
    const [ formattedDate, setFormattedDate ] = useState('')

    const router = useRouter()

    if(!session) {
        router.push('/sign-in')
    }

    const userName = session.user?.username
    const capitalizedUsername = userName.charAt(0).toUpperCase() + userName.slice(1)
    
    useEffect(() => {
      const updateTime = () => {
        const now = new Date()
        const options = {
          weekday: 'long',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        
        }
        const newFormattedDate = now.toLocaleDateString('en-US', options)
      setFormattedDate(newFormattedDate)
      }
      

      updateTime()

      const intervalId = setInterval(updateTime, 60000)

      return () => {
        clearInterval(intervalId)
      }
    
    }, [])




  return (
    <div>
        <div className='flex flex-col gap-2'>
            <h3 className='pt-36'>{capitalizedUsername}&apos;s Workspace</h3>
            <h4>{formattedDate}</h4>
        </div>
           <WorkspaceHero />
           <RecentMeetings />
        
    </div>
  )
}

export default WorkspaceHome