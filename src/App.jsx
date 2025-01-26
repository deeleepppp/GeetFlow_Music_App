import React, { useState, useEffect } from "react";
import Library from "./screens/Library/Library";

import { Route, Routes } from "react-router-dom";
import Player from "./screens/Player/Player";
import Favorites from "./screens/Favorites/Favorites";
import Trending from "./screens/Trending/Trending";
import Feed from "./screens/Feed/Feed";
import Sidebar from "./components/Sidebar/Sidebar";
import Auth from "./screens/Auth/Auth";
import { setClientToken } from "./spotify";

function App() {
  const [token, setToken] = useState("");
  useEffect(() => {
    const token = window.localStorage.getItem('token')
    const hash = window.location.hash;
    window.location.hash = '';
    if(!token && hash){
      const _token = hash.split("&")[0].split("=")[1];
    window.localStorage.setItem("token", _token);
    setToken(_token);
    setClientToken(_token)
    }
    else{
      setToken(token)
     setClientToken(token)

    }
  }, []);

  return !token ? (
    <Auth />
  ) : (
    <div className="screen h-screen w-full overflow-hidden m-0 p-0 box-border lg:flex bg-[#1E2A3E]  "> 
      <div className="sidebar h-14 w-screen lg:w-[75px] lg:h-screen bg-[#E99D72] rounded lg:rounded-l-2xl">
        <Sidebar />
      </div>
      <div className="content-screen screengredient h-[calc(100%-80px)] lg:h-screen lg:w-[calc(100%-80px)] bg-[#1E2A3E] lg:rounded-r-2xl">
        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/player" element={<Player />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/trending" element={<Trending />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
