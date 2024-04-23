import React, { useRef, useEffect } from 'react'

const ScreenShare = () => {
    const localVideoRef = useRef()

    useEffect(() => {
        const localStream = navigator.mediaDevices.getUserMedia({ video: { mediaSource: 'screen' } })

        localStream.then(stream => {
            if(localVideoRef.current) {
                localVideoRef.current.srcObject = stream
            }
        })
    }, [])

  return (
    <div>
        <video ref={localVideoRef} autoPlay />
    </div>
    )
}

export default ScreenShare