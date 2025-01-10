import React,{FC} from 'react';
import './MovieRatingTags.css';

interface MovieRatingTagsProps {
    ratings: Rating[];
}

const MovieRatingTags: FC<MovieRatingTagsProps> = ({ratings}) => {
  return (
    <div className='movie_rating_tags'>
        {ratings.map((rating:any) => (
            <a href='#' className='movie_rating_tag'>{`${rating.Source}: ${rating.Value}`}</a>
        ))}
    </div>
  );
}

export default MovieRatingTags;
