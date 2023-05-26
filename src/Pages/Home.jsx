import getTrending from 'Api/Api';
// import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// const trendingMovies = [
//   { id: '123456', nameTr: 'Trending Name 1' },
//   { id: '234567', nameTr: 'Trending Name 2' },
//   { id: '345678', nameTr: 'Trending Name 3' },
//   { id: '456789', nameTr: 'Trending Name 4' },
//   { id: '567890', nameTr: 'Trending Name 5' },
//   { id: '678901', nameTr: 'Trending Name 6' },
// ];

// const [trendMovies, setTrendMovies] = useState([]);

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const trendMoviesData = await getTrending();
        setTrendMovies(trendMoviesData);

        console.log('trendMoviesData await :>> ', trendMoviesData);
      } catch (error) {
        console.warn(error);
      }
    })();
  }, []);

  return (
    <>
      <p>Home page</p>
      <h2>Trending today</h2>
      <ul>
        {trendMovies.map(trendMovie => {
          return (
            <li key={trendMovie.id}>
              <Link to={`movies/${trendMovie.id}`}>
                {trendMovie.title ?? trendMovie.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Home;
