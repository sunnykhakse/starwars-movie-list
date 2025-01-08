import React from 'react';
import logo from './logo.svg';
import './App.css';
import StarRating from './components/StarRating/StarRating';
import SearchBox from './components/SearchBox/SearchBox';
import MovieList from './components/MovieList/MovieList';

function App() {
  return (
    <div className="App">
      <header className='movie_list_header'>
        <select className='movie_list_sort'>
          <option>Sort by...</option>
        </select>
        <SearchBox id="search" name="search" value={""} placeholder='Type to filter...' className='movie_list_filter_input' onChange={() => {}} />
      </header>
      <section className='main'>
        <section className='movie_list_container'>
         <MovieList movies={[1,2,3,4,5,6,7,8]} />
        </section>
        <section className='movie_details_container'>
          <h1 className='movie_name'>Movie Name</h1> 
        </section>
      </section>
    </div>
  );
}

export default App;
