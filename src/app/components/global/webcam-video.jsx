import React, { useRef, useEffect } from 'react'

const WebcamVideo = ({ peerconnection }) => {
    const localVideoRef = useRef()

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
            localVideoRef.current.srcObject = stream
            stream.getTracks().forEach((track) => { 
                peerconnection.addTrack(track, stream)
            })
        })
    }, [peerconnection])

  return (
    <div>
        <video ref={localVideoRef} autoPlay muted />
    </div>
  )
}

export default WebcamVideo