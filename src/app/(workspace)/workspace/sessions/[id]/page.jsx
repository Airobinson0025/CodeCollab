'use client'
import { useParams } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import LiveSessionInfo from '@/app/components/global/live-session'


const OnlineSession = () => {
  const [ onlineSession, setOnlineSession ] = useState()
  const { id } = useParams()

  useEffect(() => {
    try {
      const getOnlineSessionById = async () => {
        const response = await fetch(`/api/session/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const data = await response.json()
        const session = data.session
        setOnlineSession(session)
      }
      getOnlineSessionById()

    } catch (error) {
      console.error('Error fetching session', error)
    }
  }, [id])

  // console.log('onlineSession', onlineSession)


  return (
    <div className='pt-36'>
        {onlineSession ? (
          <LiveSessionInfo
            id={onlineSession.id}
            title={onlineSession.title}
            description={onlineSession.description}
            members={onlineSession.members.map(member => member.user.username)}
            createdAt={onlineSession.createdAt}
            updatedAt={onlineSession.updatedAt}
          />
          
        ) : (
          null
        )}
    </div>
  )
}

export default OnlineSession