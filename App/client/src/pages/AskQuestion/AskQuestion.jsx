import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react'
import Image from "../../components/image/Image";


import { askQuestion } from '../../actions/question.js'
import './AskQuestion.css'
import Navbar from '../../components/Navbar.jsx';

const AskQuestionNew = () => {
    const [questionTitle, setQuestionTitle] = useState("");
    const [questionBody, setQuestionBody] = useState("");
    const [questionTags, setQuestionTags] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const User = useSelector((state) => (state.currentUserReducer));

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log({ questionTitle, questionBody, questionTags });
        dispatch(askQuestion({ questionTitle, questionBody, questionTags, userPosted: User.result.name }, navigate))
    }


    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            setQuestionBody(questionBody + "\n")
        }
    }

    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    return (


        <>
            <Button onClick={onOpen}>Open Modal</Button>
            <Button ml={4} ref={finalRef}>
                I'll receive focus on close
            </Button>

            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create your account</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>First name</FormLabel>
                            <Input ref={initialRef} placeholder='First name' />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Last name</FormLabel>
                            <Input placeholder='Last name' />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3}>
                            Save
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}


const AskQuestion = () => {
    const [questionTitle, setQuestionTitle] = useState("");
    const [questionBody, setQuestionBody] = useState("");
    const [questionTags, setQuestionTags] = useState("");
    const [image, setImage] = useState("")

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const User = useSelector((state) => (state.currentUserReducer));

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        debugger;
        console.log(file)
        const base64 = await convertToBase64(file)
        setImage(base64)
        console.log(base64)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        debugger;
        // console.log({ questionTitle, questionBody, questionTags });
        dispatch(askQuestion({ questionTitle, questionBody, questionTags, userPosted: User.result.name, Image: image }, navigate))
    }


    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            setQuestionBody(questionBody + "\n")
        }
    }

    return (
        <div>
            <Navbar />

            <div className='ask-question'>
                <div className='ask-ques-container'>


                    <form onSubmit={handleSubmit}>

                        <div className="ask-form-container">
                            <label htmlFor="ask-ques-title">
                                <Heading color={'blue'}>Write a Post</Heading>
                                <Heading as='h4' size='md'>Title</Heading>
                                <input type="text" id='ask-ques-title' onChange={(e) => { setQuestionTitle(e.target.value) }} placeholder='e.g. Human Rights violated in Afganistan' />
                            </label>
                            <label htmlFor="ask-ques-body">
                                <Heading as='h4' size='md'>Content</Heading>
                                <textarea name="" id="ask-ques-body" onChange={(e) => { setQuestionBody(e.target.value) }} cols="30" rows="1" onKeyDown={handleEnter} ></textarea>
                            </label>
                            <label htmlFor="ask-ques-tags">
                                <Heading as='h4' size='md'>Tags</Heading>
                                <p>Add up to 5 tags to describe your rights violation </p>
                                <input type="text" id='ask-ques-tags' onChange={(e) => { setQuestionTags(e.target.value.split(" ")) }} placeholder='e.g. (Social,Civil)' />
                            </label>

                            <div className='user-details'>
                                <label htmlFor='file-upload'>
                                    {image ? (
                                        <Image borderRadius='2px' src={image} height='auto' width='200px' alt="User Avatar" />
                                    ) : (
                                        <div></div>
                                    )}
                                </label>

                            </div>
                            <input
                                type='file'
                                label='Image'
                                name='myImage'
                                id='file-upload'
                                accept='.jpeg, .png, .jpg'
                                onChange={(e) => handleFileUpload(e)}
                            />

                            <Button colorScheme='blue' type='submit'>Submit Post</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AskQuestion;

function convertToBase64(file) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            resolve(fileReader.result)
        };
        fileReader.onerror = (error) => {
            reject(error)
        }
    })
}
