import { Box, Icon } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from 'react-scroll-to-top';
import { RxCaretUp } from 'react-icons/rx';

type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Header />
            <Box pt={['6rem', '0']}>{children}</Box>
            <Footer />
            <ScrollToTop
                smooth
                component={<Icon as={RxCaretUp} fontSize="1.5rem" />}
                className="scrollToTop"
            />
        </>
    );
};

export default Layout;
