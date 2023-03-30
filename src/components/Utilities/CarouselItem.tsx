import { Box, Heading, Text, Grid, Image } from '@chakra-ui/react';
import React from 'react';

export const CarouselItem = ({ title, desc, img, dir }) => {
    return (
        <Grid
            templateColumns={['repeat(1,1fr)', 'repeat(2,1fr)']}
            alignItems="center"
            my="3rem"
            h="fit-content"
        >
            <Box
                order={['0', dir == 'ltr' ? '0' : '1']}
                ml={dir == 'ltr' ? '0' : 'auto'}
                w={['100%', '90%']}
            >
                <Heading
                    fontFamily="DM Sans"
                    color="brand.100"
                    textAlign={'left'}
                    textTransform="capitalize"
                    fontWeight="600"
                    letterSpacing="-0.04em"
                    fontSize="40px"
                    borderLeft="3px solid #A03CAE"
                    p="10px"
                >
                    {title}
                </Heading>
                <Text
                    fontFamily="DM Sans"
                    color="#252525"
                    textAlign="left"
                    fontWeight="400"
                    fontSize="20px"
                    mt="2rem"
                >
                    {desc}
                </Text>
            </Box>
            <Box
                w={['100%', '70%']}
                h="auto"
                ml={['0', dir == 'ltr' ? 'auto' : '0']}
            >
                <Image src={img} h="auto" w="full" />
            </Box>
        </Grid>
    );
};
