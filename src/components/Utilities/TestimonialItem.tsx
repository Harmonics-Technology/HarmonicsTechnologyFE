import { Box, Circle, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';

export const TestimonialItem = ({ img, content, name, role }) => {
    return (
        <Box
            border="1px solid"
            borderColor="brand.100"
            py="4rem"
            my="5rem"
            borderRadius="8px"
        >
            <VStack w="70%" pos="relative" mx="auto" spacing="3rem">
                <Circle
                    size="120px"
                    pos="absolute"
                    top="-40%"
                    // left="-101%"
                    overflow="hidden"
                >
                    <Image src={img} w="full" h="full" objectFit="cover" />
                </Circle>
                <Image
                    src="/assets/blockquote.png"
                    w="32px !important"
                    h="24px"
                />
                <Text
                    textAlign="center"
                    color="#252525"
                    lineHeight="24px"
                    fontSize=".9rem"
                >
                    {content}
                </Text>
                <Box>
                    <Text
                        fontFamily="BR Firma"
                        fontWeight="600"
                        fontSize="24px"
                        lineHeight="24px"
                        letterSpacing="-0.02em"
                        color="#2E2E2E"
                        textAlign="center"
                        mb=".5rem"
                    >
                        {name}
                    </Text>
                    <Text
                        fontFamily="Nunito"
                        fontWeight="400"
                        fontSize="12px"
                        lineHeight="24px"
                        textTransform="uppercase"
                        textAlign="center"
                        color="brand.100"
                    >
                        {role}
                    </Text>
                </Box>
            </VStack>
        </Box>
    );
};
