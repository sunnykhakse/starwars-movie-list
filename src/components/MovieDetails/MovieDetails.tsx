import React, {FC} from 'react';
import StarRating from '../StarRating/StarRating';

interface MovieDetailsProps{

}

const MovieDetails:FC<MovieDetailsProps> = () => {
    return(
        <article>
            <h1 className='movie_name'>The Empire Strikes Back</h1> 
          <div style={{display:'flex', gap: '15px'}}>
          <img src='https://upload.wikimedia.org/wikipedia/en/3/3f/The_Empire_Strikes_Back_%281980_film%29.jpg' height={250} />
          <p dangerouslySetInnerHTML={{ __html: ('It is a dark time for the\r\nRebellion. Although the Death\r\nStar has been destroyed,\r\nImperial troops have driven the\r\nRebel forces from their hidden\r\nbase and pursued them across\r\nthe galaxy.\r\n\r\nEvading the dreaded Imperial\r\nStarfleet, a group of freedom\r\nfighters led by Luke Skywalker\r\nhas established a new secret\r\nbase on the remote ice world\r\nof Hoth.\r\n\r\nThe evil lord Darth Vader,\r\nobsessed with finding young\r\nSkywalker, has dispatched\r\nthousands of remote probes into\r\nthe far reaches of space....') }}>
            
          
          </p>
          </div>
          <div>
            Directed by: Irvin Kershner
          </div>
          <div>
            Average rating: <StarRating rating={6} />
          </div>
          <div>
            <a href='#' className='movie_rating_tag'>Internet Movie DataBase: 70%</a>
            <a href='#' className='movie_rating_tag'>Rotten Tomotoes: 79%</a>
            <a href='#' className='movie_rating_tag'>Metacritic: 71%</a>
          </div>
        </article>
    )
}

export default MovieDetails;