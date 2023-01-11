import { Button, Flex, Tooltip, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import BeatLoader from 'react-spinners/BeatLoader';

interface TimeProps {
    label: string;
    data: any;
    tip?: string;
}
export default function TimeSheetEstimation({ label, data, tip }: TimeProps) {
    return (
        <Flex
            flexDirection="column"
            fontSize=".8rem"
            width="100%"
            cursor="default"
        >
            <Flex
                border="1px solid"
                m="0"
                py="1rem"
                px=".5rem"
                w="full"
                justify="center"
                align="center"
                fontWeight="500"
                borderColor="#e5e5e5"
            >
                <Text mb="0" noOfLines={1}>
                    {label}
                </Text>
            </Flex>
            <Tooltip
                label={tip}
                hasArrow
                bgColor="gray.300"
                color="black"
                placement="bottom"
            >
                <Flex
                    border="1px solid"
                    m="0"
                    h="3rem"
                    w="full"
                    justify="center"
                    align="center"
                    fontWeight="500"
                    borderColor="#e5e5e5"
                >
                    {data}
                </Flex>
            </Tooltip>
        </Flex>
    );
}
export function TimeSheetEstimationBtn({
    id,
    loading,
    title,
    click,
    bg = 'brand.400',
}: {
    id: any;
    loading: boolean;
    title: string;
    click?: any;
    bg?: string;
}) {
    const router = useRouter();
    return (
        <Flex flexDirection="column" fontSize="1rem" width="100%">
            <Flex
                border="1px solid"
                m="0"
                h="full"
                w="full"
                justify="center"
                align="center"
                fontWeight="500"
                borderColor="#e5e5e5"
                p="1.5rem .8rem"
            >
                <Button
                    bgColor={bg}
                    borderRadius="0"
                    h="full"
                    width="100"
                    color="white"
                    isLoading={loading}
                    spinner={<BeatLoader color="white" size={10} />}
                    onClick={click}
                >
                    {title}
                </Button>
            </Flex>
            {/* <Flex
                border="1px solid"
                m="0"
                h="3rem"
                w="full"
                justify="center"
                align="center"
                fontWeight="500"
                borderColor="#e5e5e5"
            ></Flex> */}
        </Flex>
    );
}
