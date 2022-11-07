import React from 'react'
import { useMediaQuery } from "@chakra-ui/media-query"
import { Box, Flex, Heading, Text } from "@chakra-ui/layout"
import { Icon } from '@chakra-ui/icon'
import { DiHtml5, DiReact, DiNodejsSmall, DiCss3 } from "react-icons/di"

const Profile = () => {
    const [isNotSmallScreen] = useMediaQuery("(min-width:600px)");
    return (
        <Flex direction={isNotSmallScreen ? "row" : "column"}
            w='100%'
            maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
        >
            <Box alignSelf='center' px="32" py="16">
                <Heading fontWeight="extrabold" color="orange.500" size="3xl">
                    1+
                </Heading>
                <Text fontSize='2xl' color="gray.400" >
                    Years Of Experience
                </Text>
            </Box>
            <Box alignSelf="center" PX="32" PY="16" >
                <Text
                    fontWeight="bold" fontSize="2xl" >
                    Developer and web app development.
                </Text>
                <Flex direction={isNotSmallScreen ? "row" : "column"} mt={8}>
                    <Flex
                        rounded="xl"
                        direction="column"
                        mt={11}
                        bg="yellow.400"
                        h="25vh"
                        w="25vh"
                        justify="flex-end"
                        ml={isNotSmallScreen ? 4 : 0}
                        _hover={{bg:"red.400"}}
                    >
                        <Icon color="white" p="4" w="24" h="24" as={DiReact} />
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                            React
                        </Text>
                    </Flex>
                    <Flex
                        rounded="xl"
                        direction="column"
                        mt={11}
                        bg="blue.400"
                        h="25vh"
                        w="25vh"
                        justify="flex-end"
                        ml={isNotSmallScreen ? 4 : 0}
                        _hover={{bg: "teal.400"}}
                    >
                        <Icon color="white" p="4" w="24" h="24" as={DiNodejsSmall} />
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                            Node.js
                        </Text>
                    </Flex>
                    <Flex
                        rounded="xl"
                        direction="column"
                        mt={11}
                        bg="purple.400"
                        h="25vh"
                        w="25vh"
                        justify="flex-end"
                        ml={isNotSmallScreen ? 4 : 0}
                        _hover={{bg: "green.400"}}
                    >
                        <Icon color="white" p="4" w="24" h="24" as={DiHtml5} />
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                            HTML
                        </Text>
                    </Flex>
                </Flex>
            </Box>
        </Flex>


    )
}

export default Profile