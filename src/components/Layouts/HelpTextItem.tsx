import React from 'react';
import { Text } from '@chakra-ui/react';

export const HelpTextItem = ({ text }) => {
    return (
        <Text
            fontSize="20px"
            fontFamily="Metropolis"
            lineHeight="30px"
            color="white"
            mb=".5rem"
        >
            {text}
        </Text>
    );
};
