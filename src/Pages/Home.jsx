import { getTrending } from 'Api/Api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await getTrending();
        setTrendMovies(data);

        // console.log('getTrending :>> ', data);
      } catch (error) {
        console.warn(error);
      }
    })();
  }, []);

  return (
    <>
      {/* <p>Home page</p> */}
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
