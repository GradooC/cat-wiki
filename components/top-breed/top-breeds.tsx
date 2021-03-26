import { Box, Heading, HStack, Text, VStack } from '@chakra-ui/layout';
import { CatBreedItem } from '@components/cat-breed-item';
import { BreedType, CatImageType } from '@dataTypes/breed';
import React from 'react';

type Props = {
    images: CatImageType[];
};

export const TopBreeds: React.FC<Props> = ({ images }) => {
    return (
        <VStack align="start" my={14} spacing={14}>
            {images.map(({ url, id, breeds }, index) => (
                <HStack key={id} align="start">
                    <Box mr={12} minW={44}>
                        <CatBreedItem url={url}></CatBreedItem>
                    </Box>
                    <Box>
                        <Heading mb={6} fontWeight="semibold">{`${index + 1}. ${
                            breeds[0].name
                        }`}</Heading>
                        <Text>{breeds[0].description}</Text>
                    </Box>
                </HStack>
            ))}
        </VStack>
    );
};
