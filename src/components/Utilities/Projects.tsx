import { Box, Button } from '@chakra-ui/react';
import React from 'react';
import { PageTop } from './PageTop';
import { ProjectItem } from './ProjectItem';

export const Projects = () => {
    return (
        <Box w="full">
            <PageTop
                sub="Our WORKS"
                title="Some Of Our  Projects"
                mx="auto"
                w="full"
                desc="Crafted with passion and precision, our work is a testament to our commitment to excellence."
                bg="#EFE9FC"
            />
            <ProjectItem
                title="Studio Mart"
                desc="We strive to provide the best possible experience for our customers, and we appreciate your trust and support."
                project="https://studiomart.com"
                cat={['Mobile', 'Web', 'Development', 'Product Design']}
                img="/assets/71.png"
            />
            <ProjectItem
                title="Property Mattaz"
                desc="We strive to provide the best possible experience for our customers, and we appreciate your trust and support."
                project="https://studiomart.com"
                cat={['Mobile', 'Web', 'Development']}
                img="/assets/98.png"
            />
            <ProjectItem
                title="Liquede"
                desc="We strive to provide the best possible experience for our customers, and we appreciate your trust and support."
                project="https://studiomart.com"
                cat={['Mobile', 'Web', 'Development', 'Product Design']}
                img="/assets/99.png"
            />
            <Box w="fit-content" mx="auto">
                <Button
                    variant="outline"
                    borderColor="brand.100"
                    color="brand.100"
                    fontSize="1rem"
                    fontWeight="500"
                    px="1.5rem"
                    mb="2rem"
                    borderRadius="4px"
                    h="3rem"
                    _hover={{
                        bgColor: 'brand.100',
                        color: 'white',
                    }}
                >
                    View All Projects
                </Button>
            </Box>
        </Box>
    );
};
