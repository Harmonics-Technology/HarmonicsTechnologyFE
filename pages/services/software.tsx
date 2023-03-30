import { SingleServicePage } from '@components/Standalone/SingleServicePage';
import React from 'react';

const software = () => {
    return (
        <SingleServicePage
            title={'Software Development'}
            desc={
                'Building powerful and responsive websites that drive results.'
            }
            bg={'url("/assets/pageoverlay.jpg")'}
            pageDesc={`Software development as a service offered by a software development agency refers to the process of developing custom software solutions for clients.<br/><br/>
            The agency's development team works closely with the client to understand their specific needs and requirements and then designs, develops, and tests software solutions that meet those needs.<br/><br/>
            The software development process includes several stages, such as requirements gathering, software design, coding, testing, and maintenance. The team may use various programming languages and software development frameworks to create solutions that are tailored to the client's unique needs.<br/><br/>
            By offering software development as a service, software development agencies help their clients to streamline their business processes, improve efficiency, and reduce costs. Custom software solutions can automate repetitive tasks, increase productivity, and provide valuable insights into business operations.`}
            pageImg={'/assets/graphics.jpg'}
        />
    );
};

export default software;
