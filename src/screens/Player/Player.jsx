import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Player() {
  const location = useLocation()
  console.log(location)
  return (
    <div className='player-screen'>
      <div className='left-screen'></div>
      <div className='right-screen'></div>
    </div>
  )
}
