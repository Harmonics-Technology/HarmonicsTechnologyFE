import { Box, Grid, Heading, Text, VStack, HStack, Icon, Spinner } from '@chakra-ui/react';
import { ContactBanner } from '@components/Utilities/ContactBanner';
import { PageTop } from '@components/Utilities/PageTop';
import { ServiceItem } from '@components/Utilities/ServiceItem';
import React from 'react';
import { FiCheck } from 'react-icons/fi';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { useGeolocation } from '@components/HooksHelpers/useGeolocation';

const Branding = () => {
    const { currency, currencySymbol, isLoading } = useGeolocation();

    // Pricing data structure with both currencies
    const pricingData = [
        {
            name: 'Starter',
            priceNGN: 1200000, // ₦1,200,000
            priceUSD: 1500,    // $1,500
            description: 'Perfect for startups and small businesses looking to establish their brand identity',
            features: [
                'Brand Strategy Consultation',
                'Logo Design (3 concepts)',
                'Brand Color Palette',
                'Typography Guidelines',
                'Business Card Design',
                'Brand Style Guide (Basic)',
                '2 Rounds of Revisions',
            ],
        },
        {
            name: 'Professional',
            priceNGN: 2800000, // ₦2,800,000
            priceUSD: 3500,    // $3,500
            description: 'Comprehensive branding solution for growing businesses',
            features: [
                'Everything in Starter',
                'Logo Design (5 concepts)',
                'Brand Positioning Strategy',
                'Brand Messaging Framework',
                'Social Media Templates',
                'Letterhead & Email Signature',
                'Brand Style Guide (Advanced)',
                'Marketing Collateral Design',
                '4 Rounds of Revisions',
            ],
            popular: true,
        },
        {
            name: 'Enterprise',
            priceNGN: null,    // Custom pricing
            priceUSD: null,    // Custom pricing
            description: 'Complete brand transformation for established companies',
            features: [
                'Everything in Professional',
                'Comprehensive Market Research',
                'Competitor Analysis',
                'Brand Architecture',
                'Brand Voice & Tone Guidelines',
                'Complete Marketing Suite',
                'Brand Launch Strategy',
                'Ongoing Brand Support',
                'Unlimited Revisions',
            ],
        },
    ];

    // Function to format price based on currency
    const formatPrice = (priceNGN: number | null, priceUSD: number | null) => {
        if (priceNGN === null || priceUSD === null) {
            return 'Custom';
        }

        const price = currency === 'NGN' ? priceNGN : priceUSD;
        
        if (currency === 'NGN') {
            return `${currencySymbol}${price.toLocaleString('en-NG')}`;
        } else {
            return `${currencySymbol}${price.toLocaleString('en-US')}`;
        }
    };

    return (
        <Box>
            <PageTop
                title={'Branding Services'}
                desc={
                    'Build a Powerful Brand Identity That Resonates with Your Audience'
                }
                mx="auto"
                minH={['12.5rem', '30.37rem']}
                bg={'url("/assets/pageoverlay.jpg")'}
                color="white"
                w={['80%', '30%']}
            />
            
            <Box w="80%" m={['1rem auto 3rem', '5rem auto']}>
                <ServiceItem
                    desc={`Your brand is more than just a logo—it's the complete experience your customers have with your business. Our comprehensive branding services help you create a memorable identity that sets you apart from the competition. <br/><br/><br/>We work closely with you to understand your business values, target audience, and market positioning. From strategy to execution, we craft cohesive brand identities that tell your unique story and connect emotionally with your customers. <br/><br/><br/>Our branding services encompass logo design, color schemes, typography, messaging, and comprehensive brand guidelines that ensure consistency across all touchpoints. Whether you're launching a new venture or refreshing an established brand, we have the expertise to bring your vision to life.`}
                    btn="Work with us"
                    dir="ltr"
                    img={"/assets/create.jpg"}
                    w="100%"
                />
            </Box>

            {/* Pricing Section */}
            <Box bg="gray.50" py={['3rem', '5rem']}>
                <Box w="80%" mx="auto">
                    <AnimationOnScroll animateIn="animate__fadeInUp">
                        <Heading
                            fontFamily={['BR Firma', 'DM Sans']}
                            color="brand.200"
                            textAlign="center"
                            fontWeight="600"
                            fontSize={['24px', '40px']}
                            mb="1rem"
                        >
                            Pricing Plans
                        </Heading>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate__fadeInUp">
                        <Text
                            fontFamily="DM Sans"
                            color="brand.200"
                            textAlign="center"
                            fontSize={['1rem', '18px']}
                            mb={['2rem', '4rem']}
                            maxW="600px"
                            mx="auto"
                        >
                            Choose the perfect branding package for your business needs. All plans include dedicated support and consultation.
                        </Text>
                    </AnimationOnScroll>

                    {isLoading && (
                        <Box textAlign="center" mb="2rem">
                            <Spinner size="lg" color="brand.100" />
                            <Text mt="1rem" fontFamily="DM Sans" color="brand.200">
                                Loading pricing for your location...
                            </Text>
                        </Box>
                    )}

                    <Grid
                        templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(3, 1fr)']}
                        gap={['2rem', '2rem']}
                        opacity={isLoading ? 0.5 : 1}
                        transition="opacity 0.3s ease"
                    >
                        {pricingData.map((tier, index) => (
                            <AnimationOnScroll
                                animateIn="animate__fadeInUp"
                                delay={index * 100}
                                key={tier.name}
                            >
                                <Box
                                    bg="white"
                                    p={['1.5rem', '2rem']}
                                    borderRadius="8px"
                                    boxShadow={tier.popular ? '0 10px 40px rgba(160, 60, 174, 0.2)' : '0 4px 20px rgba(0,0,0,0.08)'}
                                    border={tier.popular ? '2px solid' : '1px solid'}
                                    borderColor={tier.popular ? 'brand.100' : 'gray.200'}
                                    position="relative"
                                    transition="all 0.3s ease"
                                    _hover={{
                                        transform: 'translateY(-8px)',
                                        boxShadow: '0 12px 48px rgba(160, 60, 174, 0.25)',
                                    }}
                                    h="full"
                                >
                                    {tier.popular && (
                                        <Box
                                            position="absolute"
                                            top="-12px"
                                            left="50%"
                                            transform="translateX(-50%)"
                                            bg="brand.100"
                                            color="white"
                                            px="1rem"
                                            py="0.25rem"
                                            borderRadius="20px"
                                            fontSize="14px"
                                            fontWeight="600"
                                        >
                                            Most Popular
                                        </Box>
                                    )}
                                    <VStack align="stretch" spacing="1.5rem">
                                        <Box>
                                            <Text
                                                fontFamily="DM Sans"
                                                fontSize="18px"
                                                fontWeight="600"
                                                color="brand.200"
                                                mb="0.5rem"
                                            >
                                                {tier.name}
                                            </Text>
                                            <Heading
                                                fontFamily={['BR Firma', 'DM Sans']}
                                                fontSize={['32px', '40px']}
                                                fontWeight="700"
                                                color="brand.100"
                                                mb="0.5rem"
                                            >
                                                {formatPrice(tier.priceNGN, tier.priceUSD)}
                                            </Heading>
                                            <Text
                                                fontFamily="DM Sans"
                                                fontSize="14px"
                                                color="gray.600"
                                                lineHeight="1.6"
                                            >
                                                {tier.description}
                                            </Text>
                                        </Box>

                                        <Box
                                            borderTop="1px solid"
                                            borderColor="gray.200"
                                            pt="1.5rem"
                                        >
                                            <VStack align="stretch" spacing="0.75rem">
                                                {tier.features.map((feature) => (
                                                    <HStack key={feature} spacing="0.75rem" align="start">
                                                        <Icon
                                                            as={FiCheck}
                                                            color="brand.100"
                                                            fontSize="18px"
                                                            mt="2px"
                                                        />
                                                        <Text
                                                            fontFamily="DM Sans"
                                                            fontSize="14px"
                                                            color="brand.200"
                                                            flex="1"
                                                        >
                                                            {feature}
                                                        </Text>
                                                    </HStack>
                                                ))}
                                            </VStack>
                                        </Box>
                                    </VStack>
                                </Box>
                            </AnimationOnScroll>
                        ))}
                    </Grid>

                    {/* Additional Information */}
                    <AnimationOnScroll animateIn="animate__fadeInUp">
                        <Box
                            mt={['3rem', '4rem']}
                            bg="white"
                            p={['1.5rem', '2rem']}
                            borderRadius="8px"
                            borderLeft="4px solid"
                            borderColor="brand.100"
                        >
                            <Heading
                                fontFamily="DM Sans"
                                fontSize={['18px', '24px']}
                                fontWeight="600"
                                color="brand.200"
                                mb="1rem"
                            >
                                What's Included in All Packages
                            </Heading>
                            <Grid
                                templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']}
                                gap="1rem"
                            >
                                <HStack spacing="0.75rem">
                                    <Icon as={FiCheck} color="brand.100" fontSize="20px" />
                                    <Text fontFamily="DM Sans" fontSize="16px" color="brand.200">
                                        Dedicated Brand Strategist
                                    </Text>
                                </HStack>
                                <HStack spacing="0.75rem">
                                    <Icon as={FiCheck} color="brand.100" fontSize="20px" />
                                    <Text fontFamily="DM Sans" fontSize="16px" color="brand.200">
                                        Source Files Included
                                    </Text>
                                </HStack>
                                <HStack spacing="0.75rem">
                                    <Icon as={FiCheck} color="brand.100" fontSize="20px" />
                                    <Text fontFamily="DM Sans" fontSize="16px" color="brand.200">
                                        Full Ownership Rights
                                    </Text>
                                </HStack>
                                <HStack spacing="0.75rem">
                                    <Icon as={FiCheck} color="brand.100" fontSize="20px" />
                                    <Text fontFamily="DM Sans" fontSize="16px" color="brand.200">
                                        60-Day Support Period
                                    </Text>
                                </HStack>
                            </Grid>
                        </Box>
                    </AnimationOnScroll>
                </Box>
            </Box>

            <ContactBanner
                heading="Ready to Build Your Brand?"
                sub="Let's create a brand identity that captures your vision and resonates with your audience. Schedule a free consultation to discuss your branding needs."
                btn="Get Started Today"
                img="/assets/contactc.jpg"
            />
        </Box>
    );
};

export default Branding;
