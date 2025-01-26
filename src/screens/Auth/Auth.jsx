import React from 'react'
import { loginEndpoint } from '../../spotify'
import spotifyLogo from '../../assets/spotify.gif'

export default function Auth() {
  return (
    <div className='login-page bg-[#1f1f1f] h-screen w-screen flex items-center justify-center overflow-hidden flex-col'>
        <img className='w-[30%] mix-blend-screen' src={spotifyLogo} alt="logo-spotify" />
        <a className='no-underline' href={loginEndpoint}><div className='login-btn w-48 py-4 text-center bg-green-400 rounded-[50px] text-[#1f1f1f] font-semibold mt-[20%]'>LOG IN</div></a>
    </div>
  )
}
