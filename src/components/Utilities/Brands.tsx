import { Box, HStack, Flex, Grid } from '@chakra-ui/react';
import React from 'react';
import { PageTop } from './PageTop';
import { BrandItem } from '@components/Layouts/BrandItem';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export const Brands = () => {
    return (
        <Box mb="5rem">
            <PageTop
                sub="trusted brands"
                title="We are humble and proud to work with amazing clients."
                mx="auto"
                minH="200px"
                w={['90%', '45%']}
            />
            <Flex
                gap={['1rem', '2.9rem']}
                justify={['start', 'center']}
                flexWrap="wrap"
                pl={['1rem', '']}
            >
                <AnimationOnScroll animateIn="animate__fadeInUp" duration={1}>
                    <BrandItem img="/assets/ts.png" />
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeInUp" duration={2}>
                    <BrandItem img="/assets/pm.png" />
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate__fadeInUp" duration={3}>
                    <BrandItem img="/assets/sme.png" />
                </AnimationOnScroll>
            </Flex>
        </Box>
    );
};
