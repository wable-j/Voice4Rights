//client/src/pages/Ngos.jsx

import React from 'react';
import NgosList from './NgosList';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import {
  Card,
  CardHeader,
  CardBody,
  Flex,
  Heading
} from '@chakra-ui/react'

import './Ngos.css';
import Navbar from '../../components/Navbar';

const Ngos = () => {
  return (
    <div>
      <Navbar />

      <div className="grid-container">
        <div className="left-column"><LeftSidebar /></div>
        <div className="main-column">
          <Card>
            <CardHeader>
              <Flex>
                <Heading>NGO List</Heading>
              </Flex>
            </CardHeader>
            <CardBody>
              <NgosList />
            </CardBody>
          </Card>
        </div>
        <div className="right-column"><RightSidebar /></div>
      </div>
    </div>
  )
};

export default Ngos;
