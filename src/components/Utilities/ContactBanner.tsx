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
        <Box bgColor="brand.500" py={['3rem', '2.2rem']}>
            <Flex
                align="center"
                justify="space-between"
                w={['90%', '80%']}
                mx="auto"
                flexDir={['column', 'row']}
                gap={['2rem', 'unset']}
            >
                <VStack align="flex-start" w="full" spacing="1rem">
                    <AnimationOnScroll
                        animateIn="animate__fadeInUp"
                        duration={1}
                    >
                        <Heading
                            fontFamily="BR Firma"
                            fontWeight={['600', '700']}
                            fontSize={['24px', '40px']}
                            lineHeight={['30px', '52px']}
                            letterSpacing={['-0.02em', '-4%']}
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
                            fontSize={['16px', '20px']}
                            lineHeight={['24px', '30px']}
                            color="white"
                            w={['905', '85%']}
                            textAlign={['justify', 'left']}
                        >
                            {sub}
                        </Text>
                    </AnimationOnScroll>
                    <AnimationOnScroll
                        animateIn="animate__fadeInUp"
                        duration={1}
                        style={{ width: '100%' }}
                    >
                        <CustomButton
                            text={btn}
                            bg="transparent"
                            variant="outline"
                            color="white"
                            w={['full', 'fit-content']}
                        />
                    </AnimationOnScroll>
                </VStack>
                <Circle size={['full', '32rem']} overflow="hidden">
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
