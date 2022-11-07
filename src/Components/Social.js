import React from 'react'
import { Icon } from "@chakra-ui/icon"
import { HStack } from '@chakra-ui/layout'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'

const Social = () => {
    return (
        <HStack spacing={26}>
            <Icon as={FaFacebookF} boxSize={10} />
            <Icon as={FaInstagram} boxSize={10} />
        </HStack>
    )
}

export default Social