import { Heading } from '@chakra-ui/react';
import React from 'react';

export const FooterHeadings = ({ text }: { text: string }) => {
    return (
        <Heading fontSize="20px" fontWeight="600" color="white">
            {text}
        </Heading>
    );
};
