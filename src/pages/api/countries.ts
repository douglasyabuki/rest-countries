// Interfaces
import { ICountry } from '@/interfaces/ICountry'

// Const
import { countriesData } from './countries/countriesData'

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

// Defining Data type
type Data = {
  allInfo: ICountry[]
}

// Next API function that handles general requests to pages/api/countries without specific code
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  // Defining a const that receives all data
  const allInfo = countriesData;

  // Returns all data for a get request
  if (req.method === 'GET') {
    res.status(200).json({ allInfo })
  } else {
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
