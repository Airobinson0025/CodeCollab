import React, {useState, useEffect} from 'react'
import { CounterClockwiseClockIcon } from '@radix-ui/react-icons'
import RecentSessionCard from '../cards/recent-session-card';
import { motion } from 'framer-motion';


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
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
          {recentSessions.sessions && recentSessions.sessions.map(session => (
            <RecentSessionCard 
            key={session.id}
            id={session.id} 
            title={session.title} 
            description={session.description} 
            status={session.online} 
            members={session.members} />
          ))}
        </motion.div>
    </div>
  )
}

export default RecentSessions