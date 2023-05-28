import { getMovieDetails } from 'Api/Api';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import {
  Container,
  LinkBackStyled,
  LinkStyled,
  ListStyled,
  MovieDescript,
} from './MovieDetailsStyled';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? `/movies`);
  const { movieId } = useParams(); // забираем id из строки запроса

  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const dataMovieDetails = await getMovieDetails(movieId);

        // console.log('dataMovieDetails :>> ', dataMovieDetails); // ---temp
        setMovieDetails(dataMovieDetails);
      } catch (error) {
        console.warn(error);
      }
    })();
  }, [movieId]);

  return (
    movieDetails && (
      <>
        {/* <Container>
          <Link to={backLinkLocation.current}>Go Back</Link>
        </Container> */}

        <Container>
          <MovieDescript>
            <li>
              {movieDetails.poster_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                  alt={movieDetails.title}
                />
              )}
            </li>
            <li>
              <div>
                <h2>{movieDetails.title}</h2>
                <p>User score: {Math.round(movieDetails.vote_average)}%</p>
                <h3>Overview</h3>
                <p>{movieDetails.overview}</p>
                <h3>Genres</h3>
                <ul>
                  {movieDetails.genres.map(({ id, name }) => {
                    return <li key={id}>{name}</li>;
                  })}
                </ul>
              </div>

              <div>
                <LinkBackStyled to={backLinkLocation.current}>
                  Go Back
                </LinkBackStyled>
              </div>
            </li>
          </MovieDescript>
        </Container>

        <Container>
          <h3>Additional information</h3>
          <ListStyled>
            <li>
              <LinkStyled to="cast">Cast</LinkStyled>
            </li>
            <li>
              <LinkStyled to="reviews">Reviews</LinkStyled>
            </li>
          </ListStyled>
        </Container>

        <Suspense fallback={<div>loading...</div>}>
          <Outlet />
        </Suspense>
      </>
    )
  );
};

export default MovieDetails;
