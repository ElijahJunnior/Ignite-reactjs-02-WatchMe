import { createContext } from "react";

type SelectedGenreContextData = {
    selectedGenreId: number,
    setSelectedGenreId: (genreId: number) => void
}

const SelectedGenreContext = createContext({} as SelectedGenreContextData);

export { SelectedGenreContext }