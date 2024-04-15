import React, { useRef, useState } from 'react'
import Webcam from 'react-webcam'
import { Button } from '../ui/button'
import { SpeakerLoudIcon, SpeakerOffIcon } from '@radix-ui/react-icons'

const UserWebcam = () => {
    const [ isCameraOn, setIsCameraOn ] = useState(true)
    const [ isAudioOn, setIsAudioOn ] = useState(true)
    const webcamRef = useRef(null)

    const toggleCamera = () => {
        setIsCameraOn((prevState) => !prevState)
    }

    const toggleAudio = () => {
        setIsAudioOn(!isAudioOn)
    }

  return (
    <div className=''>
        <div className={isCameraOn ? 'h-[500px]' : 'bg-secondary h-[500px]'}>
            { isCameraOn ? <Webcam ref={webcamRef} audio={isAudioOn} screenshotFormat='' className='rounded-md h-[500px]'/> : null }
        </div>
        <div className='flex items-center gap-2 mt-4 relative'>
            <Button onClick={toggleCamera}>{ isCameraOn ? 'Turn off camera' : 'Turn on camera' }</Button>
            <Button onClick={toggleAudio} variant='secondary'>{ isAudioOn ? <SpeakerLoudIcon /> : <SpeakerOffIcon /> }</Button>
        </div>
    </div>
  )
}

export default UserWebcam