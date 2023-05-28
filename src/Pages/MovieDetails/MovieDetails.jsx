import { getMovieDetails } from 'Api/Api';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { LinkStyled, ListStyled } from './MovieDetailsStyled';

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
        <Link to={backLinkLocation.current}>Go Back</Link>

        <img
          src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
          alt={movieDetails.title}
          width={200}
        />
        <h2>Title: {movieDetails.title}</h2>
        <p>User score: {Math.round(movieDetails.vote_average)}%</p>
        <h3>Overview</h3>
        <p>{movieDetails.overview}</p>
        <h3>Genres</h3>
        <ul>
          {movieDetails.genres.map(({ id, name }) => {
            return <li key={id}>{name}</li>;
          })}
        </ul>
        <h3>Additional information</h3>

        <ListStyled>
          <li>
            <LinkStyled to="cast">Cast</LinkStyled>
          </li>
          <li>
            <LinkStyled to="reviews">Reviews</LinkStyled>
          </li>
        </ListStyled>
        <Suspense fallback={<div>loading...</div>}>
          <Outlet />
        </Suspense>
      </>
    )
  );
};

export default MovieDetails;
