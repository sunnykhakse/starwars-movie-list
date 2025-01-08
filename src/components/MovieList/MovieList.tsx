import React, {FC} from 'react';
import './MovieList.css';
import StarRating from '../StarRating/StarRating';

interface MovieListProps{
    movies: Array<any>;
}

const MovieList:FC<MovieListProps> = ({movies}) => {
    const date = '1999-05-09';
    return(
        <table className='movie_list' border={0} cellSpacing={0}>
        <tbody>
            {movies.map((movie:number,index:number) => (
                <tr key={index}>
                    <td>Episode {movie}</td>
                    <td>The Empire Strikes Back</td>
                    <td>
                    <StarRating rating={movie} />
                    </td>
                    <td>{date}</td>
                </tr>
            ))}
        </tbody>
      </table>
    )
}

export default MovieList;