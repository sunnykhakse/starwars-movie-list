
export const sortMvoies = (movies:Array<Movie>,sortBy:string) => {
    const sortedMovies = movies.sort((a:Movie, b:Movie) => {
        if(sortBy === 'episode'){
          return a.episode_id - b.episode_id
        }
        if(sortBy === 'release_date'){
          return new Date(a.release_date).getTime() - new Date(b.release_date).getTime()
        }
        if(sortBy === 'rating'){
          return a.average_rating - b.average_rating;
        }else{
          return 1
        }
    })
    return sortedMovies;
}