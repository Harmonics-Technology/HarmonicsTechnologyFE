import { Box } from '@chakra-ui/react';
import React from 'react';
import { PageTop } from './PageTop';
import { ContactBanner } from './ContactBanner';
import { ServicesPage } from './ServicesPage';

export const ServiceProjectPage = () => {
    return (
        <Box>
            <PageTop
                title="Our Services"
                desc="We strive to provide the best possible experience for our customers, and we appreciate your trust and support."
                mx="auto"
                minH="30.37rem"
                bg="#EFE9FC"
                w="30%"
            />
            <ServicesPage page={true} />
            <ContactBanner
                heading="Book a Consultation"
                sub="Get personalised technology solutions with our knowledgeable professionals. Book your appointment today and receive detailed information via email. We're here to help!"
                btn="Book a Free Consultation "
                img="/assets/contactc.png"
            />
        </Box>
    );
};
