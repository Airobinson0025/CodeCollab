import { CodeCollabVideo } from '@/app/(workspace)/workspace/sessions/video-player'
import React from 'react'


const LiveSessionInfo = ({id, title, description, createdAt, members }) => {
    const formattedDate = new Date(createdAt).toLocaleDateString()
  return (
    <div>
        <h3>{title}</h3>
        <h4>{description}</h4>
        <div className='mt-8'>
            <CodeCollabVideo sessionId={id}/>
        </div>
    </div>
  )
}

export default LiveSessionInfo