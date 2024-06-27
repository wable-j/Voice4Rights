import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import QuestionsDetails from './QuestionsDetails'

const DisplayQuestions = () => {
  return (
    <div className="grid-container">
      <div className="left-column"><LeftSidebar /></div>
      <div className="main-column"><QuestionsDetails style={{ marginTop: '0px', width: '100%' }} /></div>
      <div className="right-column"><RightSidebar /></div>
    </div>
  )
}

export default DisplayQuestions
