import { Box, Flex } from '@chakra-ui/layout';
import { CatBreedItem } from '@components/cat-breed-item';
import { Page } from '@components/page';
import { BreedType, CatImageType } from '@dataTypes/breed';
import { api } from '@utils/api';
import { toPath } from '@utils/toPath';
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';

type Props = {
    breed: BreedType;
    images: CatImageType[];
};

const Breed: React.FC<Props> = ({ breed, images }) => {
    const { name } = breed;
    console.log("🚀 ~ file: [breed].tsx ~ line 18 ~ images", images)
    const [mainImage, ...otherImages] = images;
    return (
        <Page>
            <Flex>
                <Box width="30%">
                    <CatBreedItem name={name} url={mainImage.url}></CatBreedItem>
                </Box>
                <Box width="70%"></Box>
            </Flex>
        </Page>
    );
};

export const getStaticProps: GetStaticProps<Props> = async ({
    params: { breed },
}) => {
    const breedName = (breed as string).replace('-', ' ');
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
