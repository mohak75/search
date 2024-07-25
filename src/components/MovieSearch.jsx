import React, { useState } from 'react';
import axios from 'axios';
import './MovieSearch.css';


function MovieSearch() {
  const [inputText, setInputText] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await axios.get(`https://www.omdbapi.com/?apikey=2b671e8c&s=${inputText}&page=1`);
      setMovies(response.data.Search || []);
    } catch (err) {
      setError('Failed to fetch data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder=""
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {error && <div className="error">{error}</div>}

      <table>
        <thead>
          <tr>
            <th>Poster</th>
            <th>Title</th>
            <th>Year</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.imdbID}>
              <td>
                <img src={movie.Poster} alt={movie.Title} />
              </td>
              <td>{movie.Title}</td>
              <td>{movie.Year}</td>
              <td>{movie.Type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MovieSearch;
