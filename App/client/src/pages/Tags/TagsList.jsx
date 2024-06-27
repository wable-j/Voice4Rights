import React from 'react'
import './Tags.css'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Button
} from '@chakra-ui/react'

const TagsList = ({tag}) => {

  // return (
  //   <div className='tag'>
  //     <h5>{tag.tagName}</h5>
  //     <p>{tag.tagDesc}</p>
  //   </div>
  // )

return(
  <Popover>
  <PopoverTrigger>
    <Button>{tag.tagName}</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverHeader>{tag.tagName}</PopoverHeader>
    <PopoverBody>{tag.tagDesc}</PopoverBody>
  </PopoverContent>
</Popover>
)

}

export default TagsList