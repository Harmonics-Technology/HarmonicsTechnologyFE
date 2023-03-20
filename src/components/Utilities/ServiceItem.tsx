import { Box, Grid, Image } from '@chakra-ui/react';
import React from 'react';
import { PageTop } from './PageTop';

export const ServiceItem = ({ title, desc, btn, img, dir }) => {
    return (
        <Grid
            templateColumns={['repeat(1,1fr)', 'repeat(2,1fr)']}
            alignItems="center"
        >
            <Box order={dir == 'ltr' ? '0' : '1'}>
                <PageTop
                    title={title}
                    align="left"
                    desc={desc}
                    btn={btn}
                    w="85%"
                    dir={dir}
                />
            </Box>
            <Box w="auto" h="auto" ml={dir == 'ltr' ? 'auto' : '0'}>
                <Image src={img} />
            </Box>
        </Grid>
    );
};
