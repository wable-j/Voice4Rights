// import React from 'react'
import React, { useState } from 'react'
import '../../App.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'
import Navbar from '../../components/Navbar';
import { BsChatSquare } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import Chatbot from "../../components/Chatbot/Chatbot";



const Home = () => {
  const [BotIsOpen, setBotIsOpen] = useState(false);
  return (
    <div>
      <Navbar />
    <div className="grid-container">
      <div className="left-column"><LeftSidebar /></div>
      <div className="main-column"><HomeMainbar /></div>
      <div className="right-column">
        <RightSidebar />
        <Chatbot />
      </div>
    </div>
    </div>
  );
}

export default Home
