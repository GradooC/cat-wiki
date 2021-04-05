import { BreedType, CatImageType } from '@dataTypes/breed';
import { useToken, Image, Box, Text, WrapItem } from '@chakra-ui/react';
import React from 'react';

type Props = {
    url: CatImageType['url'];
    size?: 'sm' | 'md' | 'lg' | 'xl';
    name?: BreedType['name'];
    isFirstItemStyled?: boolean;
};

const sizes = [
    {
        label: 'sm',
        size: 44,
    },
    {
        label: 'md',
        size: 56,
    },
    {
        label: 'lg',
        size: 72,
    },
    {
        label: 'xl',
        size: 96,
    },
] as const;

export const CatBreedItem: React.FC<Props> = ({ name, size = 'sm', url, isFirstItemStyled }) => {
    const boxSize = sizes.find(({ label }) => label === size).size;
    const [token4, tokenSize] = useToken('space', [4, boxSize]);

    return (
        <WrapItem
            position="relative"
            _first={
                isFirstItemStyled && {
                    _before: {
                        content: '""',
                        position: 'absolute',
                        display: 'inline-block',
                        top: 4,
                        left: -4,
                        w: 4,
                        h: `calc(${tokenSize} - 2 * ${token4})`,
                        borderLeftRadius: 'xl',
                        bgColor: 'primary.medium',
                    },
                }
            }
        >
            <Box>
                <Image
                    src={url}
                    alt={name}
                    boxSize={boxSize}
                    borderRadius="2xl"
                    objectFit="cover"
                />
                {name && (
                    <Text mt={4} fontWeight="semibold">
                        {name}
                    </Text>
                )}
            </Box>
        </WrapItem>
    );
};
