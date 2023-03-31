import React from 'react';
import { PageTop } from './PageTop';
import { Box, Flex, HStack, Image } from '@chakra-ui/react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export const ProjectItem = ({ title, desc, project, cat, img }) => {
    return (
        <Box mb={['2rem', '7rem']}>
            <Flex
                justify="space-between"
                align="flex-end"
                flexDir={['column', 'row']}
                w={['90%', '80%']}
                mx="auto"
                mb="4rem"
                mt="4rem"
                gap={['1.5rem', '0']}
            >
                <PageTop
                    title={title}
                    desc={desc}
                    project={project}
                    align="left"
                    w="100%"
                    minH="150px"
                />
                <HStack
                    spacing="0"
                    gap={['.4rem', '1rem']}
                    justify={['flex-start', 'flex-end']}
                    w="full"
                    flexWrap="wrap"
                >
                    {cat.map((x: string, i: any) => (
                        <AnimationOnScroll
                            animateIn="animate__fadeInRight"
                            duration={++i}
                        >
                            <Flex
                                h="2rem"
                                px="1rem"
                                bgColor={['#DFBEE4', '#EFE9FC']}
                                fontSize={['13px', '14px']}
                                fontWeight={['400', '600']}
                                fontFamily="General Sans"
                                letterSpacing="-0.04em"
                                textAlign="center"
                                key={i}
                                justify="center"
                                align="center"
                                borderRadius="4px"
                            >
                                {x}
                            </Flex>
                        </AnimationOnScroll>
                    ))}
                </HStack>
            </Flex>
            <AnimationOnScroll animateIn="animate__fadeInUp">
                <Box
                    w={['95%', 'full']}
                    h={['280px', '100vh']}
                    overflow="hidden"
                    border={['12px solid black', '0']}
                    borderRadius={['12px', '0']}
                    mx="auto"
                    boxShadow={['lg', 'none']}
                >
                    <Image
                        src={img}
                        w="full"
                        h={['full', '80%']}
                        objectFit="cover"
                        objectPosition="top"
                        transition="5s all ease"
                        _hover={{
                            objectPosition: 'bottom',
                        }}
                    />
                </Box>
            </AnimationOnScroll>
        </Box>
    );
};
