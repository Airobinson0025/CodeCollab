import React from 'react'

const layout = ({children}) => {
  return (
    <div className='min-h-screen flex items-center justify-center'>
        {children}
    </div>
  )
}

export default layout