import axios from 'axios';
import React, { useEffect, useState } from 'react';
import movies_requests from './movies_requests';

function Banner() {
    const [movie, upMovie] = useState([]);

    useEffect(() => {
        const func = async () => {
            const response = await axios.get(`${movies_requests.fetchNetflixOriginals}`)
            const advanceRes = response.data.results[Math.round(Math.random() * response.data.results.length)];
            upMovie(advanceRes);
        }
        func();
    }, [])

    return (
        <>
            <header className='header' style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`,
                backgroundPosition: 'center center'
            }}>
                <h1 className="banner_h">{movie?.name || movie?.title || movie?.orignal_name}</h1>
                <div className="button_main">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List </button>
                </div>
                <h1 className='banner_discrip'>{movie?.overview}</h1>
                <div className="banner_fade"/>
            </header>
        </>
    )
}

export default Banner
