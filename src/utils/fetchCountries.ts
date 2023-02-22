// Interfaces
import { ICountry } from "@/interfaces/ICountry";

const fetchData = async() => {
    const req = await fetch(`/api/countries`);
    const json = await req.json();
    return json;
}

export async function fetchCountries(): Promise<ICountry[]> {
    let countries = await fetchData();
    return countries;
}