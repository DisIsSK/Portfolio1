import React from 'react'
import { Button } from '@chakra-ui/button'
import { useColorMode } from '@chakra-ui/color-mode'
import { Image } from '@chakra-ui/image'
import { Circle, Stack, Flex, Box, Text } from '@chakra-ui/layout'
import Skimage from '../Components/Skimage.jpg'
import { useMediaQuery } from "@chakra-ui/media-query"
const Header = () => {

    const { colorMode } = useColorMode()
    const isDark = colorMode === "dark";

    const [isNotSmallScreen] = useMediaQuery("(min-width:600px)")
    return (
        <Stack>
            (isNotSmallScreen &&{
                <Circle
                    position="absolute"
                    bg="blue.100"
                    opacity="0.1"
                    w="300px"
                    h="300px"
                    alignSelf="flex-end"
                />
            })
            <Flex direction={isNotSmallScreen ? "row" : "column"}
                spacing="200px"
                p={isNotSmallScreen ? "32" : 0}
                alignSelf="flex-start"
            >

                <Box
                    mt={isNotSmallScreen ? 0 : 16} alignSelf="flex-start">
                    <Text fontSize="4xl" fontWeight="semibold">Hi,I am</Text>
                    <Text fontSize="6xl"
                        fontWeight="bold"
                        bgGradient="linear(to-r,orange.400,red.500,purple.600)"
                        bgClip="text"
                    >
                        Sanjai Kumar S
                    </Text>
                    <Text
                        color={isDark ? "gray.200" : "gray.500"}>
                        Full Stack Developer, Freelancer
                    </Text>
                    <Button mt={11} colorScheme="orange">Hire Me</Button>

                </Box >
                <Image
                    mt={isNotSmallScreen ? "0" : "12"}
                    mb={isNotSmallScreen ? "0" : "12"}
                    alignSelf="center"
                    borderRadius="full"
                    backgroundColor="transparent"
                    boxShadow="lg"
                    boxSize="300px"
                    zIndex={1}
                    src={Skimage}

                />
            </Flex>

        </Stack>


    )
}

export default Header