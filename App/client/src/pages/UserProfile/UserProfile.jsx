import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBirthdayCake, faPen } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'

import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
//import Avatar from '../../components/Avatar/Avatar'
import EditProfileForm from './EditProfileForm'
import ProfileBio from './ProfileBio'
import './UserProfile.css'
//import Image from "../../components/image/Image";
import {
    Avatar,
    Box, Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Flex,
    Heading,
    IconButton,
    Image, Stack,
    Text, useToast,
    useColorModeValue,
} from "@chakra-ui/react";
import Navbar from '../../components/Navbar'

const UserProfile = () => {

    const { id } = useParams()
    const users = useSelector((state) => state.usersReducer)
    const currentProfile = users.filter((user) => user._id === id)[0]
    const currentUser = useSelector((state) => state.currentUserReducer)
    const [Switch, setSwitch] = useState(false)


    // return (
    //     <div className='home-container-1'>
    //         <LeftSidebar />
    //         <div className="home-container-2">
    //             <section>
    //                 <div className="user-details-container">
    //                     <div className='user-details'>
    //                         {currentProfile?.image ?
    //                           (
    //                             <Image borderRadius='2px' src={currentProfile.image} height='auto' width='100px' />
    //                           ) :
    //                             (
    //                               <Avatar backgroundColor="purple" color='white' fontSize='50px' px='40px' py='30px'>
    //                                 {currentProfile?.name.charAt(0).toUpperCase()}
    //                             </Avatar>
    //                             )}
    //                         <div className="user-name">
    //                             <h1>{currentProfile?.name}</h1>
    //                             <p><FontAwesomeIcon icon={faBirthdayCake} /> Joined {moment(currentProfile?.joinedOn).fromNow()}</p>
    //                         </div>
    //                     </div>
    //                     {
    //                         currentUser?.result._id === id && (
    //                             <button type='button' onClick={() => setSwitch(true)} className='edit-profile-btn'>
    //                                 <FontAwesomeIcon icon={faPen} /> Edit Profile
    //                             </button>
    //                         )
    //                     }
    //                 </div>
    //                 <>
    //                     {
    //                         Switch ? (
    //                             <EditProfileForm currentUser={currentUser} setSwitch={setSwitch}/>
    //                         ) : (
    //                             <ProfileBio currentProfile={currentProfile}/>
    //                         )
    //                     }
    //                 </>
    //             </section>
    //         </div>
    //     </div>
    // )
    return (
        <div>
            <Navbar />
            <div className="grid-container">
                <div className="left-column">
                    <LeftSidebar />
                </div>
                <div className="main-column">
                    <Card direction={{ base: 'column', sm: 'row' }}
                        overflow='hidden'
                        variant='outline'
                        >
                        <Stack fontSize='13px' style={{ width: '100%' }}>
                            <CardHeader paddingBottom="2px">
                                <Flex spacing='4'>
                                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>

                                        <Box>
                                            <div style={{ display: "flex", flexDirection: "row" }}>
                                                <div>
                                                    {currentProfile?.image ?
                                                        (
                                                            <Avatar width='60px' height='60px' name={currentProfile.name} src={currentProfile.image} />
                                                        ) :
                                                        (
                                                            <Avatar backgroundColor="purple" color='white' fontSize='50px' px='40px' py='30px'>
                                                                {currentProfile?.name.charAt(0).toUpperCase()}
                                                            </Avatar>
                                                        )}

                                                </div>
                                                <div style={{ paddingLeft: "10px" }}>
                                                    <Heading size='m'>{currentProfile?.name}</Heading>
                                                    <p><FontAwesomeIcon icon={faBirthdayCake} /> Joined {moment(currentProfile?.joinedOn).fromNow()}</p>
                                                </div>
                                            </div>

                                            {/*<Text>Author</Text>*/}
                                        </Box>
                                    </Flex>
                                    {
                                        currentUser?.result._id === id && (
                                            <Button
                                                height="40px"
                                                fontSize="15pt"
                                                style={{ backgroundColor: '#3182ce', color: '#FFFFFF' }}
                                                variant={"outline"}
                                                onClick={() => setSwitch(true)}

                                            >
                                                <FontAwesomeIcon icon={faPen} />
                                                Edit Profile
                                            </Button>
                                            // <button type='button' onClick={() => setSwitch(true)} className='edit-profile-btn'>
                                            //     <FontAwesomeIcon icon={faPen} /> Edit Profile
                                            // </button>
                                        )
                                    }
                                </Flex>
                            </CardHeader>
                            <CardBody py="2px">

                                <Heading size='sm'>{
                                    Switch ? (
                                        <EditProfileForm currentUser={currentUser} setSwitch={setSwitch} />
                                    ) : (
                                        <ProfileBio currentProfile={currentProfile} />
                                    )
                                }</Heading>

                            </CardBody>


                        </Stack>
                    </Card>
                </div>
                <div className="right-column"><RightSidebar /></div>
            </div>
        </div>
    )
}

export default UserProfile
