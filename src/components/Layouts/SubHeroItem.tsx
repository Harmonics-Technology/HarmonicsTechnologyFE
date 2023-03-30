import { Flex, Heading, Image, Text, VStack } from '@chakra-ui/react';
import { CustomButton } from '@components/Utilities/CustomButton';
import { useRouter } from 'next/router';
import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export const SubHeroItem = ({ heading, sub, btn, img }) => {
    const router = useRouter();
    return (
        <Flex
            justify="space-between"
            align="center"
            h="fit-content"
            w="80%"
            mx="auto"
            flexDir={['column', 'row']}
            gap={['2rem', 'unset']}
        >
            <VStack align={['center', 'flex-start']} w="full" spacing="1rem">
                <AnimationOnScroll animateIn="animate__fadeInUp" duration={1}>
                    <Heading
                        fontFamily="BR Firma"
                        fontWeight="600"
                        fontSize={['32px', '60px']}
                        lineHeight={['48px', '72px']}
                        color={['#1C1C1C', '#2E2E2E']}
                        textAlign={['center', 'left']}
                    >
                        {heading}
                    </Heading>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeInUp" duration={2}>
                    <Text
                        fontSize={['16px', '20px']}
                        lineHeight="30px"
                        color="#252525"
                        w={['full', '85%']}
                        textAlign={['center', 'left']}
                    >
                        {sub}
                    </Text>
                </AnimationOnScroll>
                <AnimationOnScroll
                    animateIn="animate__fadeInUp"
                    duration={3}
                    style={{ width: '100%' }}
                >
                    <CustomButton
                        text={btn}
                        bg="brand.100"
                        w={['full', '45%']}
                        onClick={() => router.push('/contact')}
                    />
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
