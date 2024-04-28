import { CollaboratorVideo } from '@/app/(workspace)/workspace/sessions/video-stream'
import React from 'react'
import { Button } from '../ui/button'


const CurrentSession = ({id, title, description, createdAt}) => {
    const formattedDate = new Date(createdAt).toLocaleDateString()
  return (
    <div>
        <h3>{title}</h3>
        <h4>{description}</h4>
        <div className='mt-8'>
            {/* <CollaboratorVideo sessionId={id}/> */}
        </div>
    </div>
  )
}

export default CurrentSession