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
                        content="Harmonics Technology designs thoughtful user interfaces and builds inventive applications that are tailored to our clients' unique requirements. "
                    />
                    <AccordionSingle
                        title="What services do you offer as a web development agency?"
                        content="Harmonics Technology designs thoughtful user interfaces and builds inventive applications that are tailored to our clients' unique requirements. "
                    />
                    <AccordionSingle
                        title="What is the cost of developing a website?"
                        content="Harmonics Technology designs thoughtful user interfaces and builds inventive applications that are tailored to our clients' unique requirements. "
                    />
                    <AccordionSingle
                        title="Do you offer website maintenance and support?"
                        content="Harmonics Technology designs thoughtful user interfaces and builds inventive applications that are tailored to our clients' unique requirements. "
                    />
                    <AccordionSingle
                        title="Do you offer website hosting services? "
                        content="Harmonics Technology designs thoughtful user interfaces and builds inventive applications that are tailored to our clients' unique requirements. "
                    />
                    <AccordionSingle
                        title="Do you provide SEO services? "
                        content="Harmonics Technology designs thoughtful user interfaces and builds inventive applications that are tailored to our clients' unique requirements. "
                    />
                    <AccordionSingle
                        title="Can you help us with website content creation? "
                        content="Harmonics Technology designs thoughtful user interfaces and builds inventive applications that are tailored to our clients' unique requirements. "
                    />
                    <AccordionSingle
                        title="Do you provide training and support for using my new website?"
                        content="Harmonics Technology designs thoughtful user interfaces and builds inventive applications that are tailored to our clients' unique requirements. "
                    />
                    <AccordionSingle
                        title="What is your process for website development?"
                        content="Our process for website development typically includes several stages, including discovery and research, planning and strategy, design and development, testing and quality assurance, and launch and maintenance. We work closely with our clients throughout the process to ensure that their needs and objectives are met."
                    />
                </Accordion>
            </Box>
        </Box>
    );
};
