import { Herobanner } from '@components/Utilities/Herobanner';
import { ServicesPage } from '@components/Utilities/ServicesPage';
import { Projects } from '@components/Utilities/Projects';
import React from 'react';

export const Home = () => {
    return (
        <>
            <Herobanner />
            <ServicesPage />
            <Projects/>
        </>
    );
};
