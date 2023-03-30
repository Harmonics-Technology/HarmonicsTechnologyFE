import { Box } from '@chakra-ui/react';
import { ContactBanner } from '@components/Utilities/ContactBanner';
import { PageTop } from '@components/Utilities/PageTop';
import { ServiceItem } from '@components/Utilities/ServiceItem';
import React from 'react';

export const SingleServicePage = ({ title, desc, bg, pageDesc, pageImg }) => {
    return (
        <Box>
            <PageTop
                title={title}
                desc={desc}
                mx="auto"
                minH={['12.5rem', '30.37rem']}
                bg={bg}
                color="white"
                w={['80%', '30%']}
            />
            <Box w="80%" m={['1rem auto 5rem', '5rem auto']}>
                <ServiceItem
                    desc={pageDesc}
                    btn="Work with us"
                    dir="ltr"
                    img={pageImg}
                    w="100%"
                />
            </Box>
            <ContactBanner
                heading="Book a Consultation"
                sub="Get personalised technology solutions with our knowledgeable professionals. Book your appointment today and receive detailed information via email. We're here to help!"
                btn="Book a Free Consultation "
                img="/assets/contactb.jpg"
            />
        </Box>
    );
};
