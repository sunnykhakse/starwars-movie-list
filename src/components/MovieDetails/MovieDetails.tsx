import {FC} from 'react';
import DOMPurify from 'dompurify'
import StarRating from '../StarRating/StarRating';
import './MovieDetails.css';
import MovieRatingTags from '../MovieRatingTags/MovieRatingTags';

interface MovieDetailsProps{
    movie: Movie | null;
    onClose: () => void;
}

const MovieDetails:FC<MovieDetailsProps> = ({movie, onClose}) => {

    if(!movie){
        return(<article><p>Please select a movie</p></article>)
    }
 
    return(
        <>
        <div className='close_button_box'>
            <span className='episode'>Episode {movie.episode_id}</span>
            <button title='Close' onClick={onClose}>X</button>
        </div>
        <article>
            <h1 className='movie_name'>{movie?.movie_title}</h1> 
            <div className='movie_image_and_description'>
                <img src={movie?.poster} alt={`Poster of ${movie?.movie_title}`}/>
                <p className='movie_description' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(movie?.opening_crawl || '') }}>
        
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
        </>
    )
}

export default MovieDetails;