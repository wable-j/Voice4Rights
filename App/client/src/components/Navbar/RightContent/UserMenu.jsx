import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Switch,
  Text,
  useColorMode,
  Avatar
} from "@chakra-ui/react";
//import { signOut, User } from "firebase/auth";
import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { CgProfile } from "react-icons/cg";
import { FaBold, FaRedditSquare } from "react-icons/fa";
import { MdOutlineLogin } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { setCurrentUser } from "../../../actions/currentUser";

//import { useRouter } from "next/router";
import { IoSparkles } from "react-icons/io5";
import { useSetRecoilState } from "recoil";
//import { authModelState } from "../../atoms/authModalAtom";
//import { auth } from "../../firebase/clientApp";



const UserMenu = ({ user }) => {
  const User = useSelector((state) => (state.currentUserReducer));
  console.log(User)
  const dispatch = useDispatch()
  const navigate = useNavigate()
//   const router = useRouter();
const router = ''
  const setAuthModalState = ''//useSetRecoilState(authModelState);
  const { colorMode, toggleColorMode } = useColorMode();
  const {signOut,auth} = ''

  const handelNavigatePage = () => {
    if (user) {
      router.push({
        pathname: `/profile/${user?.uid}`,
        query: {
          uid: user?.uid.toString(),
        },
      });
    }
  };

  const handleLogout = () => {
    dispatch({type: 'LOGOUT'});
    navigate('/')
    dispatch(setCurrentUser(null))
   }

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <Menu>
      <MenuButton
        cursor="pointer"
        padding="0px 6px"
        borderRadius={4}
        _hover={{ outline: "1px solid", outlineColor: "gray.200" }}
      >
        <Flex align="center">
          <Flex align="center">
            {User ? (
              <>
                <Avatar width='40px' height='40px' name={User?.result?.name} src={User?.result?.image} />
                  
                <Flex
                  display={{ base: "none", lg: "flex" }}
                  flexDirection="column"
                  fontSize="8pt"
                  alignItems="flex-start"
                  mr={8}
                >
                  
                  <Flex alignItems="center">
                    <Text fontSize="10pt" color="black.400" style={{marginTop:'25px',marginLeft:'10px'}}><h5>{User?.result?.name}</h5></Text>
                  </Flex>
                </Flex>
              </>
            ) : (
              <Icon fontSize={24} color="gray.400" as={VscAccount} />
            )}
          </Flex>
          <ChevronDownIcon />
        </Flex>
      </MenuButton>
      <MenuList mt={2}>
        <MenuItem fontSize="10pt" fontWeight="700" closeOnSelect={false}>
          <Flex gap={2} align="center">
            <Switch
              isChecked={colorMode === "dark" ? true : false}
              onChange={toggleColorMode}
            />
            <Text>Dark Mode</Text>
          </Flex>
        </MenuItem>
        {User ? (
          <>
            <MenuDivider />
            <MenuItem
              fontSize="10px"
              fontWeight={700}
              _hover={{ bg: "blue.500", color: "white" }}
            >
              <Flex align="center" onClick={handelNavigatePage}>
                <Icon fontSize={20} mr={2} as={CgProfile} />
                Profile
              </Flex>
            </MenuItem>
            <MenuDivider />
            <MenuItem
              fontSize="10px"
              fontWeight={700}
              _hover={{ bg: "blue.500", color: "white" }}
              onClick={handleLogout}
            >
              <Flex align="center">
                <Icon fontSize={20} mr={2} as={MdOutlineLogin} />
                Log Out
              </Flex>
            </MenuItem>
          </>
        ) : (
          <>
            <MenuItem
              fontSize="10px"
              fontWeight={700}
              _hover={{ bg: "blue.500", color: "white" }}
              onClick={() => navigate('/Auth')}
            >
              <Flex align="center">
                <Icon fontSize={20} mr={2} as={MdOutlineLogin} />
                Log In / Sign Up
              </Flex>
            </MenuItem>
          </>
        )}
      </MenuList>
    </Menu>
  );
};
export default UserMenu;