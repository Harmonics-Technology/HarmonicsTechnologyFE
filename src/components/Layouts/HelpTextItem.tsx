import React from 'react';
import { Text } from '@chakra-ui/react';

export const HelpTextItem = ({ text }) => {
    return (
        <Text
            fontSize={['16px', '20px']}
            fontFamily="Metropolis"
            fontWeight={['500', '']}
            lineHeight={['24px', '30px']}
            color="white"
            mb=".5rem"
        >
            {text}
        </Text>
    );
};
