import { ChangeEvent, useMemo, useState } from 'react';
import './App.css';
import MovieList from './components/MovieList/MovieList';
import MovieDetails from './components/MovieDetails/MovieDetails';
import { useMovieList } from './hooks/useMovieList';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import {sortMvoies} from './utils/utils';
import MovieFilter from './components/MovieFilter/MovieFilter';
import useDeviceType from './hooks/useDeviceType';

function App() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('');
  const {loading, movies} = useMovieList();
  const isMobile = useDeviceType();

  //Custom style to show and hide movie list and details on mobile devices
  const mobileStyle = {
    list: isMobile ? {
      display: !selectedMovie ? 'block' : 'none'
    } : {},
    details: isMobile ? {
      display: selectedMovie ? 'block' : 'none'
    } : {}
  }

  const handleSelectMovie = (movie: Movie) => {
    setSelectedMovie(movie);
  }

  const handleSortByChange = (value: string) => {
    setSortBy(value);
  }

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  }

  const handleClose = () => {
    setSelectedMovie(null);
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
        <MovieFilter
          sortOption={sortBy}
          searchKeyword={searchKeyword}
          onSortChange={handleSortByChange}
          onSearchChange={handleSearchChange}
        />
      </header>
      <section className='main'>
        <section className='movie_list_container' style={mobileStyle.list}>
         {loading ? <LoadingSpinner /> : <MovieList movies={updatedMovieList} selectedMovie={selectedMovie} onSelectMovie={handleSelectMovie} />}
        </section>
        <section className='movie_details_container' style={mobileStyle.details}>
          <MovieDetails movie={selectedMovie} onClose={handleClose} />
        </section>
      </section>
    </div>
  );
}

export default App;
