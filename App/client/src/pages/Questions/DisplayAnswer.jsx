import React from 'react'
import moment from 'moment'
import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Avatar from '../../components/Avatar/Avatar'
import {deleteAnswer} from '../../actions/question'
import {Box, Card, CardBody, CardHeader, Heading, Stack, Text} from "@chakra-ui/react";


 export const DisplayAnswer = ({ question, handleShare }) => {

    const User = useSelector((state) => (state.currentUserReducer))
    const { id } = useParams()
    const dispatch = useDispatch()
    const handleDelete = (answerId, noOfAnswers) => {
        dispatch(deleteAnswer(id, answerId, noOfAnswers - 1))
    }
    return (
      <div>
        {
        question.answer.map((ans) => (
         <Stack spacing='4'>
           <Card key={'sm'} size={'sm'}>
             <CardHeader>
                 <div style={{display: 'flex', flexDirection: 'row'}}>
                   <div>
                     <Avatar
                       width='30px'
                       height='30px'
                       name={ans.name}
                       src={ans.image}
                     />
                   </div>
                   <div style={{paddingLeft: '10px'}}>
                     <Heading size='sm'>{ans.userAnswered}</Heading>
                     <p>
                       asked {moment(ans.askedOn).fromNow()}
                     </p>
                   </div>
                 </div>
             </CardHeader>
             <CardBody>
               <Text>{ans.answerBody}</Text>
               <div>
                 <button type='button' onClick={handleShare}>Share</button>
                 {
                   User?.result?._id === ans?.userId && (
                     <button type='button' onClick={() => handleDelete(ans._id, question.noOfAnswers)}>Delete</button>
                   )
                 }
  
               </div>
             </CardBody>
           </Card>
         </Stack>
        ))
 }
      </div>
    );
    /*return (
        <div>
            {
                question.answer.map((ans) => (
                    <div className='display-ans' key={ans._id}>
                        <p>{ans.answerBody}</p>
                        <div className='question-actions-user'>
                            <div>
                                <button type='button' onClick={handleShare}>Share</button>
                                {
                                    User?.result?._id === ans?.userId && (
                                        <button type='button' onClick={() => handleDelete(ans._id, question.noOfAnswers)}>Delete</button>
                                    )
                                }
                               
                            </div>
                            <div>
                                <p>answered {moment(ans.answeredOn).fromNow()}</p>
                                <Link to={`/Users/${ans.userId}`} className='user-link' style={{ color: "#0086d8" }}>
                                    <Avatar backgroundColor="lightgreen" px='8px' py='5px'>{ans.userAnswered.charAt(0).toUpperCase()}</Avatar>
                                    <div>
                                        {ans.userAnswered}
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                ))
            }
        </div>
    )
    
     */
}

