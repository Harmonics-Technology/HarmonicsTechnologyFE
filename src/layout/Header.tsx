import { Box, Flex, HStack, Image } from '@chakra-ui/react';
import { MenuItems } from '@components/Layouts/MenuItems';
import { CustomButton } from '@components/Utilities/CustomButton';
import { useRouter } from 'next/router';
import React from 'react';

const Header = () => {
    const router = useRouter();
    return (
        <Box w="full" bgColor="white" h="6rem">
            <Flex
                w="80%"
                mx="auto"
                justify="space-between"
                align="center"
                h="full"
            >
                <Box w="10rem">
                    <Image src="/assets/logo.png" w="full" h="auto" />
                </Box>
                <HStack spacing="0" gap="4rem">
                    <MenuItems text="home" url="/" />
                    <MenuItems text="our works" url="/our-works" />
                    <MenuItems text="services" url="/services" />
                    <MenuItems text="courses" url="/courses" />
                    <MenuItems text="read from us" url="/blog" />
                </HStack>
                <CustomButton
                    bg="brand.400"
                    text="Get a Quote"
                    onClick={() => router.push('/contact')}
                />
            </Flex>
        </Box>
    );
};

export default Header;
