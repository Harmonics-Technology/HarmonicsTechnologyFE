import { Home } from '@components/Standalone/Home';
import { GetServerSideProps } from 'next';
import React from 'react';

function index() {
    return <Home />;
}

export default index;

export const getServerSideProps: GetServerSideProps = async () => {
    return {
        redirect: {
            permanent: true,
            destination: '/home',
        },
        props: {},
    };
};
