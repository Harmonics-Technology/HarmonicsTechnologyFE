import React from 'react';
import { Text } from '@chakra-ui/react';
import Link from 'next/link';

export const FooterMenuItems = ({
    text,
    url,
}: {
    text: string;
    url: string;
}) => {
    return (
        <Link passHref href={url}>
            <Text
                fontWeight="400"
                fontSize=".9rem"
                color="white"
                mb="0"
                cursor="pointer"
            >
                {text}
            </Text>
        </Link>
    );
};
