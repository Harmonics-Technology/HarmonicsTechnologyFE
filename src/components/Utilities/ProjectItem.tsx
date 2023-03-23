import React from 'react';
import { PageTop } from './PageTop';
import { Box, Flex, HStack, Image } from '@chakra-ui/react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export const ProjectItem = ({ title, desc, project, cat, img }) => {
    return (
        <Box mb="7rem">
            <Flex
                justify="space-between"
                align="flex-end"
                w="80%"
                mx="auto"
                mb="4rem"
                mt="4rem"
            >
                <PageTop
                    title={title}
                    desc={desc}
                    project={project}
                    align="left"
                    w="100%"
                    minH="150px"
                />
                <HStack spacing="0" gap="1rem" justify="flex-end" w="full">
                    {cat.map((x: string, i: any) => (
                        <AnimationOnScroll
                            animateIn="animate__fadeInRight"
                            duration={++i}
                        >
                            <Flex
                                h="2rem"
                                px="1rem"
                                bgColor="#EFE9FC"
                                fontSize="14px"
                                fontWeight="600"
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
            <AnimationOnScroll animateIn="animate__fadeInUp" delay={100}>
                <Box w="full" h="1145px">
                    <Image src={img} w="full" h="full" objectFit="cover" />
                </Box>
            </AnimationOnScroll>
        </Box>
    );
};
