//client/src/pages/User.jsx
import React from 'react'
import { Link } from 'react-router-dom'

import './Users.css'
import Image from "../../components/image/Image";
import Avatar from "../../components/Avatar/Avatar";

const User = ({ user }) => {
    return (
      <Link to= {`/Users/${user._id}`} className='user-profile-link'>
      {user.image ?
        <Image src={user.image} height='auto' width='50px' alt="User Avatar" />
        : <Avatar backgroundColor='#009dff' px="10px" py="7px" borderRadius='50%' color='white' height='20px' width='15px' margin='5px'> <Link to={`/Users/${user._id}`} style={{ color: "white", textDecoration: 'none' }} >{user.name.charAt(0).toUpperCase()}</Link> </Avatar>
      }
        <h5>{ user.name }</h5>
        </Link>
    )
}

export default User
