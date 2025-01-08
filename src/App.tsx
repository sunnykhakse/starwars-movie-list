import React from 'react';
import logo from './logo.svg';
import './App.css';
import StarRating from './components/StarRating/StarRating';

function App() {
  return (
    <div className="App">
      <header className='movie_list_header'>
        <select></select>
        
        <input placeholder='Type to filter...' className='movie_list_filter_input' />
      </header>
      <section className='main'>
        <section className='movie_list_container'>
          <table className='movie_list' border={0} cellSpacing={0}>
            <tbody>
              <tr>
                <td>Episode 1</td>
                <td>Episode 1</td>
                <td>
                  <StarRating rating={5.5} />
                </td>
                <td>Episode 1</td>
              </tr>
              <tr>
                <td>Episode 1</td>
                <td>Episode 1</td>
                <td>Episode 1</td>
                <td>Episode 1</td>
              </tr>
              <tr>
                <td>Episode 1</td>
                <td>Episode 1</td>
                <td>Episode 1</td>
                <td>Episode 1</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className='movie_details_container'>
          <h1 className='movie_name'>Movie Name</h1> 
        </section>
      </section>
    </div>
  );
}

export default App;
