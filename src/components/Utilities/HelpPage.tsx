import { Box, Flex, Heading, Image, VStack, Button } from '@chakra-ui/react';
import { HelpTextItem } from '@components/Layouts/HelpTextItem';
import { useRouter } from 'next/router';
import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export const HelpPage = () => {
    const router = useRouter();
    return (
        <AnimationOnScroll animateIn="animate__fadeInUp" delay={100}>
            <Box
                w="90%"
                bgColor="brand.500"
                borderRadius="24px"
                mx="auto"
                h="638px"
                pos="relative"
                mt="12rem"
                mb="5rem"
            >
                <Flex
                    w="85%"
                    mx="auto"
                    align="flex-end"
                    gap="3rem"
                    top="-14%"
                    left="50%"
                    transform="translateX(-50%)"
                    pos="absolute"
                >
                    <Box
                        h="637px"
                        w="448px"
                        borderRadius="20px"
                        overflow="hidden"
                    >
                        <Image
                            src="/assets/contact.png"
                            w="full"
                            h="full"
                            objectFit="cover"
                        />
                    </Box>
                    <VStack mb="2rem" align="flex-start" spacing="2rem" w="45%">
                        <Heading
                            color="white"
                            fontSize="40px"
                            fontWeight="700"
                            letterSpacing="-0.04em"
                            lineHeight="52px"
                        >
                            We are Here to help you Standout Digitally!
                        </Heading>

                        <HelpTextItem
                            text="Chat with us via our in-app live chat or send us a
                        message on our official social media pages. If you
                        require further assistance, contact us via the following
                        channels:"
                        />

                        <Box>
                            <HelpTextItem text="+234 818 004 1801 || +234 802 627 6484" />
                            <HelpTextItem text="info@harmonicstechnology.com" />
                        </Box>
                        <Button
                            variant="outline"
                            borderColor="white"
                            color="white"
                            fontSize="1rem"
                            fontWeight="500"
                            px="1.5rem"
                            borderRadius="4px"
                            h="3rem"
                            w="fit-content"
                            onClick={() => router.push('/contact')}
                            _hover={{
                                bgColor: 'white',
                                color: 'brand.100',
                            }}
                        >
                            Book a Free Consultation
                        </Button>
                    </VStack>
                </Flex>
            </Box>
        </AnimationOnScroll>
    );
};
