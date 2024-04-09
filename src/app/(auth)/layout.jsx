import React from 'react'

const layout = ({children}) => {
  return (
    <div className='flex items-center justify-center pt-64'>
        {children}
    </div>
  )
}

export default layout