import { VStack, Circle, Icon, Heading, Text } from '@chakra-ui/react';
import React from 'react';

export const ContactItem = ({ icon, title, desc, sub }) => {
    return (
        <VStack
            boxShadow="0px 20px 25px rgba(212, 212, 212, 0.35)"
            align="flex-start"
            p="2rem"
            borderRadius="10px"
            spacing='2rem'
        >
            <Circle size="6.25rem" bgColor="#6B2874">
                <Icon as={icon} fontSize="50px" color="white" />
            </Circle>
            <Heading
                fontFamily="BR Firma"
                fontSize="2rem"
                lineHeight="48px"
                fontWeight="600"
                color="black"
            >
                {title}
            </Heading>
            <Text lineHeight="30px" fontSize="20px" color="black" w="80%">
                {desc}
            </Text>
            <Text
                fontFamily="Metropolis"
                fontSize="20px"
                lineHeight="126%"
                fontWeight="400"
                color="#252525"
            >
                {sub}
            </Text>
        </VStack>
    );
};
