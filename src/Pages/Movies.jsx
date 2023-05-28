import { getMovieSearch } from 'Api/Api';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import Notiflix from 'notiflix';

const Movies = () => {
  const location = useLocation();
  const [searchInput, setSearchInput] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams(); // читать/перезаписывать строку запроса
  const query = searchParams.get('query') ?? ''; // записывает значение query или пустую строку

  useEffect(() => {
    (async () => {
      try {
        const movieSearch = await getMovieSearch(query);
        setMovies(movieSearch);

        // console.log('Search :>> ', movieSearch);
      } catch (error) {
        console.warn(error);
      }
    })();
  }, [query]);

  const handleSubmit = evt => {
    evt.preventDefault();

    if (searchInput === '') {
      return Notiflix.Notify.warning('Add movie search');
    }

    setSearchParams({}); // очищаем строку запроса от search
    setSearchParams({ query: searchInput });
    setSearchInput('');
  };

  const updateQueryString = evt => {
    // setSearchInput(evt.target.value.trim()); // записываем в State данные input
    setSearchInput(evt.target.value); // записываем в State данные input
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>

        <input
          type="text"
          name="search"
          value={searchInput} // получаем из State
          onChange={updateQueryString}
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
        />
      </form>

      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.id}>
              <Link to={`${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Movies;
