import { VStack, Circle, Icon, Heading, Text, HStack } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

export const ContactItem = ({ icon, title, desc, sub }) => {
    return (
        <VStack
            boxShadow="0px 20px 25px rgba(212, 212, 212, 0.35)"
            align="flex-start"
            p="2rem"
            borderRadius="10px"
            spacing={['1rem', '2rem']}
        >
            <Circle size={['5rem', '6.25rem']} bgColor="#6B2874">
                <Icon as={icon} fontSize={['40px', '50px']} color="white" />
            </Circle>
            <Heading
                fontFamily="BR Firma"
                fontSize={['20px', '2rem']}
                lineHeight="48px"
                fontWeight="600"
                color="black"
            >
                {title}
            </Heading>
            <Text
                lineHeight="30px"
                fontSize={['1rem', '20px']}
                color="black"
                w={['full', '80%']}
            >
                {desc}
            </Text>
            <HStack>
                {sub.map((x) => (
                    <Link passHref href={x.url}>
                        <Text
                            fontFamily="Metropolis"
                            fontSize={['16px', '20px']}
                            lineHeight="126%"
                            fontWeight="400"
                            color="#252525"
                            mb="0"
                        >
                            {x.num}
                        </Text>
                    </Link>
                ))}
            </HStack>
        </VStack>
    );
};
