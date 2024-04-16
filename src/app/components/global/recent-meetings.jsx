import React from 'react'
import { CounterClockwiseClockIcon } from '@radix-ui/react-icons'

const RecentMeetings = () => {
  return (
    <div>
        <div className='flex items-center gap-4'>
            <h1>Recent Meetings</h1>
            <CounterClockwiseClockIcon className='h-8 w-8'/>
        </div>
        <h4 className='font-normal mt-2'>Review Your Recent Meetings</h4>
    </div>
  )
}

export default RecentMeetings