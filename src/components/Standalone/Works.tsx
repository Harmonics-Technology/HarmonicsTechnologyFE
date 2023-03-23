import { Box } from '@chakra-ui/react';
import { ContactBanner } from '@components/Utilities/ContactBanner';
import { Projects } from '@components/Utilities/Projects';
import { WorksHero } from '@components/Utilities/WorksHero';
import React from 'react';

export const Works = () => {
    return (
        <Box>
            <WorksHero />
            <Projects />
            <Box my="3rem" />
            <ContactBanner
                heading="Book a Consultation"
                sub="Get personalised technology solutions with our knowledgeable professionals. Book your appointment today and receive detailed information via email. We're here to help!"
                btn="Book a Free Consultation "
                img="/assets/contactb.png"
            />
        </Box>
    );
};
