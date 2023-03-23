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
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css/animate.min.css';

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
                <Box pos="absolute" left="2%" top="0">
                    <AnimationOnScroll
                        animateIn="animate__fadeInDown"
                        delay={100}
                    >
                        <Image src="/assets/squares.png" />
                    </AnimationOnScroll>
                </Box>
                <Box pos="absolute" right="7%" bottom="40%">
                    <AnimationOnScroll
                        animateIn="animate__pulse"
                        delay={150}
                        duration={3}
                    >
                        <Image src="/assets/stara.png" pos="relative" />
                        <Image
                            src="/assets/staras.png"
                            pos="absolute"
                            left="50%"
                            top="50%"
                            transform="translate(-50%,-50%)"
                        />
                    </AnimationOnScroll>
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
                    <AnimationOnScroll animateIn="animate__fadeInUp">
                        We Create
                    </AnimationOnScroll>
                    <AnimationOnScroll
                        animateIn="animate__fadeInUp"
                        duration={2}
                    >
                        World-class
                    </AnimationOnScroll>
                    <AnimationOnScroll
                        animateIn="animate__fadeInUp"
                        duration={3}
                    >
                        Products
                    </AnimationOnScroll>
                </Heading>
                <AnimationOnScroll
                    animateIn="animate__fadeInUp"
                    duration={2}
                    style={{
                        position: 'absolute',
                        top: '212px',
                        left: '26%',
                        transform: 'translateX(-49%)',
                        width: '49%',
                    }}
                >
                    <Box
                        h="47px"
                        bgColor="brand.100"
                        // w="49%"
                        // left="50%"
                        // transform="translateX(-49%)"
                        // pos="absolute"
                        // top="212px"
                        zIndex="1"
                    />
                </AnimationOnScroll>
                <Box w="50%" mt="3rem">
                    <AnimationOnScroll
                        animateIn="animate__fadeInUp"
                        delay={100}
                    >
                        <Text
                            fontFamily="Nunito"
                            fontSize="24px"
                            letterSpacing="-0.02em"
                            color="rgba(26, 26, 26, 0.72)"
                            textAlign="center"
                        >
                            Harmonics Technology designs thoughtful user
                            interfaces and builds inventive applications that
                            are tailored to our clients' unique requirements.
                        </Text>
                    </AnimationOnScroll>
                    <HStack spacing="0" gap="24px" justify="center">
                        <CustomButton
                            text="Discover Our Offers"
                            bg="brand.100"
                            icon={
                                <Icon
                                    as={FiArrowUpRight}
                                    ml=".8rem"
                                    fontSize="1rem"
                                />
                            }
                        />
                        <CustomButton text="Learn More" />
                    </HStack>
                </Box>
            </Flex>
        </Box>
    );
};
