export type CatImageType = {
    id: string;
    width: number;
    height: number;
    url: string;
    breeds: BreedType[];
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
    reference_image_id: string;
    image?: CatImageType;
};
