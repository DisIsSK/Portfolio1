import React from 'react'
import { IconButton } from '@chakra-ui/button'
import { VStack, Flex, Heading, Spacer } from "@chakra-ui/layout"
import { useColorMode } from "@chakra-ui/color-mode"
import {
  FaSun,
  FaMoon,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaGithub,
} from "react-icons/fa"
import Header from './Components/Header'
import Social from './Components/Social'
import Profile from './Components/Profile'
const App = () => {

  const { colorMode, toggleColorMode } = useColorMode();

  const isDark = colorMode === "dark";
  return (
    <VStack p="5">
      <Flex w="100%">
        <Heading ml="8" fontWeight="semibold" color="orange.400" >
          SANJAI KUMAR
        </Heading>
        <Spacer />
        <IconButton
          icon={<FaLinkedin />}
          isRound="true"
          onClick={() =>
            window.open("https://www.linkedin.com/login")} />
        <IconButton
          ml={2}
          icon={<FaInstagram />}
          isRound="true"
          onClick={() =>
            window.open("https://www.instagram.com/")} />
        <IconButton
          ml={2}
          icon={<FaFacebook />}
          isRound="true"
          onClick={() =>
            window.open("https://www.facebook.com/")} />
        <IconButton
          ml={2}
          icon={<FaGithub />}
          isRound="true"
          onClick={() =>
            window.open("https://github.com/login")} />
        <IconButton
          ml={8}
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound="true"
          onClick={toggleColorMode} />
      </Flex>
      <Header />
      <Social />
      <Profile />
    </VStack>
  )
}

export default App