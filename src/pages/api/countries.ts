// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

type ListData = {

}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ListData>
) {
  if (req.method === 'GET') {
    res.status(200).json({ name: 'LALALAL' })
  } else {
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
