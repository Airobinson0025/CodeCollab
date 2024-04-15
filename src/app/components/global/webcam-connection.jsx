import React, { useEffect } from 'react'
import SimplePeer from 'simple-peer'

const WebcamConnection = () => {
    useEffect(() => {
        const peer = new SimplePeer({ initiator: true })

        peer.on('signal', data => {
            console.log('signal', JSON.stringify(data))
        })

        peer.on('connect', () => {
            console.log('CONNECTED')
           
        })

        peer.on('data', data => {
            console.log('data: ' + data)
        })

        peer.on('stream', stream => {
            console.log('GOT REMOTE STREAM')
        })

        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then((stream) => {
            peer.addStream(stream)
         })
         .catch((err) => {
             console.error('error', err)
         })

         return () => {
                peer.destroy()
         }
    }, [])

  return (
    <div>WebcamConnection</div>
  )
}

export default WebcamConnection