import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom'
import moment from 'moment'
import copy from 'copy-to-clipboard'

import upvote from '../../assests/sort-up.svg'
import downvote from '../../assests/sort-down.svg'

import { DisplayAnswer } from './DisplayAnswer'
import { postAnswer, deleteQuestion, voteQuestion } from '../../actions/question'
import { Link as ChakraLink } from "@chakra-ui/react";
import { Skeleton } from '@chakra-ui/react'
import { BiChat, BiDownArrowCircle, BiDownvote, BiLike, BiShare, BiUpArrowCircle, BiUpvote } from "react-icons/bi";
import { FaTrash } from 'react-icons/fa';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Avatar,
  Box, Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  Heading,
  IconButton,
  Image, Stack,
  Text, useToast
} from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";


const QuestionsDetails = ({ style }) => {
  const { id } = useParams()
  const voteCounterSuffix = '-vote-counter'
  const toast = useToast()

  const copyPostLink = (e) => {
    navigator.clipboard.writeText(`${window.location.origin}${e.currentTarget.dataset.postLink}`);
    toast({
      description: "Link copied successfully!",
      status: 'success',
      duration: 2000,
      isClosable: true
    })
  }

  const questionsList = useSelector(state => state.questionsReducer)
  const [question, setQuestion] = useState("")
  const [Answer, setAnswer] = useState('')
  const Navigate = useNavigate()
  const dispatch = useDispatch()
  const User = useSelector((state) => (state.currentUserReducer))
  const location = useLocation()
  const url = 'http://localhost:3000'



  useEffect(() => {
    console.log(questionsList)
    //console.log(User.result._id)
    //console.log( User)
  }, [])

  const handlePostAns = (e, answerLength) => {
    e.preventDefault()
    debugger;
    if (User === null) {
      alert("Login or Signup to answer a question");
      Navigate('/Auth');
    } else {
      if (Answer === '') {
        alert("Enter an answer before submitting");
      } else {
        dispatch(postAnswer({ id, noOfAnswers: answerLength + 1, answerBody: Answer, userAnswered: User.result.name, userId: User.result._id }))
      }
    }
  }

  const handleShare = () => {
    copy(url + location.pathname)
    alert("Copied url: " + url + location.pathname)

  }

  const handleDelete = () => {
    dispatch(deleteQuestion(id, Navigate))
  }

  const handleUpVote = () => {
    dispatch(voteQuestion(id, 'upVote'))
  }

  const handleDownVote = () => {
    dispatch(voteQuestion(id, 'downVote'))
  }

  return (
    <div>
      {questionsList.data === null ? (
        <Stack>
          <Skeleton height='20px' />
          <Skeleton height='20px' />
          <Skeleton height='20px' />
        </Stack>
      ) : (
        <>
          {questionsList.data
            .filter((question) => question._id === id)
            .map((question) => {
              return (
                <div>
                  <Card
                    direction={{base: 'column', sm: 'row'}}
                    style={{...style, borderBottom: 'none'}}
                    overflow='hidden'
                    variant='outline'
                    onLoad={() => setQuestion(question)}
                  >
                    <div
                      maxW={{base: '100%', sm: '200px'}}
                      style={{backgroundColor: '#EDF2F7'}}
                    >
                      <IconButton
                        isRound={true}
                        variant='solid'
                        // colorScheme='teal'
                        aria-label='Done'
                        fontSize='20px'
                        icon={<BiUpArrowCircle/>}
                        data-post-id={question._id}
                        onClick={handleUpVote}
                      />
                      <Text
                        id={`${question._id}${voteCounterSuffix}`}
                        style={{justifyContent: 'center', display: 'flex'}}
                      >
                        {question.upVote.length - question.downVote.length}
                      </Text>
                      <IconButton
                        isRound={true}
                        variant='solid'
                        // colorScheme='teal'
                        aria-label='Done'
                        fontSize='20px'
                        icon={<BiDownArrowCircle/>}
                        data-post-id={question._id}
                        onClick={handleDownVote}
                      />
                    </div>
                    <Stack fontSize='13px'>
                      <CardHeader paddingBottom='2px'>
                        <Flex spacing='4'>
                          <Flex
                            flex='1'
                            gap='4'
                            alignItems='center'
                            flexWrap='wrap'
                          >
                            <Box>
                              <div style={{display: 'flex', flexDirection: 'row'}}>
                                <div>
                                  <Avatar
                                    width='30px'
                                    height='30px'
                                    name={User.result.name}
                                    src={User.result.image}
                                  />
                                </div>
                                <div style={{paddingLeft: '10px'}}>
                                  <Heading size='sm'>{User.result.name}</Heading>
                                  <p>
                                    asked {moment(question.askedOn).fromNow()}
                                  </p>
                                </div>
                              </div>
                            </Box>
                          </Flex>
                          <IconButton
                            variant='ghost'
                            colorScheme='gray'
                            aria-label='See menu'
                            icon={<BsThreeDotsVertical/>}
                          />
                        </Flex>
                      </CardHeader>
                      <CardBody py='2px'>
                        <Heading size='sm'>{question.questionTitle}</Heading>
                        <Text>{question.questionBody}</Text>
                        <div className='display-tags-time'>
                          <div className='display-tags'></div>
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
                          <Carousel.Item interval={1500}>
                            <Image
                              maxWidth='100%'
                              alignSelf='center'
                              objectFit='cover'
                              src={'https://humanrightshouse.org/wp-content/uploads/2021/02/FEV_4503-2048x1365.jpg'}
                              alt='post images'
                            />
                          </Carousel.Item>
                        </Carousel> : <div/>}
                      <CardFooter py='2px'
                                  justify='space-between'
                                  flexWrap='wrap'
                                  sx={{
                                    '& > button': {
                                      minW: '136px',
                                    },
                                  }}
                      >
            
                        <Button flex='1' variant='ghost' leftIcon={<BiShare/>}
                                data-Post-Link={`/questions/${question._id}`} onClick={handleShare}>
                          Share
                        </Button>
            
                        {User?.result?._id === question?.userId && (
                          <Button flex='1' variant='ghost' leftIcon={<FaTrash/>}
                                  data-Post-Link={`/questions/${question._id}`} onClick={handleDelete}>
                            Delete
                          </Button>
                        )}
                      </CardFooter>
                    </Stack>
                  </Card>
                  {question?.noOfAnswers !== 0 && (
                    <Card p="4" mb="4">
                      <h1>{question.noOfAnswers} Comments</h1>
                      <DisplayAnswer key={question._id} question={question} handleShare={handleShare}/>
                    </Card>
                  )}
                <Card
                  direction={{ base: 'column', sm: 'row' }}
                  style={style}
                  overflow='hidden'
                  variant='outline'
                >
      
                  <Stack fontSize='13px'>
                    <CardHeader paddingBottom='2px'>
                      <Heading>Your Answer</Heading>
        
                    </CardHeader>
                    <CardBody py='2px' style={{ display: 'flex', flexDirection: 'column' }}>
                      <form onSubmit={(e) => { debugger; handlePostAns(e, question.answer.length) }}>
                        <textarea
                          name=""
                          id=""
                          cols="100"
                          rows="10"
                          style={{ width: '100%', fontSize: '16px' }} // Set font size dynamically
                          onChange={(e) => {
                            setAnswer(e.target.value);
                          }}
                        ></textarea>
                        <br />
                        <Button
                          type="submit"
                          className="post-ans-btn"
                          variant="solid"
                          colorScheme="blue"
                          isDisabled={!Answer}
                          alignSelf="flex-end"
                        >
                          Post Your Answer
                        </Button>
                      </form>
                    </CardBody>
        
                    <CardFooter py='2px'
                                justify='space-between'
                                flexWrap='wrap'
                                sx={{
                                  '& > button': {
                                    minW: '136px',
                                  },
                                }}
                    >
                    </CardFooter>
                  </Stack>
                </Card>
                </div>
              )
            })}
        </>
      )}
    </div>
  );
}



const QuestionsDetailsOld = () => {
  const { id } = useParams()

  const questionsList = useSelector(state => state.questionsReducer)
  const [Answer, setAnswer] = useState('')
  const Navigate = useNavigate()
  const dispatch = useDispatch()
  const User = useSelector((state) => (state.currentUserReducer))
  const location = useLocation()
  const url = 'http://localhost:3000'



  const handlePostAns = (e, answerLength) => {
    e.preventDefault()
    if (User === null) {
      alert("Login or Signup to answer a question");
      Navigate('/Auth');
    } else {
      if (Answer === '') {
        alert("Enter an answer before submitting");
      } else {
        dispatch(postAnswer({ id, noOfAnswers: answerLength + 1, answerBody: Answer, userAnswered: User.result.name, userId: User.result._id }))
      }
    }
  }

  const handleShare = () => {
    copy(url + location.pathname)
    alert("Copied url: " + url + location.pathname)

  }

  const handleDelete = () => {
    dispatch(deleteQuestion(id, Navigate))
  }

  const handleUpVote = () => {
    dispatch(voteQuestion(id, 'upVote'))
  }

  const handleDownVote = () => {
    dispatch(voteQuestion(id, 'downVote'))
  }

  return (
    <div className="question-details-page">
      {questionsList.data === null ? (
        <Stack>
          <Skeleton height='20px' />
          <Skeleton height='20px' />
          <Skeleton height='20px' />
        </Stack>
      ) : (
        <>
          {questionsList.data
            .filter((question) => question._id === id)
            .map((question) => (
              <div key={question._id}>
                <Card p="4" mb="4">
                  <h1>{question.questionTitle}</h1>
                  <div className="question-details-container-2">
                    <div className="question-votes">
                      <img
                        src={upvote}
                        alt=""
                        width="18"
                        className="votes-icon"
                        onClick={handleUpVote}
                      />
                      <p>{question.upVote.length - question.downVote.length}</p>
                      <img
                        src={downvote}
                        alt=""
                        width="18"
                        className="votes-icon"
                        onClick={handleDownVote}
                      />
                    </div>
                    <div style={{ width: "100%" }}>
                      <p className="question-body">{question.questionBody}</p>
                      <div className="question-details-tags">
                        {question.questionTags.map((tag) => (
                          <p key={tag}>{tag}</p>
                        ))}
                      </div>
                      <div className="question-actions-user">
                        <div>
                          <Button variant="outline" onClick={handleShare}>
                            Share
                          </Button>
                          {User?.result?._id === question?.userId && (
                            <Button variant="outline" onClick={handleDelete}>
                              Delete
                            </Button>
                          )}
                        </div>
                        <div>
                          <p>asked {moment(question.askedOn).fromNow()}</p>
                          <ChakraLink to={`/Users/${question.userId}`} className="user-link" style={{ color: "#0086d8" }}>
                            <Avatar backgroundColor="orange" px="8px" py="5px">
                              {question.userPosted.charAt(0).toUpperCase()}
                            </Avatar>
                            <div>{question.userPosted}</div>
                          </ChakraLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
                {question.noOfAnswers !== 0 && (
                  <Card p="4" mb="4">
                    <h1>{question.noOfAnswers} Answers</h1>
                    <DisplayAnswer key={question._id} question={question} handleShare={handleShare} />
                  </Card>
                )}
                <Card p="4" mb="4" className="post-ans-container">
                  <h3>Your Answer</h3>
                  <form onSubmit={(e) => { debugger; handlePostAns(e, question.answer.length) }}>
                    <textarea name="" id="" cols="30" rows="10" onChange={e => setAnswer(e.target.value)}></textarea><br />
                    <Button type="submit" className="post-ans-btn" variant="solid">
                      Post Your Answer
                    </Button>
                  </form>
                  <p>
                    Browse other question tagged{" "}
                    {question.questionTags.map((tag) => (
                      <Link to="/Tags" key={tag} className="ans-tags">
                        {" "}
                        {tag}{" "}
                      </Link>
                    ))}{" "}
                    or
                    <Link to="/AskQuestion" style={{ textDecoration: "none", color: "#009dff" }}>
                      {" "}
                      ask your own question.
                    </Link>
                  </p>
                </Card>
              </div>
            ))}
        </>
      )}
    </div>



  )
}

export default QuestionsDetails

