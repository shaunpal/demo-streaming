import React, {createContext, useState} from "react";

export const MovieContext = createContext();

export const MovieProvider = props => {
    const [movies, setMovies] = useState(require('../resource/sample.json').entries);

    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}
