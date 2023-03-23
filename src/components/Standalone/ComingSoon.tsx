import { Box, Flex, Heading, Progress, Text, VStack } from '@chakra-ui/react';
import React from 'react';

export const ComingSoon = () => {
    return (
        <Flex
            w="full"
            h="80vh"
            bgColor="brand.100"
            color="white"
            justify="center"
            align="center"
        >
            <VStack spacing="2rem">
                <Heading
                    textAlign="center"
                    fontFamily="BR Firma"
                    fontSize="45px"
                >
                    Coming Soon!
                </Heading>
                <Box w="full">
                    <Progress
                        colorScheme="brand"
                        height="32px"
                        value={60}
                        borderRadius="60px"
                    />
                </Box>
                <Text fontSize="16px" textAlign="center">
                    Kindly check back later!
                </Text>
            </VStack>
        </Flex>
    );
};
