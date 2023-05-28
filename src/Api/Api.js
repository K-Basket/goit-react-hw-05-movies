import axios from 'axios';

// запрос списка самых популярных фильмов на сегодня для создания коллекции на главной странице.
export const getTrending = async () => {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/trending/all/day',
    params: { language: 'en-US' },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYTE3MThlNWQ1NDhkODg4MDEzODNmYmFlOWVkMDhjMCIsInN1YiI6IjY0NzBiMzVhNzI2ZmIxMDBjMmU1ZDlhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OsStYVQowb3r8uBKh_yvVUgt-6im-LahqBvtNCcHJ8w',
    },
  };

  const { data } = await axios.request(options);

  return data.results;
};

// запрос полной информации о фильме для страницы кинофильма
export const getMovieDetails = async movieId => {
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${movieId}`,
    params: { language: 'en-US' },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYTE3MThlNWQ1NDhkODg4MDEzODNmYmFlOWVkMDhjMCIsInN1YiI6IjY0NzBiMzVhNzI2ZmIxMDBjMmU1ZDlhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OsStYVQowb3r8uBKh_yvVUgt-6im-LahqBvtNCcHJ8w',
    },
  };
  const { data } = await axios.request(options);
  return data;
};

// запрос информации об актёрском составе для страницы кинофильма
export const getMovieCredits = async movieId => {
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${movieId}/credits`,
    params: { language: 'en-US' },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYTE3MThlNWQ1NDhkODg4MDEzODNmYmFlOWVkMDhjMCIsInN1YiI6IjY0NzBiMzVhNzI2ZmIxMDBjMmU1ZDlhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OsStYVQowb3r8uBKh_yvVUgt-6im-LahqBvtNCcHJ8w',
    },
  };

  const { data } = await axios.request(options);
  return data.cast;
};

// запрос обзоров для страницы кинофильма
export const getMovieReviews = async movieId => {
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
    params: { language: 'en-US', page: '1' },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYTE3MThlNWQ1NDhkODg4MDEzODNmYmFlOWVkMDhjMCIsInN1YiI6IjY0NzBiMzVhNzI2ZmIxMDBjMmU1ZDlhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OsStYVQowb3r8uBKh_yvVUgt-6im-LahqBvtNCcHJ8w',
    },
  };

  const { data } = await axios.request(options);
  return data.results;
};

// поиск кинофильма по ключевому слову на странице фильмов
export const getMovieSearch = async query => {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/search/movie',
    params: {
      query: `${query}`,
      include_adult: 'false',
      language: 'en-US',
      page: '1',
    },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYTE3MThlNWQ1NDhkODg4MDEzODNmYmFlOWVkMDhjMCIsInN1YiI6IjY0NzBiMzVhNzI2ZmIxMDBjMmU1ZDlhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OsStYVQowb3r8uBKh_yvVUgt-6im-LahqBvtNCcHJ8w',
    },
  };

  const { data } = await axios.request(options);
  return data.results;
};

// getTrending().then(data => console.log('getTrending :>> ', data));

// getMovieSearch('car').then(data => console.log('Search :>> ', data));
