import { Image } from '@chakra-ui/image';
import { Box, Text, WrapItem } from '@chakra-ui/layout';
import { Skeleton } from '@chakra-ui/react';
import { BreedType, CatImageType } from '@dataTypes/breed';
import React from 'react';

type Props = {
    name?: BreedType['name'];
    url: CatImageType['url'];
};

export const CatBreedItem: React.FC<Props> = ({ name, url }) => {
    return (
        <WrapItem
            position="relative"
            zIndex="1"
            _first={{
                _before: {
                    content: '""',
                    position: 'absolute',
                    display: 'inline-block',
                    zIndex: -1,
                    top: 5,
                    left: -5,
                    boxSize: '3xs',
                    borderRadius: 'xl',
                    bgColor: 'primary.medium',
                },
            }}
        >
            <Box>
                <Image
                    src={url}
                    alt={name}
                    boxSize="2xs"
                    borderRadius="2xl"
                    objectFit="cover"
                    zIndex="2"
                ></Image>
                {name && <Text fontWeight="semibold">{name}</Text>}
            </Box>
        </WrapItem>
    );
};
