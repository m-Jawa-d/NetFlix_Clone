import { React, useEffect, useState } from 'react'
import axios from 'axios';
import YouTube from 'react-youtube';
import MTrailer from 'movie-trailer';

const baseurl = "https://image.tmdb.org/t/p/original";

function Row({ title, url, isLargerRow }) {
  const [trailerUrl,  upTrailerUrl]=useState();
  const [movie, upMovie] = useState([]);
  useEffect(() => {
    const func = async () => {
      // const api_Key=`b1bcd518764c9ced91d1c21adad8eb44`;
      const res = await axios.get(`${url}`)
      upMovie(res.data.results)
      // return jsonRes;
    }
    func();
  }, [url]);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const imgTrailer =(val)=>{
    if(trailerUrl){
      upTrailerUrl('')
    }
    else{
      MTrailer(val?.name || val?.title || val?.orignal_name||'')
      .then((url)=>{
        const urlParams=new URLSearchParams(new URL(url).search);
        upTrailerUrl(urlParams.get("v"));
      })
      .catch((error)=>{console.log(error)})
    }
  }

  return (
    <>
      <div className='row_main'>
        <h2 className='row_heading'>{title}</h2>
        <div className="row_inner">
          {movie.map((val) => {
            return (<div className='movies_name'>
            <img onClick={()=>{imgTrailer(val)}} key={val.id} className={isLargerRow ? 'poster_img' : 'poster_path'} src={`${baseurl}${isLargerRow ? val.poster_path : val.backdrop_path}`} alt={val.original_title} />
            <p>{isLargerRow? null : val?.name || val?.title || val?.orignal_name}</p></div>
            );
          })}
        </div>
      </div>
      <div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </>
  )
}

export default Row;
// https://image.tmdb.org/t/p/orignal/pci1ArYW7oJ2eyTo2NMYEKHHiCP.jpg
