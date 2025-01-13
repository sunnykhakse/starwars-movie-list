import React, {useState, useEffect} from 'react';

export const useMovieList = () => {
    const [movies, setMovies] = useState<Array<Movie>>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
              // Fetch movie list from SWAPI
              const swapiResponse = await fetch('https://swapi.py4e.com/api/films/');
              if (!swapiResponse.ok) {
                throw new Error('Failed to fetch movies from SWAPI');
              }
              const swapiData = await swapiResponse.json();
      
              // Map through the SWAPI movies and fetch additional details from OMDb
              const moviesWithDetails = await Promise.all(
                swapiData.results.map(async (movie:any) => {
                  // Use the movie title to fetch details from OMDb
                  const omdbResponse = await fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(movie.title)}&y=${movie.release_date.split('-')[0]}&apikey=b9a5e69d`);
                  if (!omdbResponse.ok) {
                    throw new Error(`Failed to fetch details for movie: ${movie.title}`);
                  }
                  const omdbData = await omdbResponse.json();
                  //Calculate average rating
                  const ratings = omdbData.Ratings.map((rating:Rating) => rating.Value.split('/')[0].replace('%',''))
                  const totalRating = ratings.reduce((acc:number,cur:any) => acc + (parseFloat(cur) > 10 ? parseFloat(cur) /10: parseFloat(cur)  ),0);
                  const avgRating = totalRating/3;
                  return {
                    ...movie,
                    average_rating: avgRating,
                    movie_title: omdbData.Title,
                    poster: omdbData.Poster,
                    ratings: omdbData.Ratings,
                  };
                })
              );
              setMovies(moviesWithDetails);
              setLoading(false);
            } catch (err) {
              setLoading(false);
            }
          };
      
          fetchMovies();
    },[])

    return {loading, movies}
}