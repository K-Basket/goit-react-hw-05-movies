import { Link, Outlet, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const params = useParams();
  // console.log('params :>> ', params); // забираем id из строки запроса

  return (
    <>
      <h2>MovieDetails pages</h2>

      <Link to="/">Go Back</Link>

      <p>Здесь разметка данных про фильм с ID: {params.movieId}</p>

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
