import {
    Box,
    Button,
    Divider,
    Flex,
    HStack,
    Heading,
    Icon,
    Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

interface PageTopProps {
    sub?: string;
    title?: string;
    desc?: string;
    bg?: string;
    align?: any;
    btn?: any;
    w?: any;
    mx?: any;
    dir?: any;
    project?: any;
    minH?: any;
}

export const PageTop = ({
    sub,
    title,
    desc,
    bg = 'white',
    align = 'center',
    btn,
    w = '45%',
    mx,
    dir,
    project,
    minH = '270px',
}: PageTopProps) => {
    return (
        <Flex
            justify="center"
            align={align}
            minH={minH}
            bgColor={bg}
            flexDir="column"
            w={w}
            mx={mx}
            ml={dir == 'ltr' ? '0' : 'auto'}
        >
            <Text
                fontFamily="General Sans"
                color="brand.100"
                textAlign={align}
                textTransform="uppercase"
                fontWeight="600"
                fontSize="20px"
            >
                {sub}
            </Text>
            <Heading
                fontFamily="DM Sans"
                color="#252525"
                textAlign={align}
                textTransform="capitalize"
                fontWeight="600"
                letterSpacing="-0.04em"
                fontSize="40px"
            >
                {title}
            </Heading>
            <Text
                fontFamily="DM Sans"
                color="#252525"
                textAlign={align}
                fontWeight="400"
                fontSize="20px"
                mt="1rem"
            >
                {desc}
            </Text>
            {btn && (
                <Button
                    variant="outline"
                    borderColor="brand.100"
                    color="brand.100"
                    fontSize="1rem"
                    fontWeight="500"
                    px="1.5rem"
                    // mt=".5rem"
                    borderRadius="4px"
                    h="3rem"
                    w="fit-content"
                    _hover={{
                        bgColor: 'brand.100',
                        color: 'white',
                    }}
                >
                    {btn}
                </Button>
            )}
            {project && (
                <Link passHref href={project}>
                    <HStack>
                        <Box>
                            <Text
                                fontFamily="Poppins"
                                // borderBottom="3px solid #D09ED7"
                                transition=".5s ease"
                                color="brand.100"
                                mb="0"
                                cursor="pointer"
                                _hover={{
                                    pr: '.5rem',
                                }}
                            >
                                Launch Project
                            </Text>
                            <Box borderBottom="3px solid #D09ED7" mt=".3rem" />
                        </Box>
                        <Icon as={FiArrowRight} color="brand.100" />
                    </HStack>
                </Link>
            )}
        </Flex>
    );
};
