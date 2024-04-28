import React, {useState, useEffect} from 'react'
import { CounterClockwiseClockIcon } from '@radix-ui/react-icons'
import RecentSessionCard from '../cards/recent-session-card';
import { motion } from 'framer-motion';
import NoSessions from './no-session';


async function getRecentSessions() {
  const response = await fetch('/api/session', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const data = await response.json()
  const sessions = data.sessions
  return {sessions}
}
 
const RecentSessions = () => {
  const [recentSessions, setRecentSessions] = useState([])

  useEffect(()=> {
    async function fetchData() {
      const sessions = await getRecentSessions()
      setRecentSessions(sessions)
    }
    fetchData()
  }, [])

  // console.log(recentSessions)

  const handleDeleteSession = (sessionId) => {
    setRecentSessions((prevSessions) => {
      if(Array.isArray(prevSessions.sessions)) {
        return {
          sessions: prevSessions.sessions.filter(session => session.id !== sessionId)
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

        <motion.div 
          initial={{ y: 20, opacity: 0}}
          animate={{ y: 0, opacity: 1}}
          transition={{ ease: 'easeInOut', duration: 0.5 }}
          className={ recentSessions.sessions && recentSessions.sessions.length > 0 ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12' : ''}>
          {recentSessions.sessions && recentSessions.sessions.length > 0 ? 
            recentSessions.sessions.map((session, index) => (
              <RecentSessionCard key={session.id}
              id={session.id} 
              title={session.title} 
              description={session.description} 
              status={session.online} 
              members={session.members}
              onDelete={handleDeleteSession}/>
            )) : <NoSessions/> }
        </motion.div>
    </div>
  )
}



export default RecentSessions