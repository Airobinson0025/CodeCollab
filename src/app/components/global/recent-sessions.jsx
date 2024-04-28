import React, { useState, useEffect } from 'react';
import { CounterClockwiseClockIcon } from '@radix-ui/react-icons';
import RecentSessionCard from '../cards/recent-session-card';
import { motion } from 'framer-motion';
import NoSessions from './no-session';
import { CircleLoader } from 'react-spinners';
import { useSession } from 'next-auth/react';

async function getRecentSessionsByUserId() {
  const response = await fetch(`/api/session/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const data = await response.json()
  const sessions = data.sessions
  return { sessions }
}

const RecentSessions = () => {
  const [recentSessions, setRecentSessions] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchData() {
      setLoading(true) 
      try {
        const sessions = await getRecentSessionsByUserId()
        setRecentSessions(sessions)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const handleDeleteSession = (sessionId) => {
    setRecentSessions((prevSessions) => {
      if (Array.isArray(prevSessions.sessions)) {
        return {
          sessions: prevSessions.sessions.filter(session => session.id!== sessionId)
        }
      }
    })
  }

  return (
    <div>
      <div className='flex items-center gap-4'>
        <h1>Recent Collab Sessions</h1>
        <CounterClockwiseClockIcon className='h-8 w-8'/>
      </div>
      <h4 className='font-normal mt-2'>Your sessions From The Past Week</h4>

      {loading? (
        <div className='h-[300px] flex items-center justify-center text-primary'>
          <CircleLoader color='#6EB9A6' loading={loading} size={50} />
        </div> // Display a loading message when data is being fetched
      ) : (
        <motion.div 
          initial={{ y: 20, opacity: 0}}
          animate={{ y: 0, opacity: 1}}
          transition={{ ease: 'easeInOut', duration: 0.5 }}
          className={ recentSessions.sessions && recentSessions.sessions.length > 0? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12' : ''}>
          {recentSessions.sessions && recentSessions.sessions.length > 0? 
            recentSessions.sessions.map((session) => (
              <RecentSessionCard key={session.id}
              id={session.id} 
              title={session.title} 
              description={session.description} 
              status={session.online} 
              members={session.members}
              onDelete={handleDeleteSession}/>
            )) : <NoSessions/> }
        </motion.div>
      )}
    </div>
  )
}

export default RecentSessions