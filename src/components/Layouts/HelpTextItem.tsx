import React from 'react';
import { Text } from '@chakra-ui/react';

export const HelpTextItem = ({ text }) => {
    return (
        <Text
            fontSize={['18px', '20px']}
            fontFamily="Metropolis"
            fontWeight={['500', '']}
            lineHeight="30px"
            color="white"
            mb=".5rem"
            px={['10px', '']}
        >
            {text}
        </Text>
    );
};
