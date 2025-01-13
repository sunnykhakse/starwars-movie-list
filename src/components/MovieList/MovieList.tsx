import React, {FC, MouseEventHandler} from 'react';
import './MovieList.css';
import StarRating from '../StarRating/StarRating';

interface MovieListProps{
    movies: Array<Movie>;
    selectedMovie: Movie | null;
    onSelectMovie: (movie: Movie) => void;
}

const MovieList:FC<MovieListProps> = ({movies, selectedMovie, onSelectMovie}) => {
    return(
        <table className='movie_list' border={0} cellSpacing={0}>
        <tbody>
            {movies.map((movie:Movie,index:number) => (
                <tr key={index} className={selectedMovie?.episode_id === movie.episode_id ? 'active' : ''} onClick={() => onSelectMovie(movie)}>
                    <td>EPISODE {movie.episode_id}</td>
                    <td>{movie.movie_title}</td>
                    <td>
                    <StarRating rating={movie.average_rating} />
                    </td>
                    <td>{movie.release_date}</td>
                </tr>
            ))}
        </tbody>
      </table>
    )
}

export default MovieList;