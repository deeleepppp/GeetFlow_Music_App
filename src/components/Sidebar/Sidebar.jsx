import React, { useState,useEffect} from "react";
import SidebarButton from "./SidebarButton";
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import apiClient from "../../spotify";


export default function Sidebar() {
  const [img,setImg] = useState('https://images.unsplash.com/photo-1735236270565-983422d5a224?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8')
  useEffect(() => {
     apiClient.get('me').then((res)=>{
     setImg(res.data.images[1].url)
     })
  }, [])
 
  
  return (
    <div className="sidebar-container m-0 p-0 flex items-center lg:flex-col lg:items-center lg:gap-20 gap-16 lg:w-full lg:h-full">
      <img
        src={img}
        alt="profile"
        className="profile-img lg:w-12 lg:h-12 h-10 w-10 mt-2 ml-3 lg:ml-0 lg:mt-4 rounded-md lg:rounded-lg"
      />
      <div className="flex lg:flex-col items-center mt-3 gap-6 lg:gap-2">
        <SidebarButton title="Feed" icon={<MdSpaceDashboard />} to="/feed" />

        <SidebarButton title="Trending" icon={<FaGripfire />} to="/trending" />

        <SidebarButton title="Player" icon={<FaPlay />} to="/player" />

        <SidebarButton
          title="Favorites"
          icon={<MdFavorite />}
          to="/favorites"
        />

        <SidebarButton title="Library" icon={<IoLibrary />} to="/" />
      </div >
      <div className="opacity-0 lg:opacity-100">
      <SidebarButton title="Logout" icon={<FaSignOutAlt />} to="/logout" />
      </div>
    </div>
  );
}
