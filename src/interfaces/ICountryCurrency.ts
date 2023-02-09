// Interface of the JSON response field "currency"
export interface ICountryCurrency {
    [key: string]: {
        name: string;
        symbol: string;
    };
}