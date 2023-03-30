import {
    Box,
    Button,
    Flex,
    HStack,
    Heading,
    Icon,
    Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import parse from 'html-react-parser';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { useRouter } from 'next/router';

interface PageTopProps {
    sub?: string;
    title?: string;
    desc?: any;
    bg?: string;
    align?: any;
    btn?: any;
    w?: any;
    mx?: any;
    dir?: any;
    project?: any;
    minH?: any;
    color?: any;
    url?: string;
}

export const PageTop = ({
    sub,
    title,
    desc = '',
    bg = 'white',
    align = 'center',
    btn,
    w = '45%',
    mx,
    dir,
    project,
    minH = '270px',
    color = '#252525',
    url = '',
}: PageTopProps) => {
    const router = useRouter();
    return (
        <Flex justify="center" align={align} minH={minH} bg={bg}>
            <Flex
                flexDir="column"
                ml={['0', dir == 'ltr' ? '0' : 'auto']}
                mx={mx}
                w={w}
            >
                <AnimationOnScroll animateIn="animate__fadeInUp" delay={100}>
                    <Text
                        fontFamily={['BR Firma', 'General Sans']}
                        color="brand.100"
                        textAlign={align}
                        textTransform="uppercase"
                        fontWeight="600"
                        fontSize="20px"
                        w={'full'}
                    >
                        {sub}
                    </Text>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeInUp" delay={100}>
                    <Heading
                        fontFamily={['BR Firma', 'DM Sans']}
                        color={color}
                        textAlign={align}
                        textTransform="capitalize"
                        fontWeight="600"
                        letterSpacing="-0.04em"
                        fontSize={['20px', '40px']}
                    >
                        {title}
                    </Heading>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeInUp" delay={100}>
                    <Text
                        fontFamily="DM Sans"
                        color={color}
                        textAlign={align}
                        fontWeight="400"
                        fontSize={['1rem', '20px']}
                        mt="1rem"
                    >
                        {parse(desc as string)}
                    </Text>
                </AnimationOnScroll>
                {btn && (
                    <AnimationOnScroll
                        animateIn="animate__fadeInUp"
                        delay={100}
                    >
                        <Button
                            variant="outline"
                            borderColor="brand.100"
                            color="brand.100"
                            fontSize="1rem"
                            fontWeight="500"
                            px="1.5rem"
                            // mt=".5rem"
                            borderRadius="4px"
                            h="3rem"
                            w={['full', 'fit-content']}
                            onClick={() => router.push(url)}
                            _hover={{
                                bgColor: 'brand.100',
                                color: 'white',
                            }}
                        >
                            {btn}
                        </Button>
                    </AnimationOnScroll>
                )}
                {project && (
                    <AnimationOnScroll
                        animateIn="animate__fadeInUp"
                        delay={100}
                    >
                        <Link passHref href={project}>
                            <HStack>
                                <Box>
                                    <Text
                                        fontFamily="Poppins"
                                        // borderBottom="3px solid #D09ED7"
                                        transition=".5s ease"
                                        color="brand.100"
                                        mb="0"
                                        cursor="pointer"
                                        _hover={{
                                            pr: '.5rem',
                                        }}
                                    >
                                        Launch Project
                                    </Text>
                                    <Box
                                        borderBottom="3px solid #D09ED7"
                                        mt=".3rem"
                                    />
                                </Box>
                                <Icon as={FiArrowRight} color="brand.100" />
                            </HStack>
                        </Link>
                    </AnimationOnScroll>
                )}
            </Flex>
        </Flex>
    );
};
