import { Flex, Box, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import parse from 'html-react-parser';

interface AboutItemProps {
    img: string;
    head?: string;
    text: string;
    dir?: string;
}

export const AboutItem = ({ img, head, text, dir }: AboutItemProps) => {
    return (
        <Flex justify="space-between" gap="3rem">
            <Box
                w={dir ? 'full' : '45%'}
                h="auto"
                ml={dir == 'ltr' ? 'auto' : '0'}
                order={dir == 'ltr' ? 1 : 0}
            >
                <Image w="full" h="auto" src={img} />
            </Box>
            <Box w={dir ? 'full' : '55%'} order={dir == 'ltr' ? 0 : 1}>
                {head && (
                    <Heading
                        fontSize="40px"
                        lineHeight="52px"
                        letterSpacing="-0.04em"
                        color="#252525"
                        mb="1.5rem"
                    >
                        {head}
                    </Heading>
                )}
                <Text fontSize="20px" lineHeight="30px" color="#252525">
                    {parse(text)}
                </Text>
            </Box>
        </Flex>
    );
};