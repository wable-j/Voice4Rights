import { Button, Flex } from "@chakra-ui/react";
import React from "react";
//import AuthModel from "../../components/Modal/Auth/AuthModel";
//import AuthButtons from "./AuthButtons";
import Icons from "./Icons";
import UserMenu from "./UserMenu";



const RightContent = () => {
  
  return (
    <>
      {/* <AuthModel /> */}
      <Flex justify="center" align="center">
        <Icons />
        {/* {user ? <Icons /> : <AuthButtons />} */}
        <UserMenu />
      </Flex>
    </>
  );
};
export default RightContent;