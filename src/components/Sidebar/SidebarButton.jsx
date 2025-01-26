import React from "react";
import { IconContext } from "react-icons";
import { NavLink , useLocation } from "react-router-dom";
import clsx from "clsx";

export default function SidebarButton({ title,icon,to}) {
  const location = useLocation();
  const isActive = location.pathname===to
  
  return (
    <NavLink to={to} >
    
    <div className={clsx("btn-body lg:h-14 lg:w-14 lg:rounded-2xl h-8 hover:text-white w-fit rounded-lg text-[#F8D9C0] flex  items-center justify-center flex-col",{"text-white scale-105	bg-[#b86358] rounded-2xl":isActive,'':!isActive})}>
      <IconContext.Provider className='' value={{ size: "25px", className: "btn-icons" }}>
         {icon}
         <p className=" lg:text-xs text-xs font-[600]">{title}</p>
      </IconContext.Provider>
    </div>
    </NavLink>
  );
}
