import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import DashboardTotal from '../../components/DashboardTotal/DashboardTotal';
import './Dashboard.css'
import Charts from '../../components/Charts/Charts';
import Navbar from '../../components/Navbar';


const Dashboard = () => {
  return (
    <div>
      <Navbar />
    <div className='home-container-1'>
      <LeftSidebar />
      <div className='home-container-2' style={{ marginTop: '30px' }}>
        <h1 style={{ fontWeight: '400' }}>Dashboard</h1>
        <div className='total-container' >
            <DashboardTotal label={'Users'} value={'50'} bgColor={'Blue'}/>
            <DashboardTotal label={'Donation'} value={'$1000'} bgColor={'Magenta'}/>
            <DashboardTotal label={'NGO'} value={'5'} bgColor={'Orange'}/>
        </div>
        <Charts/> 
      </div>
    </div>
    </div>
  );
}

export default Dashboard