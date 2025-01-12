import React, { useCallback, useMemo, useState } from 'react';
import './App.css';
import StarRating from './components/StarRating/StarRating';
import SearchBox from './components/SearchBox/SearchBox';
import MovieList from './components/MovieList/MovieList';
import MovieDetails from './components/MovieDetails/MovieDetails';
import { useMovieList } from './hooks/useMovieList';
import SortOptionsDropdown from './components/SortOptionsDropdown/SortOptionsDropdown';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import {sortMvoies} from './utils/utils';

function App() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('');
  const {loading, movies} = useMovieList();

  const handleSelectMovie = (movie: Movie) => {
    setSelectedMovie(movie);
  }

  const handleSortByChange = (value: string) => {
    setSortBy(value);
  }

  const filterMovies = () => {
    setSelectedMovie(null);
    const filteredMovies =  searchKeyword === '' ? movies : movies.filter((movie:Movie) => movie.movie_title.toLowerCase().includes(searchKeyword.toLowerCase()));
    const sortedMovies = sortMvoies(filteredMovies, sortBy)
    return sortedMovies;
  }
  
  const updatedMovieList = useMemo(() => filterMovies(),[searchKeyword, movies, sortBy]);

  return (
    <div className="App">
      <header className='movie_list_header'>
        <SortOptionsDropdown id='sort_by' name='sort_by' value={sortBy} onChage={handleSortByChange} />
        <SearchBox 
          id="search" 
          name="search" 
          value={searchKeyword} 
          placeholder='Type to filter...' 
          className='movie_list_filter_input' 
          onChange={(e) => setSearchKeyword(e.target.value)} 
        />
      </header>
      <section className='main'>
        <section className='movie_list_container'>
         {loading ? <LoadingSpinner /> : <MovieList movies={updatedMovieList} selectedMovie={selectedMovie} onSelectMovie={handleSelectMovie} />}
        </section>
        <section className='movie_details_container'>
          <MovieDetails movie={selectedMovie} />
        </section>
      </section>
    </div>
  );
}

export default App;
