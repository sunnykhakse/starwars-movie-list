import React, {FC} from 'react';
import StarRating from '../StarRating/StarRating';
import './MovieDetails.css';
import MovieRatingTags from '../MovieRatingTags/MovieRatingTags';

interface MovieDetailsProps{
    movie: Movie | null;
}

const MovieDetails:FC<MovieDetailsProps> = ({movie}) => {

    if(!movie){
        return(<p>Please select a movie</p>)
    }
 
    return(
        <article>
            <h1 className='movie_name'>{movie?.movie_title}</h1> 
            <div className='movie_image_and_description'>
                <img src={movie?.poster} height={230} />
                <p className='movie_description' dangerouslySetInnerHTML={{ __html: (movie?.opening_crawl || '') }}>
        
                </p>
            </div>
            <div className='movie_directed_by'>
                Directed by: {movie?.director}
            </div>
            <div className='movie_rating'>
                Average rating: <StarRating rating={movie?.average_rating || 0} />
            </div>
            <MovieRatingTags ratings={movie.ratings} />
        </article>
    )
}

export default MovieDetails;