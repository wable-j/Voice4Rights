import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import moment from 'moment';
import copy from 'copy-to-clipboard';

import upvote from '../../assests/sort-up.svg';
import downvote from '../../assests/sort-down.svg';
import { DisplayAnswer } from './DisplayAnswer';
import { postAnswer, deleteQuestion, voteQuestion } from '../../actions/question';
import { Button, Link as ChakraLink, Avatar, Flex, Box, Heading, Text, IconButton, Image } from "@chakra-ui/react";
import { BiLike, BiChat, BiShare } from 'react-icons/bi';
import { BsThreeDotsVertical } from 'react-icons/bs';

import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

const QuestionsDetails = () => {
  const { id } = useParams();

  const questionsList = useSelector(state => state.questionsReducer);
  const [Answer, setAnswer] = useState('');
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const User = useSelector((state) => (state.currentUserReducer));
  const location = useLocation();
  const url = 'http://localhost:3000';

  const handlePostAns = (e, answerLength) => {
    e.preventDefault();
    if (User === null) {
      alert("Login or Signup to answer a question");
      Navigate('/Auth');
    } else {
      if (Answer === '') {
        alert("Enter an answer before submitting");
      } else {
        dispatch(postAnswer({ id, noOfAnswers: answerLength + 1, answerBody: Answer, userAnswered: User.result.name, userId: User.result._id }));
      }
    }
  };

  const handleShare = () => {
    copy(url + location.pathname);
    alert("Copied url: " + url + location.pathname);
  };

  const handleDelete = () => {
    dispatch(deleteQuestion(id, Navigate));
  };

  const handleUpVote = () => {
    dispatch(voteQuestion(id, 'upVote'));
  };

  const handleDownVote = () => {
    dispatch(voteQuestion(id, 'downVote'));
  };

  return (
    <>
    <Flex
      display={{base:  "flex",md:"flex" }}
      direction="column"
      width="100%"
    >
      <Card maxW='sm' type='elevated'>
        <CardHeader>
          <Flex spacing='4'>
            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
              <Avatar 
              maxH="sx"
              maxW="sx"
              name='Segun Adebayo' 
              src='https://bit.ly/sage-adebayo' />

              <Box>
                <Heading size='sm'>Segun Adebayo</Heading>
                <Text>Creator, Chakra UI</Text>
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
        <CardBody>
          <Text>
            With Chakra UI, I wanted to sync the speed of development with the speed
            of design. I wanted the developer to be just as excited as the designer to
            create a screen.
          </Text>
        </CardBody>
        <Image
          maxH="sm"
          maxW="sm"
          objectFit="contain"
          src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
          alt='Chakra UI'
        />

        <CardFooter
          justify='space-between'
          flexWrap='wrap'
          sx={{
            '& > button': {
              minW: '136px',
            },
          }}
        >
          <Button flex='1' variant='ghost' leftIcon={<BiLike />}>
            Like
          </Button>
          <Button flex='1' variant='ghost' leftIcon={<BiChat />}>
            Comment
          </Button>
          <Button flex='1' variant='ghost' leftIcon={<BiShare />}>
            Share
          </Button>
        </CardFooter>
      </Card>
      </Flex>
    </>
  );
};

export default QuestionsDetails;
