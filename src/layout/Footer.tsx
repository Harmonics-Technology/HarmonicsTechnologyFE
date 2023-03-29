import {
    Box,
    Divider,
    Flex,
    Grid,
    HStack,
    Image,
    Text,
    VStack,
    Show,
    Hide,
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
                mx={['.5rem', 'auto']}
                py={['1rem', '3.5rem']}
                justify="space-between"
                flexDir={['column', 'row']}
            >
                <Box w="30%">
                    <Box w="280px" mb="2rem">
                        <Image
                            src="/assets/logowhite.png"
                            // w="full"
                            w={['9rem', 'full']}
                            h={['3rem', 'auto']}
                        />
                    </Box>
                    <Text
                        fontWeight="400"
                        fontSize=".9rem"
                        color="white"
                        w={['360px', '300px']}
                        // ml={['10px', '']}
                    >
                        We create well-researched user interfaces and build
                        resourceful applications that are tailored to suit our
                        client’s specific needs.
                    </Text>
                </Box>
                <Box w="60%">
                    <Grid
                        w="full"
                        templateColumns={['repeat(2,1fr)', 'repeat(3,1fr)']}
                    >
                        <VStack spacing="0" gap="1rem" align="flex-start">
                            <FooterHeadings text="IT Services" />
                            <FooterMenuItems
                                text="Graphics Design"
                                url="/services/graphics"
                            />
                            <FooterMenuItems
                                text="Product Design"
                                url="/services/product"
                            />
                            <FooterMenuItems
                                text="Web Development"
                                url="/services/software"
                            />
                        </VStack>
                        <VStack
                            spacing="0"
                            gap="1rem"
                            align={['flex-start', 'flex-end']}
                        >
                            <FooterHeadings text="Company" />
                            <FooterMenuItems text="About Us" url="/about" />
                            <FooterMenuItems
                                text="Our Services"
                                url="/services"
                            />
                            <FooterMenuItems text="FAQs" url="/contact" />
                            <FooterMenuItems text="Read from us" url="/blog" />
                        </VStack>
                        <VStack
                            spacing="0"
                            gap="1rem"
                            align="flex-start"
                            w={['15rem', '']}
                        >
                            <FooterHeadings text="Contact" />
                            <Flex>
                                <FooterMenuItems
                                    text="+2348180041801 or"
                                    url="tel:+2348180041801"
                                />
                                <FooterMenuItems
                                    text="+2348162812758"
                                    url="tel:+2348162812758"
                                />
                            </Flex>
                            <FooterMenuItems
                                text="info@harmonicstechnology.com"
                                url="mailto:info@harmonicstechnology.com"
                            />
                            <FooterMenuItems
                                text="Opening Hours: 9:00AM - 5:00AM"
                                url="/"
                            />
                        </VStack>
                    </Grid>
                </Box>
            </Flex>
            <Hide above="md">
                <Flex gap="20px" justifyContent="center" my="10px">
                    <Socials
                        icon={AiOutlineInstagram}
                        url="https://www.instagram.com/harmonicstechnology/"
                    />
                    <Socials
                        icon={AiFillLinkedin}
                        url="https://www.linkedin.com/harmonicstechnology/"
                    />
                    <Socials
                        icon={FaFacebook}
                        url="https://www.facebook.com/harmonicstechnology/"
                    />
                    <Socials
                        icon={AiOutlineTwitter}
                        url="https://www.twitter.com/harmonicstechnology/"
                    />
                    <Socials
                        icon={AiFillYoutube}
                        url="https://www.youtube.com/harmonicstechnology/"
                    />
                </Flex>
            </Hide>
            <Divider w="full" bgColor="white" />
            <Hide above="md">
                <Flex
                    mx="15px"
                    my="20px"
                    bgColor="brand.600"
                    justifyContent="space-between"
                >
                    <FooterMenuItems text="Terms and Condition" url="/" />
                    <FooterMenuItems text="Cookies Policy" url="/" />
                    <FooterMenuItems text="Privacy Policy" url="/" />
                </Flex>
                <Text
                    color="white"
                    mx="20px"
                    mb="10px"
                    bgColor="brand.600"
                    fontSize=".9rem"
                >
                    © {year} Harmonics Technology. All rights reserved{' '}
                </Text>
            </Hide>
            <Show above="md">
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
                        <Socials
                            icon={AiOutlineInstagram}
                            url="https://www.instagram.com/harmonicstechnology/"
                        />
                        <Socials
                            icon={AiFillLinkedin}
                            url="https://www.linkedin.com/harmonicstechnology/"
                        />
                        <Socials
                            icon={FaFacebook}
                            url="https://www.facebook.com/harmonicstechnology/"
                        />
                        <Socials
                            icon={AiOutlineTwitter}
                            url="https://www.twitter.com/harmonicstechnology/"
                        />
                        <Socials
                            icon={AiFillYoutube}
                            url="https://www.youtube.com/harmonicstechnology/"
                        />
                    </HStack>
                </Flex>
            </Show>
        </Box>
    );
}

export default Footer;
