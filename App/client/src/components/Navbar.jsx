import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import decode from 'jwt-decode'

//import logo from '../assests/logo.png'
import search from '../assests/search-solid.svg'
import Avatar from '../components/Avatar/Avatar'
import './Navbar.css'
import { setCurrentUser } from '../actions/currentUser'
//import Image from "./image/Image";
import { Flex, Image, useColorMode, useColorModeValue } from "@chakra-ui/react";
import SearchInput from './Navbar/SearchInput'
import RightContent from './Navbar/RightContent/RightContent'

import Sitemark from './LandingPage/SitemarkIcon'

const Navbar = () => {
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { colorMode } = useColorMode();
  const bg = useColorModeValue("white", "blackAlpha.800");

  var User = useSelector((state) => (state.currentUserReducer))
  
  const handleLogout = () => {
     dispatch({type: 'LOGOUT'});
     navigate('/')
     dispatch(setCurrentUser(null))
    }
  
    useEffect(() => {
      const token = User?.token
      if(token){
        const decodedToken= decode(token)
        if(decodedToken.exp * 1000 < new Date().getTime()){
           handleLogout()
        }
      }
    dispatch(setCurrentUser( JSON.parse(localStorage.getItem('Profile'))))
  }, [User?.token, dispatch])

  // return (
  //   <nav className='main-nav' style={{position: 'relative'}}>
  //     <div className='navbar'>
  //       <Link to='/' className='nav-item nav-logo'>
  //         {/*<img src={logo} alt='Voice4Rights' />*/}
  //         <span>Voice4Rights</span>
  //       </Link>
  //       <Link to='/' className='nav-item nav-btn'>About</Link>
  //       <Link to='/' className='nav-item nav-btn'>Product</Link>
  //       <Link to='/' className='nav-item nav-btn'>NGO List</Link>
  //       <form>
  //         <input type="text" placeholder='Search...' />
  //         <img src={search} alt="search" width="18" className='search-icon' />
  //       </form>
  //       {User === null ?
  //         <Link to='/Auth' className='nav-item nav-links'>Log in</Link> :
  //         <>
  //           {User?.result.image ?
  //             <Link to={`/Users/${User?.result._id}`} >
  //               <Image src={User?.result.image} height='auto' width='50px' alt="User Avatar" Link="" />
  //             </Link>
              
  //             : <Avatar backgroundColor='#009dff' px="10px" py="7px" borderRadius='50%' color='white' height='20px' width='15px' margin='5px'> <Link to={`/Users/${User?.result._id}`} style={{ color: "white", textDecoration: 'none' }} >{User.result.name.charAt(0).toUpperCase()}</Link> </Avatar>
  //           }
  //           <button className='nav-item nav-links' onClick={handleLogout}> Log out</button>
  //         </>

  //       }


  //     </div>
  //   </nav>
  // )

  return (
    <Flex
      bg={bg}
      height="44px"
      padding="6px 12px"
      justify={{ md: "space-between" }}
    >
      <Flex
        align="center"
        width={{ base: "40px", md: "auto" }}
        mr={{ base: 0, md: 2 }}
        cursor="pointer"
        //onClick={() => onSelectMenuItem(defaultMenuItem)}
      >
        <Link to='/Home' className='nav-item nav-logo'>
        <Sitemark />
           {/* <span>LOGO</span> */}
         </Link>
        <Link to='/Home' className='nav-item nav-logo'>
           {/*<img src={logo} alt='Voice4Rights' />*/}
           <span>Voice4Rights</span>
         </Link>
        {/* <Image
          src={
            colorMode === "light"
              ? "/images/redditText.svg"
              : "/images/Reddit-Word-Dark.svg"
          }
          alt='test'
          height="46px"
          display={{ base: "none", md: "unset" }}
        /> */}
      </Flex>
      {/* {user && <Directory />} */}
      
       <SearchInput  />
       <RightContent /> 
    </Flex>
  );
}

export default Navbar
