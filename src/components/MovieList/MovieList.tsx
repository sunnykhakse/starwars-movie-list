import React, {FC} from 'react';
import './MovieList.css';
import StarRating from '../StarRating/StarRating';

interface MovieListProps{
    movies: Array<any>;
}

const MovieList:FC<MovieListProps> = ({movies}) => {
    return(
        <table className='movie_list' border={0} cellSpacing={0}>
        <tbody>
            {movies.map((movie:number,index:number) => (
                <tr key={index}>
                    <td>Episode {movie}</td>
                    <td>Episode 1</td>
                    <td>
                    <StarRating rating={movie} />
                    </td>
                    <td>Episode 1</td>
                </tr>
            ))}
        </tbody>
      </table>
    )
}

export default MovieList;