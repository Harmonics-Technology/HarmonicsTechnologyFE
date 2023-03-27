import { Box, Flex, HStack, Icon, Image, Stack } from '@chakra-ui/react';
import { MenuItems } from '@components/Layouts/MenuItems';
import { CustomButton } from '@components/Utilities/CustomButton';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { BsList } from 'react-icons/bs';

const Header = () => {
    const router = useRouter();
    const [openMenu, setOpenMenu] = useState(true);
    return (
        <Box w="full" bgColor="white" h="6rem">
            <Flex
                w={['90%', '80%']}
                mx="auto"
                justify="space-between"
                align="center"
                h="full"
            >
                <Box w="10rem">
                    <Image src="/assets/logo.png" w="full" h="auto" />
                </Box>
                <Flex
                    justify={['flex-start', 'space-between']}
                    flexDir={['column', 'row']}
                    w={['50%', '70%']}
                    bgColor={['white', 'transparent']}
                    pos={['absolute', 'unset']}
                    top=".68%"
                    right={openMenu ? '0' : '-100%'}
                    p={['1rem 2rem', '0']}
                    zIndex="999"
                    h={['100vh', 'auto']}
                    gap={['3rem', '0']}
                    transition=".5s all ease"
                >
                    <Stack spacing="0" gap="4rem" direction={['column', 'row']}>
                        <MenuItems text="home" url="/" />
                        <MenuItems text="our works" url="/our-works" />
                        <MenuItems text="services" url="/services" />
                        <MenuItems text="about us" url="/about" />
                        <MenuItems text="read from us" url="/blog" />
                    </Stack>
                    <CustomButton
                        bg="brand.400"
                        text="Get a Quote"
                        onClick={() => router.push('/contact')}
                    />
                </Flex>
                <Icon
                    as={BsList}
                    display={['block', 'none']}
                    onClick={() => setOpenMenu(!openMenu)}
                />
            </Flex>
        </Box>
    );
};

export default Header;
