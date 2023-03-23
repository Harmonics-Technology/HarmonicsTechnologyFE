import { Herobanner } from '@components/Utilities/Herobanner';
import { ServicesPage } from '@components/Utilities/ServicesPage';
import { Projects } from '@components/Utilities/Projects';
import React from 'react';
import { CarouselPage } from '@components/Utilities/CarouselPage';
import { TestimonialPage } from '@components/Utilities/TestimonialPage';
import { HelpPage } from '@components/Utilities/HelpPage';
import { Brands } from '@components/Utilities/Brands';

export const Home = () => {
    return (
        <>
            <Herobanner />
            <ServicesPage />
            <Projects />
            <CarouselPage />
            <TestimonialPage />
            <HelpPage />
            <Brands />
        </>
    );
};
