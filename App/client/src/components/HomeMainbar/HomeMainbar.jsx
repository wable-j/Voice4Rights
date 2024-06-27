import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './HomeMainbar.css'
import QuestionsList from './QuestionsList'
import { Button, Heading, Highlight } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter, Flex } from '@chakra-ui/react'
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
import { Stack, Box, FormLabel, Input, InputGroup, InputLeftAddon, InputRightAddon, Select, Textarea } from '@chakra-ui/react';
import { useTranslation } from "react-i18next";

const HomeMainbar = () => {

  const location = useLocation()
  const user = useSelector((state) => state.currentUserReducer);
  const navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const firstField = React.useRef()

  const questionsListData = useSelector((state) => state.questionsReducer)
  const questionsList = location.pathname === '/Home' ? questionsListData.data : questionsListData.data.filter((question) => question.userId === user.result._id)
  const {t} = useTranslation('common');

  const checkAuth = () => {
    if (user === null) {
      alert("Login or Signup to join the discussion.")
      navigate('/Auth')
    } else {
      navigate('/AskQuestion')
    }
  }

  return (
    <Card>
      <Card>
        <CardHeader>
          <Flex direction={'row'}>
            <Flex>
              {
                location.pathname === '/Home' ? <Heading>
                  <Highlight
                    query='Top Posts'
                    styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}
                  >
                    {t('appbar.home.title')}
                    All Posts
                  </Highlight>
                </Heading> : <Heading>
                  <Highlight
                    query='All Posts'
                    styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}
                  >
                    {t('appbar.feed.title')}
                    All Posts
                  </Highlight>

                </Heading>
              }
            </Flex>

            <Flex paddingLeft={'525px'}>
              <Button style={{ float: 'right', justifyContent: 'right' }} colorScheme='teal' variant='outline' onClick={checkAuth}>
              {t('app.bar.button.post')}
              </Button>
              
            </Flex>
          </Flex>
          <div>
            <p style={{ marginLeft: '20px' }}>{questionsList && questionsList.length} {t('app.bar.post')}</p>
          </div>

        </CardHeader>
      </Card>
      <Card style={{ padding: '0px 20px 20px 20px' }}>
        {
          questionsList === null ?
            <h1>Loading...</h1> :
            <>

              <QuestionsList questionsList={questionsList} />

            </>

        }
      </Card>
    </Card>
  )
}

export default HomeMainbar
