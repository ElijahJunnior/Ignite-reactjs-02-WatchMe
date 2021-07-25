import { createContext } from "react";

type SelectedGenreContextData = {
    selectedGenreId: number;
    setSelectedGenreId: (genreId: number) => void;
}

export const SelectedGenreContext = createContext({} as SelectedGenreContextData);