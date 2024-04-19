import React from 'react'
import { CounterClockwiseClockIcon } from '@radix-ui/react-icons'
import RecentSessionCard from '../cards/recent-session-card';

const recentSessions = [
  {
    id: '75229602',
    sessionName: 'Project Management',
    lastVisited: '2021-08-25T10:30:00',
    participants: ['Emily', 'Alex', 'Chris', 'Michael'],
    mission: 'Plan and coordinate project tasks and deadlines',
    status: 'Online'
  },
  {
    id: '75229603',
    sessionName: 'Machine Learning Algorithms',
    lastVisited: '2021-09-05T15:45:00',
    participants: ['Sarah', 'David', 'Rachel'],
    mission: 'Explore and implement various machine learning algorithms',
    status: 'Offline'
  },
  {
    id: '75229604',
    sessionName: 'Data Analysis Workshop',
    lastVisited: '2021-08-30T09:00:00',
    participants: ['Mark', 'Olivia', 'Sophia', 'William'],
    mission: 'Analyze and interpret complex datasets',
    status: 'Offline'
  },
  {
    id: '75229605',
    sessionName: 'Web Development Sprint',
    lastVisited: '2021-09-10T14:00:00',
    participants: ['Liam', 'Ella', 'Noah'],
    mission: 'Collaboratively build and deploy web applications',
    status: 'Offline'
  },
  {
    id: '75229606',
    sessionName: 'Creative Writing Circle',
    lastVisited: '2021-09-03T16:20:00',
    participants: ['Ava', 'Logan', 'Mia', 'Jacob'],
    mission: 'Share and critique creative writing pieces',
    status: 'Offline'
  }
];


const RecentSessions = () => {
  return (
    <div>
        <div className='flex items-center gap-4'>
            <h1>Recent Collab Sessions</h1>
            <CounterClockwiseClockIcon className='h-8 w-8'/>
        </div>
        <h4 className='font-normal mt-2'>Your sessions From The Past Week</h4>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
          {recentSessions.map((session, index) => (
            <div key={index}>
              <RecentSessionCard
                id={session.id}
                sessionName={session.sessionName}
                lastVisited={session.lastVisited}
                participants={session.participants.join(', ')}
                mission={session.mission}
                status={session.status} />
            </div>
          ))}
        </div>
    </div>
  )
}

export default RecentSessions