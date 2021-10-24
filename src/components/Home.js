import React, {useState, useEffect} from "react";
//API
import API from '../API';
//Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from '../config';

//Components
import HeroImage from "./HeroImage";
import Grid from "./Grid";
import Thumb from "./Thumb";
import SearchBar from "./SearchBar";
import Spinner from "./Spinner";
import Button from "./Button";

//Hook
import {useHomeFetch} from '../hooks/useHomeFetch';

//Image
import No_Image from '../images/no_image.jpg';

const Home = () => {
    //console.log(state);
    const { state, loading, error, setSearchTerm, searchTerm } = useHomeFetch();
    console.log(state);
    return (
        <div>
            {!searchTerm && state.results[0] ? 
                <HeroImage
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                    title={state.results[0].original_title}
                    text={state.results[0].overview}
                /> 
                : null
            }
            <SearchBar setSearchTerm={setSearchTerm}/>
            <Grid header={searchTerm ? 'Search Results' : 'Popular Movies'}>
                {state.results.map(movie => (
                    <Thumb
                        key={movie.id}
                        clickable
                        image={
                            movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : No_Image
                        }
                        movieId={movie.id}
                    />
                ))}
            </Grid>
            { loading ?
                <Spinner/>
                : null
            }
            { state.page < state.total_pages && !loading &&(
                <Button text='Load More'/>
            )}
            
        </div>
    );
}


export default Home;

