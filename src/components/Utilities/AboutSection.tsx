import { Box, VStack } from '@chakra-ui/react';
import React from 'react';
import { PageTop } from './PageTop';
import { AboutItem } from '@components/Layouts/AboutItem';

export const AboutSection = () => {
    return (
        <Box w="80%" mx="auto">
            <PageTop
                sub="ABOUT US"
                title="Who are we?"
                mx="auto"
                minH={['150px', '200px']}
            />
            <AboutItem
                img={'/assets/aboutb.jpg'}
                text={`Harmonics Technology is a brand that is powered by an ingenious team committed to creating world-class products that reflect your ideas. Our goal is to provide organisations with services that add value to their businesses and solve problems thereby allowing the space for financial growth.
                <br/><br/> As a team, we are attentive & empathetic to our client’s needs & wants and we strive to create unique design solutions that are user-centred for their various businesses. 
                <br/><br/> At harmonic technologies, we believe in continuity, so we provide courses in uiux, software development(frontend & Backend ), Graphics. to help build your career in tech. We are committed to growing the community in the technology industry by providing practical user-centric design and product knowledge to increase creativity and passion.`}
            />
            <Box my="5rem">
                <PageTop
                    sub="OUR VALUES"
                    title="The values we uphold"
                    mx="auto"
                    minH="200px"
                    w={['90%', '45%']}
                />
                <VStack spacing="5rem">
                    <AboutItem
                        img={'/assets/aboutc.jpg'}
                        head="Our Mission"
                        dir="ltr"
                        text={`Our mission is to help businesses and organisations establish a strong online presence by providing them with exceptional web development services. We are committed to delivering custom-built websites that are not only visually appealing but also functional, user-friendly, and optimised for search engines. Our goal is to help our clients reach their target audience, increase their online visibility, and ultimately, achieve their business objectives. We are dedicated to staying up-to-date with the latest web development technologies and trends, and to providing our clients with the highest level of service and support.`}
                    />
                    <AboutItem
                        img={'/assets/aboutd.jpg'}
                        head="Our Vision"
                        dir="rtl"
                        text={`Our vision is to become a leading web development agency that is recognised for its innovation, creativity, and excellence in delivering web solutions that exceed our clients' expectations. We aspire to build long-lasting relationships with our clients and to become their trusted partner for all their web development needs. We aim to be at the forefront of technology, constantly pushing the boundaries of what is possible in web development, and developing solutions that solve complex business problems. Our ultimate goal is to make a significant contribution to the growth and success of our clients' businesses and to be a driving force in the digital transformation of industries.`}
                    />
                </VStack>
            </Box>
        </Box>
    );
};
