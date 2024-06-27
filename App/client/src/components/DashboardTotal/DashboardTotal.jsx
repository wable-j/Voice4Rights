import React from 'react'
import './DashboardTotal.css'

const DashboardTotal = ({label, value, bgColor}) => {
  return (
    < div className='dashboard-component' style= {{backgroundColor:bgColor}}>
        <h1 className='total'>{`Total ${label}`}</h1>
        <h3 className='count'>{value}</h3>
    </div>
  )
}

export default DashboardTotal