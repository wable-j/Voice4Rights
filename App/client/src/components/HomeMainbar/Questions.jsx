import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import moment from "moment";
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
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiChat, BiDownArrowCircle, BiDownvote, BiLike, BiShare, BiUpArrowCircle, BiUpvote } from "react-icons/bi";
import decode from "jwt-decode";
import { setCurrentUser } from "../../actions/currentUser";
import { useDispatch } from "react-redux";
import { getUser } from "../../actions/users";
import { voteQuestion } from "../../actions/question";
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from "react-i18next";


const Questions = ({ question }) => {
  const voteCounterSuffix = '-vote-counter'
  const voteIconBg = useColorModeValue("gray.400", "#CBD5E0");
  const [tempUser, setTempUser] = useState(false);
  const dispatch = useDispatch()
  const toast = useToast()
  const getUsers = async () => {
    //console.log(question.userId)
    console.log('------')
    console.log(question)
    const userData = await getUser(question.userId);
    
    console.log(userData);
    setTempUser(userData);
  };

  const copyPostLink = (e) => {
    navigator.clipboard.writeText(`${window.location.origin}${e.currentTarget.dataset.postLink}`);
    toast({
      description: "Link copied successfully!",
      status: 'success',
      duration: 2000,
      isClosable: true
    })
  }

  const handleUpVote = (e) => {
    const postId = e.currentTarget.dataset.postId;
    dispatch(voteQuestion(postId, 'upVote'))
    const voteCounter = document.getElementById(postId + voteCounterSuffix);
    const votes = Number(voteCounter.innerText);
    voteCounter.innerText = votes + 1;
  }

  const handleDownVote = (e) => {
    const postId = e.currentTarget.dataset.postId;
    dispatch(voteQuestion(postId, 'downVote'))
    const voteCounter = document.getElementById(postId + voteCounterSuffix);
    const votes = Number(voteCounter.innerText);
    voteCounter.innerText = votes - 1;
  }

  useEffect(() => {
    getUsers();
  }, [])

  const {t} = useTranslation('common');

  return (
    
    <Card direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
      style={{marginTop:'20px'}}>
      <div maxW={{ base: '100%', sm: '200px' }} style={{ backgroundColor: '#EDF2F7' }}>
      {/* <Icon
          as={
            userVoteValue === 1 ? IoArrowUpCircleSharp : IoArrowUpCircleOutline
          }
          color={userVoteValue === 1 ? "brand.100" : voteIconBg}
          fontSize={20}
          onClick={handleUpVote}
          cursor="pointer"
        /> */}
        <IconButton
          isRound={true}
          variant='solid'
          // colorScheme='teal'
          aria-label='Done'
          fontSize='20px'
          style={{backgroundColor: 'transparent', color: 'black'}}
          icon={<BiUpArrowCircle />}
          data-post-id={question._id}
          onClick={handleUpVote}
        />
        <Text id={`${question._id}${voteCounterSuffix}`} style={{ justifyContent: 'center', display: 'flex' }} color={voteIconBg}>{question.upVote.length - question.downVote.length}</Text>
        <IconButton
          isRound={true}
          variant='solid'
          // colorScheme='teal'
          aria-label='Done'
          fontSize='20px'
          style={{backgroundColor: 'transparent', color: 'black'}}
          icon={<BiDownArrowCircle />}
          data-post-id={question._id}
          onClick={handleDownVote}
        />
      </div>
      <Stack fontSize='13px' style={{width: '100%'}}>
        <CardHeader paddingBottom="2px">
          <Flex spacing='4'>
            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>

              <Box>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div>
                    <Avatar width='40px' height='40px' name={tempUser.name} src={tempUser.image} />
                  </div>
                  <div style={{ paddingLeft: "10px" }}>
                    <Heading size='sm'>{tempUser.name}</Heading>
                    <p>posted {moment(question.askedOn).fromNow()}</p>
                  </div>
                </div>

                {/*<Text>Author</Text>*/}
              </Box>
            </Flex>
            <IconButton
              variant='ghost'
              colorScheme='gray'
              aria-label='See menu'
              icon={<BsThreeDotsVertical />}
            />
          </Flex>
        </CardHeader>
        <CardBody py="2px">

          <Heading size='sm'>{question.questionTitle}</Heading>
          <Text>{question.questionBody}</Text>

          <div className='display-tags-time' >
            <div className='display-tags'>
              {
                question.questionTags.map((tag) => (
                  <p key={tag}>{tag}</p>
                ))
              }
            </div>
          </div>
        </CardBody>
  
        {question.Image ?
          <Carousel maxWidth='100%'>
            <Carousel.Item interval={1500}>
              <Image
                maxWidth='100%'
                alignSelf='center'
                objectFit='cover'
                src={question.Image || ''}
                alt='post images'
              />
              {/*<Carousel.Caption>*/}
              {/*  <h3>Label for first slide</h3>*/}
              {/*  <p>Sample Text for Image One</p>*/}
              {/*</Carousel.Caption>*/}
            </Carousel.Item>
          </Carousel> : <div/>}

        <CardFooter py='2px'
          justify='space-between'
          flexWrap='nowrap'
          sx={{
            '& > button': {
              minW: '136px',
            },
          }}
        >
          <Link to={`/Questions/${question._id}`} className=''>
            <Button flex='1' variant='ghost' leftIcon={<BiChat />} >
            {t('app.leftsidebar.comment')}({question.noOfAnswers})
            </Button>
          </Link>
          <Button flex='1' variant='ghost' leftIcon={<BiShare />} data-Post-Link={`/questions/${question._id}`} onClick={copyPostLink}>
          {t('app.leftsidebar.share')}
          </Button>
        </CardFooter>
      </Stack>
    </Card>
        
  );
}
const QuestionsOld = ({ question }) => {
  return (
    <div className='display-question-container'>
      <div className='display-votes-ans'>
        <p>{question.upVote.length - question.downVote.length}</p>
        <p>votes</p>
      </div>

      <div className='display-votes-ans'>
        <p>{question.noOfAnswers}</p>
        <p>answers</p>
      </div>

      <div className='display-question-details'>
        <Link to={`/Questions/${question._id}`} className='question-title'>{question.questionTitle}</Link>
        <div className='display-tags-time'>
          <div className='display-tags'>
            {
              question.questionTags.map((tag) => (
                <p key={tag}>{tag}</p>
              ))
            }
          </div>

          <p className='display-time'>
            asked {moment(question.askedOn).fromNow()} {question.userPosted}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Questions
