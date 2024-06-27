import './RightSidebar.css'
import comment from '../../assests/comment-alt-solid.svg'
import blacklogo from '../../assests/blacklogo.svg'
import pen from '../../assests/pen-solid.svg'
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
    Box,
    Button,
    Flex,
    Icon,
    Image,
    Skeleton,
    SkeletonCircle,
    Stack,
    Text,
    useColorModeValue,
    Link
} from "@chakra-ui/react";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
} from '@chakra-ui/react'
import AddIcon from '@mui/icons-material/Add';
import { FormLabel, Input, InputGroup, InputLeftAddon, InputRightAddon, Select, Textarea } from '@chakra-ui/react';

import { setCurrentUser } from "../../actions/currentUser";
import { BiLogoReddit } from "react-icons/bi";
import { subscribeUnsubscribeToNgo } from "../../actions/ngos";
import { useTranslation } from "react-i18next";
import Donation from "../Donation/Donation";

const WidgetNew = () => {

    const [expanded, setExpanded] = React.useState(false);




    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className='widget'>
            <h4>Top NGO</h4>
            <div className='right-sidebar-div-1'>
                <div className='right-sidebar-div-2'>
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                General settings
                            </Typography>
                            <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                                Aliquam eget maximus est, id dignissim quam.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                        >
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>Users</Typography>
                            <Typography sx={{ color: 'text.secondary' }}>
                                You are currently not an owner
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                                varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                                laoreet.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3bh-content"
                            id="panel3bh-header"
                        >
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                Advanced settings
                            </Typography>
                            <Typography sx={{ color: 'text.secondary' }}>
                                Filtering has been entirely disabled for whole web server
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                                amet egestas eros, vitae egestas augue. Duis vel est augue.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                        >
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>Personal data</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                                amet egestas eros, vitae egestas augue. Duis vel est augue.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
            <h4>NGO Feeds</h4>
            <div className='right-sidebar-div-1'>
                <div className='right-sidebar-div-2'>
                    <img src={comment} alt="pen" width='18' />
                    <p>Final Review of Intervention Protocols - Release Edition...</p>
                </div>
                <div className='right-sidebar-div-2'>
                    <img src={comment} alt="pen" width='18' />
                    <p>Introducing New Human Rights Defenders: #958 - Advocate2 #959 - GuardianG</p>
                </div>
                <div className='right-sidebar-div-2'>
                    <img src={blacklogo} alt="pen" width='18' />
                    <p>Archive Update: Prevailing Resolution is now retired from the Forum</p>
                </div>
            </div>
            <h4>Hot Feed Posts</h4>
            <div className='right-sidebar-div-1'>
                <div className='right-sidebar-div-2'>
                    <p>38</p>
                    <p>Clarification on Moderation: Dismissal of Irrelevant Content Report, yet Inquiry Tagged as Irrelevant</p>
                </div>
                <div className='right-sidebar-div-2'>
                    <p>20</p>
                    <p>Guidance Requested: Appropriate Measures for Influential Members to...</p>
                </div>
                <div className='right-sidebar-div-2'>
                    <p>14</p>
                    <p>Utility of Guideline Links: Is Redirecting to 'Formulating Queries' Section Constructive Feedback?</p>
                </div>
            </div>
        </div>
    )
}


const Widget = () => {
    const dispatch = useDispatch()
    const User = useSelector((state) => state.currentUserReducer)
    const ngos = useSelector((state) => {
        return state.ngosReducer
    });
    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef()

    useEffect(() => {
        console.log(ngos)
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    }, [dispatch])

    const subscribeNGO = (e) => {
        //debugger;
        dispatch(subscribeUnsubscribeToNgo(e.currentTarget.dataset.ngoId, e.currentTarget.dataset.userId, { action: 'SUBSCRIBE' }));
        window.location.reload();
    };

    const bg = useColorModeValue("white", "#1A202C");
    const borderColor = useColorModeValue("gray.300", "#2D3748");

  const {t} = useTranslation('common');
    return (
        <Flex

            direction="column"
            bg={bg}
            borderRadius={4}
            cursor="pointer"
            border="1px solid"
            borderColor={borderColor}
        >
            <Flex
                align="flex-end"
                color="white"
                p="6px 10px"
                bg="blue.500"
                height="70px"
                borderRadius="4px 4px 0px 0px"
                fontWeight={600}
                bgImage="url(/images/recCommsArt.png)"
                backgroundSize="cover"
                bgGradient="linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75)),
        url('images/xw6wqhhjubh31.webp')"
            >
                <h3>{t('app.rightsidebar.topngos')}</h3>
            </Flex>
            <Flex direction="column">
                {(
                    <>
                        {ngos.map((item, index) => {
                            const isJoined = User ? item.user.some((u) => u._id === User.result._id) : false;
                            return (
                                <Flex
                                    position="relative"
                                    align="center"
                                    fontSize="10pt"
                                    borderBottom="1px solid"
                                    borderColor={borderColor}
                                    p="10px 12px"
                                    fontWeight={600}
                                >
                                    <Flex width="80%" align="center">
                                        <Flex width="15%">
                                            <Text mr={2}>{index + 1}</Text>
                                        </Flex>
                                        <Link key={item._id} href={`/Ngos/${item._id}`} style={{ width: 'inherit' }}>
                                            <Flex align="center" width="80%">
                                                {item.image ? (
                                                    <Image
                                                        borderRadius="full"
                                                        boxSize="28px"
                                                        src={item.image}
                                                        mr={2}
                                                    />
                                                ) : (
                                                    <Icon
                                                        as={<BiLogoReddit />}
                                                        fontSize={30}
                                                        color="brand.100"
                                                        mr={2}
                                                    />
                                                )}
                                                <span
                                                    style={{
                                                        whiteSpace: "nowrap",
                                                        overflow: "hidden",
                                                        textOverflow: "ellipsis",
                                                    }}
                                                >{`r/${item.Name}`}</span>
                                            </Flex>
                                        </Link>
                                    </Flex>
                                    <Box position="relative">
                                        <Button
                                            height="22px"
                                            fontSize="8pt"
                                            variant='solid'
                                            colorScheme='green'
                                            backgroundColor={'green'}
                                            onClick={onOpen}>
                                            Donate
                                        </Button>
                                        <Drawer
                                            isOpen={isOpen}
                                            placement='right'
                                            initialFocusRef={firstField}
                                            onClose={onClose}
                                        >
                                            <DrawerOverlay />
                                            <DrawerContent>
                                                <DrawerCloseButton />
                                                <DrawerHeader borderBottomWidth='1px'>
                                                    Enter Donation Details
                                                </DrawerHeader>

                                                <DrawerBody>
                                                    <Stack spacing='24px'>
                                                        <Box>
                                                            <FormLabel htmlFor='username'>Name</FormLabel>
                                                            <Input
                                                                ref={firstField}
                                                                id='username'
                                                                placeholder='Please enter name for donation'
                                                            />
                                                        </Box>

                                                        <Box>
                                                            <FormLabel htmlFor='owner'>Donating to</FormLabel>
                                                            <Text id='owner' size={'xl'}>{item.Name}</Text>
                                                        </Box>

                                                        <Box>
                                                            <FormLabel htmlFor='desc'>Description</FormLabel>
                                                            <Textarea id='desc' />
                                                        </Box>
                                                    </Stack>
                                                </DrawerBody>

                                                <DrawerFooter borderTopWidth='1px'>
                                                    <Button variant='outline' mr={3} onClick={onClose}>
                                                        Cancel
                                                    </Button>
                                                    <Button colorScheme='blue'>
                                                        <a href="https://buy.stripe.com/test_eVafZX8TW5nsbYs6oq"
                                                           className="donate-button"
                                                           target="_blank"
                                                           rel="nofollow noopener">
                                                        Donate Now
                                                        </a>
                                                    </Button>
                                                </DrawerFooter>
                                            </DrawerContent>
                                        </Drawer>
                                    </Box>
                                    <Box position="relative" marginLeft={'5px'}>
                                        <Button
                                            height="22px"
                                            fontSize="8pt"
                                            style={{ backgroundColor: '#3182ce', color: '#FFFFFF' }}
                                            variant={isJoined ? "outline" : "solid"}
                                            onClick={subscribeNGO}
                                            data-user-id={User ? User.result._id : null}
                                            data-ngo-id={item._id}
                                            disabled={isJoined ? "true": "false"}
                                        >
                                            {isJoined ? "Joined" : "Join"}
                                        </Button>
                                    </Box>
                                </Flex>
                            );
                        })}

                    </>
                )}
            </Flex>
        </Flex>
    );
}




export default Widget
