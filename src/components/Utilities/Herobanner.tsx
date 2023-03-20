import {
    Box,
    Image,
    Flex,
    HStack,
    Text,
    Heading,
    Icon,
} from '@chakra-ui/react';
import React from 'react';
import { CustomButton } from './CustomButton';
import { FiArrowUpRight } from 'react-icons/fi';
import { FaAirFreshener } from 'react-icons/fa';

export const Herobanner = () => {
    return (
        <Box
            bg="radial-gradient(126.96% 275.84% at 90.24% 16.36%, #EFE9FC 0%, rgba(239, 233, 252, 0.165605) 30.73%, #EFE9FC 81.77%, rgba(239, 233, 252, 0) 100%)"
            py="6rem"
        >
            <Flex
                justify="center"
                align="center"
                flexDir="column"
                w="80%"
                mx="auto"
                pos="relative"
            >
                <Image
                    src="/assets/squares.png"
                    pos="absolute"
                    left="2%"
                    top="0"
                />
                <Box pos="absolute" right="7%" bottom="40%">
                    <Image src="/assets/stara.png" pos="relative" />
                    <Image
                        src="/assets/staras.png"
                        pos="absolute"
                        left="50%"
                        top="50%"
                        transform="translate(-50%,-50%)"
                    />
                </Box>
                <HStack
                    borderRadius="20px"
                    bgColor="brand.100"
                    color="white"
                    fontSize="12px"
                    fontWeight="500"
                    textTransform="uppercase"
                    h="2.5rem"
                    px="1rem"
                    mb="1rem"
                    letterSpacing="0.08em"
                >
                    <Image src="/assets/stars.png" />
                    <Text mb="0" fontFamily='"Nunito", sans-serif'>
                        UP YOUR SOFTWARE DEVELOPMENT GAME
                    </Text>
                </HStack>

                <Heading
                    fontFamily="'General Sans', sans-serif"
                    fontWeight="600"
                    color="brand.300"
                    fontSize="130px"
                    letterSpacing="-0.07em"
                    textAlign="center"
                    lineHeight="103px"
                    zIndex="2"
                >
                    We Create <br />
                    World-class
                    <br />
                    Products
                </Heading>
                <Box
                    h="47px"
                    bgColor="brand.100"
                    w="49%"
                    left="50%"
                    transform="translateX(-49%)"
                    pos="absolute"
                    top="212px"
                    zIndex="1"
                />
                <Box w="50%" mt="3rem">
                    <Text
                        fontFamily="Nunito"
                        fontSize="24px"
                        letterSpacing="-0.02em"
                        color="rgba(26, 26, 26, 0.72)"
                        textAlign="center"
                    >
                        Harmonics Technology designs thoughtful user interfaces
                        and builds inventive applications that are tailored to
                        our clients' unique requirements.
                    </Text>
                    <HStack spacing="0" gap="24px" justify="center">
                        <CustomButton
                            text="Discover Our Offers"
                            bg="brand.100"
                            icon={<FiArrowUpRight />}
                        />
                        <CustomButton text="Learn More" />
                    </HStack>
                </Box>
            </Flex>
        </Box>
    );
};
