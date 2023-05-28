import { getTrending } from 'Api/Api';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { LinkStyled, ListStyled } from './HomeStyled';
import { Container } from 'Pages/MovieDetails/MovieDetailsStyled';

const Home = () => {
  const location = useLocation();
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const dataTrendMovies = await getTrending();

        // console.log('dataTrendMovies :>> ', dataTrendMovies); // ---temp
        setTrendMovies(dataTrendMovies);
      } catch (error) {
        console.warn(error);
      }
    })();
  }, []);

  return (
    <Container>
      {/* <p>Home page</p> */}
      <h2>Trending today</h2>

      <ListStyled>
        {trendMovies.map(trendMovie => {
          return (
            <li key={trendMovie.id}>
              <LinkStyled
                to={`movies/${trendMovie.id}`}
                state={{ from: location }}
              >
                {trendMovie.title ?? trendMovie.name}
              </LinkStyled>
            </li>
          );
        })}
      </ListStyled>
    </Container>
  );
};

export default Home;
