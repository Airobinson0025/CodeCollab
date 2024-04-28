import { CollaboratorVideo } from '@/app/(workspace)/workspace/sessions/video-stream'
import React from 'react'
import { Button } from '../ui/button'


const LiveSessionInfo = ({id, title, description, createdAt, members }) => {
    const formattedDate = new Date(createdAt).toLocaleDateString()
  return (
    <div>
        <div className='flex items-center justify-between'>
           <div>
              <h3>{title}</h3>
              <h4>{description}</h4> 
           </div>
           <div>
              <Button className='text-md'>Invite</Button>
           </div>
        </div>
        <div className='mt-8'>
            <CollaboratorVideo sessionId={id}/>
        </div>
    </div>
  )
}

export default LiveSessionInfo