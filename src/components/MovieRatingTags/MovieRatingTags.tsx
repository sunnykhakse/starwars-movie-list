import {FC} from 'react';
import './MovieRatingTags.css';

interface MovieRatingTagsProps {
    ratings: Rating[];
}

const MovieRatingTags: FC<MovieRatingTagsProps> = ({ratings}) => {
  return (
    <div className='movie_rating_tags'>
        {ratings.map((rating:any, i:number) => (
            <span key={i} className='movie_rating_tag'>{`${rating.Source}: ${rating.Value}`}</span>
        ))}
    </div>
  );
}

export default MovieRatingTags;
