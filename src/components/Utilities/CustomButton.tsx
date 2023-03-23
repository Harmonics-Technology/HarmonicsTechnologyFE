import { Button, Image } from '@chakra-ui/react';
import React from 'react';

interface customBtnProps {
    bg?: string;
    color?: string;
    text: string;
    icon?: any;
    img?: any;
    variant?: any;
    onClick?: any;
}

export const CustomButton = ({
    bg = 'brand.400',
    color = 'white',
    text,
    icon,
    img,
    variant,
    onClick,
}: customBtnProps) => {
    return (
        <Button
            bgColor={bg}
            color={color}
            fontSize="14px"
            borderRadius="8px"
            borderColor={variant ? color : 'none'}
            h="3.1rem"
            px="1.5rem"
            variant={variant}
            onClick={onClick}
            _hover={{
                bgColor: 'brand.500',
            }}
        >
            {text} {icon}
            {img && <Image src={img} pl="1rem" />}
        </Button>
    );
};
