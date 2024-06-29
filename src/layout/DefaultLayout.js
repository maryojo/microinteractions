import React from 'react'

const DefaultLayout = ({children}) => {
  return (
    <div className='h-screen w-screen bg-neutral-800 flex justify-center items-center'>
      {children}
    </div>
  )
}

export default DefaultLayout