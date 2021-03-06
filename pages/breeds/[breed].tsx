import { Box, Flex, Heading, Text, VStack, Wrap } from '@chakra-ui/react';
import { CatBreedItem } from '@components/cat-breed-item';
import { Page } from '@components/page';
import { Stats } from '@components/stats';
import { BreedType, CatImageType } from '@dataTypes/breed';
import { api } from '@utils/api';
import { toName } from '@utils/toName';
import { toPath } from '@utils/toPath';
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';

type Props = {
    breed: BreedType;
    images: CatImageType[];
};

const characteristics = [
    'adaptability',
    'affection_level',
    'child_friendly',
    'grooming',
    'intelligence',
    'health_issues',
    'social_needs',
    'stranger_friendly',
];

const Breed: React.FC<Props> = ({ breed, images }) => {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { name, description, temperament, origin, life_span } = breed;
    const [mainImage, ...otherImages] = images;
    return (
        <Page>
            <Flex mb={10}>
                <Box width="35%" mr={10}>
                    <CatBreedItem size="xl" url={mainImage.url} isFirstItemStyled />
                </Box>
                <VStack align="flex-start" width="65%" spacing={6}>
                    <Heading>{name}</Heading>
                    <Text>{description}</Text>
                    <Flex>
                        <Text fontWeight="semibold">Temperament:&nbsp;</Text>
                        <Text>{temperament}</Text>
                    </Flex>
                    <Flex>
                        <Text fontWeight="semibold">Origin:&nbsp;</Text>
                        <Text>{origin}</Text>
                    </Flex>
                    <Flex>
                        <Text fontWeight="semibold">Life Span:&nbsp;</Text>
                        <Text>{life_span}</Text>
                    </Flex>
                    <VStack align="flex-start" spacing={8}>
                        {characteristics.map((characteristic) => (
                            <Stats
                                key={characteristic}
                                statName={characteristic}
                                statIndex={breed[characteristic]}
                            />
                        ))}
                    </VStack>
                </VStack>
            </Flex>
            <Heading mb={20}>Other photos</Heading>
            <Wrap spacing={12} justify="center" mb={44}>
                {otherImages.map(({ url, id }) => (
                    <CatBreedItem key={id} url={url} size="lg" />
                ))}
            </Wrap>
        </Page>
    );
};

export const getStaticProps: GetStaticProps<Props> = async ({ params: { breed } }) => {
    const breedName = toName(breed);
    const [currentBreed]: BreedType[] = await api.searchBreeds({
        q: breedName,
    });
    const images = await api.getImages({ breed_id: currentBreed.id, limit: 9 });
    return {
        props: { breed: currentBreed, images },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const breeds = await api.getAllBreeds();

    return {
        paths: breeds.map(({ name }) => ({
            params: {
                breed: toPath(name),
            },
        })),
        fallback: false,
    };
};

export default Breed;
