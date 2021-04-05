import { BreedType, CatImageType } from '@dataTypes/breed';
import { isEmpty, flatten } from 'lodash';

type SearchBreedQueryType = {
    q?: string;
};

type GetImagesQueryType = {
    breed_id: string;
    limit: number;
};

class Api {
    private host = 'https://api.thecatapi.com/v1';

    private async fetcher(endPoint: string, query: SearchBreedQueryType | GetImagesQueryType = {}) {
        const stringifiedQuery = Object.entries(query).reduce(
            (acc, [key, value]) => ({
                ...acc,
                [key]: String(value),
            }),
            {}
        );
        const queryString = isEmpty(query)
            ? ''
            : `?${new URLSearchParams(stringifiedQuery).toString()}`;

        const url = `${this.host}${endPoint}${queryString}`;

        const res = await fetch(url, {
            headers: { 'x-api-key': process.env.API_KEY },
        });

        return await res.json();
    }

    async getAllBreeds(): Promise<BreedType[]> {
        return this.fetcher('/breeds');
    }

    async searchBreeds(query: SearchBreedQueryType = {}): Promise<BreedType[]> {
        return this.fetcher('/breeds/search', query);
    }

    async getImages(query: GetImagesQueryType): Promise<CatImageType[]> {
        return this.fetcher('/images/search', query);
    }

    async getImageById(id: string): Promise<CatImageType> {
        return this.fetcher(`/images/${id}`);
    }

    async getBreedsByNames(breedsNames: string[]): Promise<CatImageType[]> {
        const breedsArray = await Promise.all(
            breedsNames.map((breedName) => this.searchBreeds({ q: breedName }))
        );
        const flattedBreeds = flatten(breedsArray);
        const images = await Promise.all(
            flattedBreeds.map(({ reference_image_id }) => this.getImageById(reference_image_id))
        );

        return images;
    }
}

export const api = new Api();
