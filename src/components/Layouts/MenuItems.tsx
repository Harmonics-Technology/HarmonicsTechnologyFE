import { Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

interface MenuProps {
    text: string;
    url: string;
}

export const MenuItems = ({ text, url }: MenuProps) => {
    const router = useRouter();
    return (
        <Link passHref href={url}>
            <Text
                fontSize="14px"
                fontWeight="500"
                letterSpacing="-0.02em"
                textTransform="capitalize"
                mb="0"
                cursor="pointer"
                color={
                    router.asPath.startsWith(url) ? 'brand.100' : 'brand.200'
                }
            >
                {text}
            </Text>
        </Link>
    );
};
