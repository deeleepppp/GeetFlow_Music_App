import React, { useEffect, useState } from 'react'
import { IconContext } from 'react-icons'
import APIKit from '../../spotify'
import { AiFillPlayCircle } from 'react-icons/ai'
import loaderGif from "../../assets/loader.gif";
import { useNavigate } from 'react-router-dom';
export default function Library() {
  const [playlist , setPlaylist] = useState([])
  useEffect(() => {
    APIKit.get('me/playlists').then((res)=>{
      setPlaylist(res.data.items)
     })
  }, [])

  const navigate = useNavigate()
 
  const playPlaylist = (id)=>{
      navigate("/player",{state:{id:id}})
  }
 
  return (
    
    <div className='screen-container p-[3%] flex gap-6 flex-wrap overflow-y-auto w-full h-full items-center lg:justify-start justify-center pt-7 '>
      {
        playlist.length>0?playlist.map((e,i)=>{
          return (
              <div key={e.id} onClick={()=>playPlaylist(e.id)} className=' relative playlist-card cursor-pointer  transform transition-all duration-200 ease-in-out hover:scale-[1.04] lg:h-[40%] lg:w-[15%] w-[75%] h-[40%] lg:p-[1%] lg:mb-[2%] border p-2 border-[rgba(54,69,98,0.18)] bg-custom-gradient bg-[rgb(30,42,62)] rounded-2xl'>
           <img className= 'rounded-[15px] w-full h-[22vh] mb-4 lg:mb-1' src={e.images[0].url} alt="playlists-img" />
           <p className='mb-2 truncate lg:mb-1 text-[#c4d0e3] lg:text-md font-extrabold text-[2.3vh]'> {e.name} </p>
           <p className='m-0 text-lg lg:text-sm font-normal text-[#c4d0e386]'>{e.tracks.total} Songs</p>
           <div className='playlist-fade transition-all duration-500 ease-in absolute flex items-end justify-end lg:size-16 p-[2%] right-0 bottom-0 opacity-0 bg-custom-gradient-2 h-[34%] w-full rounded-2xl'>
               <IconContext.Provider value={{size:'70px' , color: '#E99D72'}}>
               <AiFillPlayCircle/>
               </IconContext.Provider>
           </div>
            </div>
        )
        }):<div className="flex items-center justify-center trasform lg:translate-x-[60%] lg:translate-y-[0%] lg:ml-60 -translate-x-[50%] -translate-y-[50%] ml-40 mix-blend-screen">
        <img src={loaderGif} alt="Loading..." className="object-cover lg:w-80 lg:h-80 h-40 w-40" />
      </div>
  }
    </div>
  )
}
