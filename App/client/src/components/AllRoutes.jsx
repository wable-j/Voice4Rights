import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Auth from '../pages/Auth/Auth'
import Questions from '../pages/Questions/Questions'
import AskQuestion from '../pages/AskQuestion/AskQuestion'
import DisplayQuestions from '../pages/Questions/DisplayQuestions'
import Tags from '../pages/Tags/Tags'
import Users from '../pages/Users/Users'
import UserProfile from '../pages/UserProfile/UserProfile'
import Ngos from '../pages/Ngo/Ngos'
import NgoProfile from '../pages/NgoProfile/NgoProfile'
import Dashboard from '../pages/Dashboard/Dashboard'
import LandingPage from '../pages/LandingPage/LandingPage'
import Donation from "./Donation/Donation";

const AllRoutes = () => {
  return (
  <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/' element={<LandingPage />} />
        <Route path='/Auth' element={<Auth />} />
        <Route path='/Questions' element={<Questions />} />
        <Route path='/AskQuestion' element={<AskQuestion />} />
        <Route path='/Questions/:id' element={<DisplayQuestions />} />
        <Route path='/Tags' element={<Tags />} />
        <Route path='/Users' element={<Users />} />
        <Route path='/Ngos' element={<Ngos />} />
        <Route path='/Users/:id' element={<UserProfile />} />
        <Route path='/Ngos/:id' element={<NgoProfile />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/donation' element={<Donation />} />

  </Routes>
  )
}

export default AllRoutes
