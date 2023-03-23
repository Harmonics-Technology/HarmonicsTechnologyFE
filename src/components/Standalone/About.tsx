import { Box } from '@chakra-ui/react';
import { AboutSection } from '@components/Utilities/AboutSection';
import { Brands } from '@components/Utilities/Brands';
import { HelpPage } from '@components/Utilities/HelpPage';
import { SubHeroPage } from '@components/Utilities/SubHeroPage';
import React from 'react';

export const About = () => {
    return (
        <Box>
            <SubHeroPage />
            <AboutSection />
            <HelpPage />
            <Brands />
        </Box>
    );
};
