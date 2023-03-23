import { Flex, Heading, Image, Text, VStack } from '@chakra-ui/react';
import { CustomButton } from '@components/Utilities/CustomButton';
import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export const SubHeroItem = ({ heading, sub, btn, img }) => {
    return (
        <Flex
            justify="space-between"
            align="center"
            h="fit-content"
            w="80%"
            mx="auto"
        >
            <VStack align="flex-start" w="full" spacing="1rem">
                <AnimationOnScroll animateIn="animate__fadeInUp" duration={1}>
                    <Heading
                        fontFamily="BR Firma"
                        fontWeight="600"
                        fontSize="60px"
                        lineHeight="72px"
                        color="#2E2E2E"
                    >
                        {heading}
                    </Heading>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeInUp" duration={2}>
                    <Text
                        fontSize="20px"
                        lineHeight="30px"
                        color="#252525"
                        w="85%"
                    >
                        {sub}
                    </Text>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeInUp" duration={3}>
                    <CustomButton text={btn} bg="brand.100" />
                </AnimationOnScroll>
            </VStack>
            <Flex h="auto" w="full" justify="flex-end">
                <AnimationOnScroll
                    animateIn="animate__fadeInRight"
                    duration={2}
                >
                    <Image src={img} />
                </AnimationOnScroll>
            </Flex>
        </Flex>
    );
};
