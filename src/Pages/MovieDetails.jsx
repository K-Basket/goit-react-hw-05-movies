import { getMovieCredits, getMovieDetails, getMovieReviews } from 'Api/Api';
// import axios from 'axios';
import { useEffect, useRef } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? `/movies`);
  const { movieId } = useParams(); // забираем id из строки запроса

  // console.log('useParams :>> ', movieId);
  useEffect(() => {
    (async () => {
      try {
        const movieDetails = await getMovieDetails(movieId);
        const movieCredits = await getMovieCredits(movieId);
        const movieReviews = await getMovieReviews(movieId);

        console.log('Details :>> ', movieDetails);
        console.log('Credits :>> ', movieCredits);
        console.log('Reviews :>> ', movieReviews);
      } catch (error) {
        console.warn(error);
      }
    })();
  }, [movieId]);

  return (
    <>
      <h2>MovieDetails pages</h2>

      <Link to={backLinkLocation.current}>Go Back</Link>
      {/* <Link to={location.state?.from ?? `/movies`}>Go Back</Link> */}

      <p>Здесь разметка данных про фильм с ID: {movieId}</p>

      <h3>Additional information</h3>

      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
