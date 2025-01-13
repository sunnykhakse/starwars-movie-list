
export const sortMvoies = (movies:Array<Movie>,sortBy:string) => {
    const sortedMovies = movies.sort((a:Movie, b:Movie) => {
        switch(sortBy){
          case 'episode_asc':
            return a.episode_id - b.episode_id;
          case 'episode_desc':
            return b.episode_id - a.episode_id;
          case 'release_date_asc':
            return new Date(a.release_date).getTime() - new Date(b.release_date).getTime();
          case 'release_date_desc':
            return new Date(b.release_date).getTime() - new Date(a.release_date).getTime();
          case 'rating_asc':
            return a.average_rating - b.average_rating;
          case 'rating_desc':
            return b.average_rating - a.average_rating;
          default:
            return 1;       
        }
    })
    return sortedMovies;
}