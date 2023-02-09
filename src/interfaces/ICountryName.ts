// Interface of the JSON response field "name"
export interface ICountryName {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
}