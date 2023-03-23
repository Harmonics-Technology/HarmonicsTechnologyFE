import { SingleServicePage } from '@components/Standalone/SingleServicePage';
import React from 'react';

const product = () => {
    return (
        <SingleServicePage
            title={'Product Design'}
            desc={
                'Creating innovative and user-centred products through design.'
            }
            bg={'url("/assets/pageoverlay.png")'}
            pageDesc={`Product design as a service offered by a software development agency refers to the process of designing software products, such as applications or websites, with a focus on the user experience (UX) and user interface (UI). <br/><br/>
            The agency's design team works closely with the client to understand their business goals, target audience, and requirements, and then creates a comprehensive design plan that outlines the product's features, functionality, and aesthetics. <br/><br/>
            The design process may include wire-framing, prototyping, and user testing to ensure that the final product meets the client's needs and is intuitive and easy to use for the end-users. <br/><br/>By offering product design as a service, software development agencies help their clients to create software products that are not only visually appealing but also functionally efficient and user-friendly, leading to higher user engagement and customer satisfaction.`}
            pageImg={'/assets/product.png'}
        />
    );
};

export default product;
