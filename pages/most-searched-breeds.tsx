import { Heading } from '@chakra-ui/layout';
import { Page } from '@components/page';
import { TopBreeds } from '@components/top-breed/top-breeds';
import { BreedType, CatImageType } from '@dataTypes/breed';
import { api } from '@utils/api';
import { GetStaticProps } from 'next';
import React from 'react';

type Props = {
    images: CatImageType[];
};

const topBreeds = [
    'siamese',
    'persian',
    'maine coon',
    'ragdoll',
    'bengal',
    'abyssinian',
    'birman',
    'oriental shorthair',
    'sphynx',
    'devon rex',
];

const MostSearchedBreeds: React.FC<Props> = ({ images }) => {
    return (
        <Page>
            <Heading fontWeight="extrabold">Top 10 most searched breeds</Heading>
            <TopBreeds images={images}></TopBreeds>
        </Page>
    );
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
    const images = await api.getBreedsByNames(topBreeds);

    return {
        props: { images },
    };
};

export default MostSearchedBreeds;
