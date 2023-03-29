import { Flex, Image } from '@chakra-ui/react';
import React from 'react';

export const BrandItem = ({ img }) => {
    return (
        <Flex
            justify="center"
            align="center"
            h="99px"
            px={['2.5rem', '2rem']}
            bgColor="white"
            boxShadow="0px 20px 25px rgba(212, 212, 212, 0.35)"
            borderRadius="10px"
        >
            <Image src={img} w={['90px', '']} />
        </Flex>
    );
};
