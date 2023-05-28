import { getMovieReviews } from 'Api/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const dataMovieReviews = await getMovieReviews(movieId);
        console.log('dataMovieReviews :>> ', dataMovieReviews); // ---temp

        if (dataMovieReviews.length === 0) {
          return setIsHidden(true);
        }

        setMovieReviews(dataMovieReviews);
      } catch (error) {
        console.warn(error);
      }
    })();
  }, [movieId]);

  return (
    <>
      <h4>Reviews</h4>

      {isHidden ? (
        <p>We don't have any rewiews for this movie.</p>
      ) : (
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
      )}
    </>
  );
};

export default Reviews;
