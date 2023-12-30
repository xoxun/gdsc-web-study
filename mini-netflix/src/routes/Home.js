import { useState,useEffect } from "react";
import Movie from "../components/Movie";

function Home(){
    const [loading,setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8ww&sort_by=year`)
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
    };
    useEffect(()=>{
        getMovies();
    },[]);
    console.log(movies);
  return(
    <div>
      {loading ? <h1>Loading...</h1> 
      : movies.map((item)=>(
          <Movie 
          key={item.id}
          id={item.id}
          coverImg={item.medium_cover_image}
          title={item.title}
          summary={item.summary}
          genres={item.genres}
          />
      ))}
    </div>);
}

export default Home;