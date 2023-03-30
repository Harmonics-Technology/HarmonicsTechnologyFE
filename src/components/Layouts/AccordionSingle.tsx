import {
    AccordionItem,
    AccordionButton,
    Box,
    AccordionPanel,
} from '@chakra-ui/react';
import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { TfiAngleUp, TfiAngleRight } from 'react-icons/tfi';

export const AccordionSingle = ({ title, content }) => {
    return (
        <AnimationOnScroll animateIn="animate__fadeInUp" duration={1}>
            <AccordionItem border="1px solid #E8E8E8" borderRadius="12px">
                {({ isExpanded }) => (
                    <>
                        <h2>
                            <AccordionButton h="80px" px="2rem">
                                <Box
                                    as="span"
                                    flex="1"
                                    textAlign="left"
                                    fontSize={['1rem', '20px']}
                                    lineHeight="30px"
                                    color="#252525"
                                    noOfLines={1}
                                >
                                    {title}
                                </Box>
                                {isExpanded ? (
                                    <TfiAngleUp fontSize="1.5rem" />
                                ) : (
                                    <TfiAngleRight fontSize="1.5rem" />
                                )}
                            </AccordionButton>
                        </h2>
                        <AccordionPanel
                            pb={6}
                            textAlign="left"
                            fontSize={['1rem', '20px']}
                            lineHeight="30px"
                            color="#252525"
                            w="95%"
                            px="2rem"
                        >
                            {content}
                        </AccordionPanel>
                    </>
                )}
            </AccordionItem>
        </AnimationOnScroll>
    );
};
