export type CatImageType = {
    id: number;
    width: number;
    height: number;
    url: string;
};

export type BreedType = {
    id: string;
    name: string;
    description: string;
    origin: string;
    life_span: string;
    temperament: string;
    adaptability: number;
    affection_level: number;
    child_friendly: number;
    grooming: number;
    intelligence: number;
    health_issues: number;
    social_needs: number;
    stranger_friendly: number;
    image: CatImageType;
};
