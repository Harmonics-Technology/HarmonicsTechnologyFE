import { Circle, Icon } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

export const Socials = ({ icon, url }: { icon: any; url: string }) => {
    return (
        <Link passHref href={url}>
            <Circle size="2rem" bgColor="rgba(255,255,255,.1)" cursor="pointer">
                <Icon as={icon} color="white" fontSize="1rem" />
            </Circle>
        </Link>
    );
};
