import { getMovieReviews } from 'Api/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const dataMovieReviews = await getMovieReviews(movieId);

        console.log('dataMovieReviews :>> ', dataMovieReviews); // --temp
        setMovieReviews(dataMovieReviews);
      } catch (error) {
        console.warn(error);
      }
    })();
  }, [movieId]);

  return (
    <>
      <h4>Reviews</h4>
      {
        <ul>
          {movieReviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <h5>Author: {author}</h5>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      }
    </>
  );
};

export default Reviews;
