import { Box, Button, Flex, HStack, Image } from '@chakra-ui/react';
import { MenuItems } from '@components/Layouts/MenuItems';
import React from 'react';

const Header = () => {
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
                <Button
                    bgColor="brand.400"
                    color="white"
                    fontSize="14px"
                    borderRadius="8px"
                    h="3.1rem"
                    px="1.5rem"
                    _hover={{
                        bgColor: 'brand.500',
                    }}
                >
                    Get a Quote
                </Button>
            </Flex>
        </Box>
    );
};

export default Header;
