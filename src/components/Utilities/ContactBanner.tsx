import {
    Flex,
    Heading,
    VStack,
    Text,
    Circle,
    Image,
    Box,
} from '@chakra-ui/react';
import React from 'react';
import { CustomButton } from './CustomButton';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export const ContactBanner = ({ heading, sub, btn, img }) => {
    return (
        <Box bgColor="brand.500" py="2.2rem">
            <Flex align="center" justify="space-between" w="80%" mx="auto">
                <VStack align="flex-start" w="full" spacing="1rem">
                    <AnimationOnScroll
                        animateIn="animate__fadeInUp"
                        duration={1}
                    >
                        <Heading
                            fontFamily="BR Firma"
                            fontWeight="700"
                            fontSize="40px"
                            lineHeight="52px"
                            letterSpacing="-4%"
                            color="white"
                        >
                            {heading}
                        </Heading>
                    </AnimationOnScroll>
                    <AnimationOnScroll
                        animateIn="animate__fadeInUp"
                        duration={2}
                    >
                        <Text
                            fontSize="20px"
                            lineHeight="30px"
                            color="white"
                            w="85%"
                        >
                            {sub}
                        </Text>
                    </AnimationOnScroll>
                    <AnimationOnScroll
                        animateIn="animate__fadeInUp"
                        duration={1}
                    >
                        <CustomButton
                            text={btn}
                            bg="transparent"
                            variant="outline"
                            color="white"
                        />
                    </AnimationOnScroll>
                </VStack>
                <Circle size="32rem" overflow="hidden">
                    <AnimationOnScroll
                        animateIn="animate__fadeInRight"
                        duration={1}
                    >
                        <Image src={img} w="full" h="full" objectFit="cover" />
                    </AnimationOnScroll>
                </Circle>
            </Flex>
        </Box>
    );
};
