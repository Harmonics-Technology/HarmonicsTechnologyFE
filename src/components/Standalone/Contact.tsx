import { Accordion, Box, Flex } from '@chakra-ui/react';
import { AccordionSingle } from '@components/Layouts/AccordionSingle';
import { ContactItem } from '@components/Layouts/ContactItem';
import { PageTop } from '@components/Utilities/PageTop';
import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { BsWhatsapp, BsEnvelope } from 'react-icons/bs';

export const Contact = () => {
    return (
        <Box>
            <PageTop
                title="Contact Us"
                desc="Schedule your appointment right away to get thorough information. We're here to assist you!"
                mx="auto"
                w="35%"
                minH="30.37rem"
                bg="#EFE9FC"
            />
            <Flex
                justify="space-between"
                align="center"
                w="80%"
                mx="auto"
                mt="5rem"
                mb="7rem"
                gap="4rem"
            >
                <AnimationOnScroll animateIn="animate__fadeInLeft" duration={1}>
                    <ContactItem
                        icon={BsWhatsapp}
                        title={'WhatsApp'}
                        desc={
                            'Get personalised technology solutions with our knowledgeable professionals. Please chat with us.'
                        }
                        sub={'+234 818 004 1801 || +234 802 627 6484'}
                    />
                </AnimationOnScroll>
                <AnimationOnScroll
                    animateIn="animate__fadeInRight"
                    duration={1}
                >
                    <ContactItem
                        icon={BsEnvelope}
                        title={'Email'}
                        desc={
                            'Do you have questions or want to book a consultation? We can help you through our email channel.'
                        }
                        sub={'info@harmonicstechnology.com'}
                    />
                </AnimationOnScroll>
            </Flex>
            <PageTop
                sub="FREQUENTLY ASKED QUESTIONS"
                title="Do you still have questions?"
                mx="auto"
                w="35%"
                minH="13rem"
            />
            <Box w="80%" mx="auto" mb="6rem">
                <Accordion
                    defaultIndex={[0]}
                    // allowMultiple
                    gap="1.5rem"
                    display="flex"
                    flexDirection="column"
                >
                    <AccordionSingle
                        title="What is Harmonics Technology ?"
                        content="Harmonics Technology designs thoughtful user interfaces and builds inventive applications that are tailored to our clients' unique requirements. "
                    />
                    <AccordionSingle
                        title="What is web development?"
                        content="Web development is the process of creating websites and web applications using programming languages, frameworks, and tools. It involves designing, developing, testing, and maintaining websites to ensure they are user-friendly, functional, and meet the needs of the business or organization."
                    />
                    <AccordionSingle
                        title="What services do you offer as a web development agency?"
                        content="As a web development agency, we offer a range of services that include website design and development, e-commerce solutions, web application development, mobile application development, content management systems, website maintenance and support, website hosting, and search engine optimization (SEO)."
                    />
                    <AccordionSingle
                        title="What is the cost of developing a website?"
                        content="The cost of developing a website depends on various factors, such as the complexity of the website, the number of features required, and the size of the team working on the project. As a web development agency, we provide customized quotes to our clients based on their specific requirements and needs."
                    />
                    <AccordionSingle
                        title="What is the time duration for developing a website?"
                        content="The time it takes to develop a website depends on various factors, such as the complexity of the website, the number of features required, and the size of the team working on the project. Generally, a simple website can take a few weeks to develop, while a more complex website can take several months."
                    />
                    <AccordionSingle
                        title="Do you offer website maintenance and support?"
                        content="Yes, we offer website maintenance and support services to ensure that your website is up-to-date, secure, and running smoothly. We provide ongoing maintenance, updates, and support to help you make the most of your website and ensure that it continues to meet your business needs."
                    />
                    <AccordionSingle
                        title="Do you offer website hosting services? "
                        content="Harmonics Technology designs thoughtful user interfaces and builds inventive applications that are tailored to our clients' unique requirements. "
                    />
                    <AccordionSingle
                        title="Do you provide SEO services? "
                        content="Yes, we provide SEO (search engine optimization) services to help our clients improve their website's ranking on search engine results pages. Our SEO services include keyword research, on-page optimization, link building, and other strategies to improve website visibility and traffic."
                    />
                    <AccordionSingle
                        title="Can you help us with website content creation? "
                        content="Yes, we offer website content creation services to help our clients create high-quality, engaging content that aligns with their brand and marketing objectives. Our content creation services include copywriting, blog writing, social media content, and more."
                    />
                    <AccordionSingle
                        title="Do you provide training and support for using my new website?"
                        content="Yes, we provide training and support for using your new website. We offer comprehensive training to ensure that you understand how to use your website's features and functionalities, and we provide ongoing support to help you with any questions or issues you may have."
                    />
                    <AccordionSingle
                        title="Can you develop websites for mobile devices?"
                        content="Yes, we can develop websites that are optimized for mobile devices to ensure that your website is accessible and user-friendly on smartphones and tablets. We use responsive design techniques to ensure that your website adapts to different screen sizes and resolutions. We can also develop mobile applications that are tailored to your business needs."
                    />
                    <AccordionSingle
                        title="What is your process for website development?"
                        content="Our process for website development typically includes several stages, including discovery and research, planning and strategy, design and development, testing and quality assurance, and launch and maintenance. We work closely with our clients throughout the process to ensure that their needs and objectives are met."
                    />
                    <AccordionSingle
                        title="What is your approach to website design?"
                        content="Our approach to website design is to create custom designs that are tailored to our clients' specific needs and objectives. We work closely with our clients to understand their brand identity, target audience, and business goals, and we create designs that are visually appealing, user-friendly, and optimized for search engines."
                    />
                    <AccordionSingle
                        title="Can you integrate third-party applications and services into my website?"
                        content="Yes, we can integrate third-party applications and services into your website to enhance its functionality and provide a better user experience. This includes payment gateways, social media platforms, email marketing services, and more."
                    />
                </Accordion>
            </Box>
        </Box>
    );
};
