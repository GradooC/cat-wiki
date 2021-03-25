import { BreedType, CatImageType } from '@dataTypes/breed';
import { isEmpty } from 'lodash';

type SearchBreedQueryType = {
    q?: string;
};

type GetImagesQueryType = {
    breed_id: string;
    limit: number;
};

class Api {
    private async fetcher(
        endPoint: string,
        query: SearchBreedQueryType | GetImagesQueryType = {}
    ) {
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

        const url = `https://api.thecatapi.com/v1${endPoint}${queryString}`;

        const res = await fetch(url, {
            headers: { 'x-api-key': process.env.API_KEY },
        });

        return await res.json();
    }

    async getAllBreeds(): Promise<BreedType[]> {
        return await this.fetcher('/breeds');
    }

    async searchBreeds(query: SearchBreedQueryType = {}): Promise<BreedType[]> {
        return await this.fetcher('/breeds/search', query);
    }

    async getImages(query: GetImagesQueryType): Promise<CatImageType[]> {
        return await this.fetcher('/images/search', query);
    }
}

export const api = new Api();
