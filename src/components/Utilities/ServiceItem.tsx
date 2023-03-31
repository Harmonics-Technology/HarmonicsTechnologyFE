import { Box, Grid, Image } from '@chakra-ui/react';
import React from 'react';
import { PageTop } from './PageTop';
import { AnimationOnScroll } from 'react-animation-on-scroll';

interface serviceItemProps {
    title?: string;
    desc?: string;
    btn?: any;
    img?: any;
    dir?: any;
    w?: any;
    url?: any;
}
export const ServiceItem = ({
    title,
    desc,
    btn,
    img,
    dir,
    w = '85%',
    url = '',
}: serviceItemProps) => {
    return (
        <Grid
            templateColumns={['repeat(1,1fr)', 'repeat(2,1fr)']}
            alignItems="center"
        >
            <Box order={['0', dir == 'ltr' ? '0' : '1']}>
                <PageTop
                    title={title}
                    align="left"
                    desc={desc}
                    btn={btn}
                    w={w}
                    dir={dir}
                    url={url}
                />
            </Box>
            <AnimationOnScroll
                animateIn={
                    dir == 'ltr'
                        ? 'animate__fadeInRight'
                        : 'animate__fadeInLeft'
                }
            >
                <Box
                    w={['90%', 'auto']}
                    h="auto"
                    mx={['auto', 'unset']}
                    ml={['auto', dir == 'ltr' ? 'auto' : '0']}
                >
                    <Image src={img} />
                </Box>
            </AnimationOnScroll>
        </Grid>
    );
};
