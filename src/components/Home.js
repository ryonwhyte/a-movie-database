import React, {useState, useEffect} from "react";
//API
import API from '../API';
//Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from '../config';

//Components
import {useHomeFetch} from '../hooks/useHomeFetch';
//Hook

//Image
import No_Image from '../images/no_image.jpg';

const Home = () => {
    //console.log(state);
    const { state, loading, error } = useHomeFetch();
    console.log(state);
    return <div>
            <h1>Ryon Home</h1>  
        </div>
}


export default Home;

