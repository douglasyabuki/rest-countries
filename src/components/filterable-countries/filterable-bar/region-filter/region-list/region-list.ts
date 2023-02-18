// Defining interface to region select options
interface Region {
    id: number,
    value: string,
    content: string
}

// Returns the list of options to be selected at RegionFilter.tsx
export const regionList:Region[] = [
    { id: 0, value: "Africa", content: "Africa" },
    { id: 1, value: "America", content: "America" },
    { id: 2, value: "Asia", content: "Asia" },
    { id: 3, value: "Europe", content: "Europe" },
    { id: 4, value: "Oceania", content: "Oceania" },
]