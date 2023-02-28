// Interfaces
import { ICountry } from '@/interfaces/ICountry'

// Const
import { countriesData } from './countriesData'

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

// Defining Data type
type Data = {
    specificInfo: ICountry
}

type NoData = {
    message: string
}

// Next API function that handles general requests to pages/api/countries without specific code
export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data | NoData>
) {

    // Defining request query
    const { cca3 } = req.query

    // Condition to discard invalid query formats
    if (typeof cca3 !== 'string') {
        res.status(404).json({ message: 'Invalid country code' })
        return
    }

    //  Matching request to data
    const specificInfo = countriesData.find(
        (country) => country.cca3.toLowerCase() === cca3.toLowerCase()
    )

    //   Returning data if existent
    if (req.method === 'GET') {
        specificInfo
            ? res.status(200).json({ specificInfo })
            : res.status(404).json({ message: 'Country not found' })
    } else {
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}