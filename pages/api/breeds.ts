import type { NextApiRequest, NextApiResponse } from 'next';
import { fetcher } from '@utils/api';
import { BreedType } from '@dataTypes/breed';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    console.log('🚀 ~ file: breeds.ts ~ line 6 ~ req', req.query);
    const breeds: BreedType[] = await fetcher('/breeds/search', req.query);
    console.log('🚀 ~ file: hello.ts ~ line 6 ~ body', breeds);
    res.status(200).json({ name: 'John Doe' });
};
