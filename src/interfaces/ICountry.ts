// Interfaces
import { ICountryCurrency } from "./ICountryCurrency";
import { ICountryFlag } from "./ICountryFlag";
import { ICountryName } from "./ICountryName";

// Interface of the JSON response item
export interface ICountry {
    flags: ICountryFlag;
    name: ICountryName;
    tld: string[];
    currencies: ICountryCurrency;
    capital: string[];
    altSpellings: string[];
    languages:{
        [key: string]:string;
    };
    borders: any[];
    maps: {
        googleMaps: string;
        openStreetMaps: string;
    };
    region: string;
    population: number;
}