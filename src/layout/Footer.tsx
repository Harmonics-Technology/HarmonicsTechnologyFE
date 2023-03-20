import {
    Box,
    Divider,
    Flex,
    Grid,
    HStack,
    Image,
    Text,
    VStack,
} from '@chakra-ui/react';
import { FooterHeadings } from '@components/Layouts/FooterHeadings';
import { FooterMenuItems } from '@components/Layouts/FooterMenuItems';
import { Socials } from '@components/Layouts/Socials';
import { FaFacebook } from 'react-icons/fa';
import {
    AiFillYoutube,
    AiOutlineTwitter,
    AiOutlineInstagram,
    AiFillLinkedin,
} from 'react-icons/ai';

function Footer() {
    const year = new Date().getFullYear();
    return (
        <Box w="full" bgColor="brand.600">
            <Flex
                align="flex-start"
                w="80%"
                mx="auto"
                py="3.5rem"
                justify="space-between"
            >
                <Box w="30%">
                    <Box w="280px" mb="2rem">
                        <Image src="/assets/logowhite.png" w="full" h="auto" />
                    </Box>
                    <Text
                        fontWeight="400"
                        fontSize=".9rem"
                        color="white"
                        w="300px"
                    >
                        We create well-researched user interfaces and build
                        resourceful applications that are tailored to suit our
                        client’s specific needs.
                    </Text>
                </Box>
                <Box w="60%">
                    <Grid w="full" templateColumns={['repeat(3,1fr)']}>
                        <VStack spacing="0" gap="1rem" align="flex-start">
                            <FooterHeadings text="IT Services" />
                            <FooterMenuItems text="Graphics Design" url="/" />
                            <FooterMenuItems text="Product Design" url="/" />
                            <FooterMenuItems text="Web Development" url="/" />
                        </VStack>
                        <VStack spacing="0" gap="1rem" align="flex-start">
                            <FooterHeadings text="Company" />
                            <FooterMenuItems text="About Us" url="/" />
                            <FooterMenuItems text="Our Services" url="/" />
                            <FooterMenuItems text="FAQs" url="/" />
                            <FooterMenuItems text="Read from us" url="/" />
                        </VStack>
                        <VStack spacing="0" gap="1rem" align="flex-start">
                            <FooterHeadings text="Contact" />
                            <FooterMenuItems
                                text="+2348180041801 or +2348162812758"
                                url="/"
                            />
                            <FooterMenuItems
                                text="info@harmonicstechnology.com"
                                url="/"
                            />
                            <FooterMenuItems
                                text="Opening Hours: 9:00AM - 5:00AM"
                                url="/"
                            />
                        </VStack>
                    </Grid>
                </Box>
            </Flex>
            <Divider w="full" bgColor="white" />
            <Flex
                justify="space-between"
                w="80%"
                mx="auto"
                align="center"
                h="fit-content"
                pt="1rem"
                pb="2rem"
            >
                <Text color="white" mb="0" fontSize=".9rem">
                    © {year} Harmonics Technology. All rights reserved{' '}
                </Text>
                <HStack spacing="0" gap="1.5rem">
                    <FooterMenuItems text="Terms and Condition" url="/" />
                    <FooterMenuItems text="Cookies Policy" url="/" />
                    <FooterMenuItems text="Privacy Policy" url="/" />
                    <Socials icon={AiOutlineInstagram} url="/" />
                    <Socials icon={AiFillLinkedin} url="" />
                    <Socials icon={FaFacebook} url="" />
                    <Socials icon={AiOutlineTwitter} url="" />
                    <Socials icon={AiFillYoutube} url="" />
                </HStack>
            </Flex>
        </Box>
    );
}

export default Footer;
