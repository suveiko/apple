// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  // eslint-disable-next-line no-undef
  categories: Category[];
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>): void {
  console.log(req, res);
  // const categories = await sanityClient.fetch(query);
}
