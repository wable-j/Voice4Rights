import React from 'react'
import './LeftSidebar.css'
import { NavLink } from 'react-router-dom'
import Globe from '../../assests/Globe.svg'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Card,
  Box,
  Text
} from '@chakra-ui/react'
import { useTranslation } from "react-i18next";


const LeftSidebar = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const {t} = useTranslation('common');
  // return (
  //   <div className='left-sidebar'>
  //     <nav className='side-nav'>
  //       <NavLink to='/Home' className='side-nav-links' activeClassName='active'>
  //         <p>Home</p>
  //       </NavLink>

  //       <div className='side-nav-div'>
  //         <div><p>PUBLIC</p></div>
  //         <NavLink to='/Questions' className='side-nav-links' activeClassname='active' >
  //           <img src={Globe} alt="Globe" />
  //           <p style={{ paddingLeft: "10px" }}>Feed</p>
  //         </NavLink>
  //         <NavLink to='/Tags' className='side-nav-links' activeClassname='active' style={{ paddingLeft: "40px" }} >
  //           <p>Tags</p>
  //         </NavLink>
  //         <NavLink to='/Users' className='side-nav-links' activeClassname='active' style={{ paddingLeft: "40px" }} >
  //           <p>Users</p>
  //         </NavLink>
  //         <NavLink to='/Ngos' className='side-nav-links' activeClassName='active' style={{ paddingLeft:"40px"}}>
  //           <p>Ngos</p>
  //         </NavLink>
  //         <NavLink to='/dashboard' className='side-nav-links' activeClassName='active' style={{ paddingLeft:"40px"}}>
  //           <p>Dashboard</p>
  //         </NavLink>
  //       </div>
  //     </nav>
  //   </div>
  // )
  return (
    <Card marginTop={'45px'} width={'200px'}>
      <Accordion allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
            <NavLink to='/Home' className='side-nav-links' activeClassName='active'>
              <Box as='span' flex='1' textAlign='left'>
                <Text>{t('app.leftsidebar.home')}</Text>
              </Box>
              </NavLink>
              
            </AccordionButton>
          </h2>
          
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left'>
                <Text>{t('app.leftsidebar.public')}</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
          <NavLink to='/Questions' className='side-nav-links' activeClassname='active' >
             <img src={Globe} alt="Globe" />
             <p style={{ paddingLeft: "10px" }}>{t('app.leftsidebar.feed')}</p>
           </NavLink>
         <NavLink to='/Tags' className='side-nav-links' activeClassname='active' style={{ paddingLeft: "40px" }} >
           <p>{t('app.leftsidebar.tag')}</p>
         </NavLink>
         <NavLink to='/Users' className='side-nav-links' activeClassname='active' style={{ paddingLeft: "40px" }} >
           <p>{t('app.leftsidebar.users')}</p>
        </NavLink>
         <NavLink to='/Ngos' className='side-nav-links' activeClassName='active' style={{ paddingLeft:"40px"}}>
            <p>{t('app.leftsidebar.ngos')}</p>
         </NavLink>
           <NavLink to='/dashboard' className='side-nav-links' activeClassName='active' style={{ paddingLeft:"40px"}}>
             <p>{t('app.leftsidebar.dashboard')}</p>
           </NavLink>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Card>
  )
}

export default LeftSidebar
