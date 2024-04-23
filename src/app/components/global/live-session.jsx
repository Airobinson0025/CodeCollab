import React from 'react'
import ScreenShare from '@/app/components/global/screen-share'

const LiveSession = ({id, title, description, createdAt, members }) => {
    const formattedDate = new Date(createdAt).toLocaleDateString()
  return (
    <div>
        <h3>{title}</h3>
        <h4>{description}</h4>
        <h4>Members: {members}</h4>
        <p>Created On {formattedDate}</p>

        <div className='bg-secondary'>
            <ScreenShare />
        </div>
    </div>
  )
}

export default LiveSession