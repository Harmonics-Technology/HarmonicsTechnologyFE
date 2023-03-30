import React from 'react';
import { PageTop } from './PageTop';
import { ServiceItem } from './ServiceItem';
import { Box, VStack } from '@chakra-ui/react';

export const ServicesPage = ({ page }: { page?: boolean }) => {
    return (
        <Box mt="2rem">
            {!page && (
                <PageTop
                    sub="Our Services"
                    title="Here are what we do best"
                    mx="auto"
                    w={['90%', '45%']}
                    desc="We strive to provide the best possible experience for our customers, and we appreciate your trust and support."
                />
            )}
            <VStack w={['95%', '80%']} mx="auto" mb="5rem">
                <ServiceItem
                    title="Product Design"
                    desc="Our appetite for curiosity has led us to create ideas that are built on empathy which has over the years motivated our design thinking to produce functional prototypes and usable designs. "
                    btn="Learn More"
                    dir="ltr"
                    img="/assets/product.jpg"
                    url={'/services/product'}
                    w={['90%', '85%']}
                />
                <ServiceItem
                    title="Software Development"
                    desc="We are dedicated to guaranteeing modern designs that are usable and relatable to our clients by creating and maintaining applications that would help their businesses thrive in any weather."
                    btn="Learn More"
                    dir="rtl"
                    img="/assets/graphics.jpg"
                    url={'/services/software'}
                    w={['90%', '85%']}
                />
                <ServiceItem
                    title="Graphics  Design"
                    desc="We create engaging content that consists of projecting visual communications intended to achieve specific objectives. We create and recreate brand identity that makes your business stand out."
                    btn="Learn More"
                    dir="ltr"
                    img="/assets/software.jpg"
                    url={'/services/graphics'}
                    w={['90%', '85%']}
                />
            </VStack>
        </Box>
    );
};
