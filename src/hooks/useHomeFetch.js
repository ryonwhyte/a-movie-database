import {useEffect, useState} from "react";
//API
import API from '../API';

const initialState = {
    page:0,
    results : [],
    total_pages : 0,
    total_results: 0
}

export const useHomeFetch = () => {
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchMovies = async (page, searchTerm = 'The') => {
        try {
            setError(false);
            setLoading(true);
            const movies = await API.fetchMovies(searchTerm, page);
            //console.log(movies);
            setState(prev => ({
                ...movies,
                results:
                    page > 1 ? [...prev.results, ...movies.results]: [...movies.results]
            }))
        } catch (error){
            setError(true);
        }
        setLoading(false);
    };
    //Initial Render
   useEffect( () => {
        fetchMovies(1);
        console.log("The movies are fetched");
    }, [] );

    return { state, loading, error };
    
}