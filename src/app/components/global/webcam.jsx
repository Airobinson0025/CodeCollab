import React from 'react'

const Webcam = ({ stream }) => {
  return (
    
        <video autoPlay={true} width='500' height='500' srcObject={stream} />
    
  )
}

export default Webcam