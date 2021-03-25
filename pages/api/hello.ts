// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { body } = await fetch('https://api.thecatapi.com/v1/breeds', {
        headers: { 'x-api-key': 'b6afda78-2792-427d-9ed6-2b8f92bcfbea' },
    });
    console.log("🚀 ~ file: hello.ts ~ line 6 ~ body", body)
    res.status(200).json({ name: 'John Doe' });
};
