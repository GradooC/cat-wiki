export type CatImageType = {
    id: number;
    width: number;
    height: number;
    url: string;
};

export type BreedType = {
    id: string;
    name: string;
    image: CatImageType;
};
