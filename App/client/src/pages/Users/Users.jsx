//client/src/pages/Users.jsx

import React from 'react'
import UsersList from "./UsersList";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Flex
} from '@chakra-ui/react'

import './Users.css'
import Navbar from '../../components/Navbar';

const Users = ({ }) => {
    // return (
    //     <div className="home-container-1">
    //       <LeftSidebar />
    //       <div className="home-container-2" style={{ marginTop: "30px" }}>
    //         <h1 style={{ fontWeight: "400" }}>Users</h1>
    //         <UsersList />
    //       </div>
    //     </div>
    //   );

    return (
      <div>
        <Navbar />
      
      <div className="grid-container">
            <div className="left-column"><LeftSidebar /></div>
            <div className="main-column">
                <Card>
                    <CardHeader>
                      <Flex>
                        <Heading>Users</Heading>
                        </Flex>
                    </CardHeader>
                    <CardBody>
                    <UsersList />
                    </CardBody>
                </Card>
            </div>
            <div className="right-column"><RightSidebar /></div>
        </div>
        </div>
    )
}

export default Users