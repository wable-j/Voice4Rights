import React from 'react'
import '../../App.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'
import Navbar from '../../components/Navbar'

const Questions = () => {
  return (
    <div>
      <Navbar />

      <div className="grid-container">
        <div className="left-column"><LeftSidebar /></div>
        <div className="main-column"><HomeMainbar /></div>
        <div className="right-column"><RightSidebar /></div>
      </div>
    </div>
  )
}

export default Questions
