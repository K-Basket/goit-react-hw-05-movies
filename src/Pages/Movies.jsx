import { getMovieSearch } from 'Api/Api';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams(); // читать/перезаписывать строку запроса
  const query = searchParams.get('query') ?? ''; // записывает значение query или пустую строку
  const [search, setSearch] = useState('');

  useEffect(() => {
    // HTTP запрос

    (async () => {
      try {
        const movieSearch = await getMovieSearch(query);

        console.log('Search :>> ', movieSearch);
      } catch (error) {
        console.warn(error);
      }
    })();
  }, [query]);

  const handleSubmit = evt => {
    evt.preventDefault();

    if (search === '') {
      return setSearchParams({}); // очищаем строку запроса от search
    }

    setSearchParams({ query: search });

    console.log('query :>> ', query);
    console.log('search :>> ', search);
  };

  const updateQueryString = evt => {
    setSearch(evt.target.value); // записываем в State данные input
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button type="submit">Search</button>

        <input
          type="text"
          name="search"
          value={search} // получаем из State
          onChange={updateQueryString}
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
        />
      </form>

      {/* <ul>
        {trendMovies.map(trendMovie => {
          return (
            <li key={trendMovie.id}>
              <Link to={`movies/${trendMovie.id}`}>
                {trendMovie.title ?? trendMovie.name}
              </Link>
            </li>
          );
        })}
      </ul> */}
    </>
  );
};

export default Movies;
