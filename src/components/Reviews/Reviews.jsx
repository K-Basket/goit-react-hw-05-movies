import { getMovieReviews } from 'Api/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  // const dataMovieReviews = await getMovieReviews(movieId);
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const dataMovieReviews = await getMovieReviews(movieId);
        setMovieReviews(dataMovieReviews);

        console.log(dataMovieReviews); // ---temp
      } catch (error) {
        console.warn(error);
      }
    })();
  }, [movieId]);

  return (
    <>
      <h4>Reviews</h4>
      {movieReviews && (
        <ul>
          {movieReviews.results.map(el => {
            return (
              <li key={el.id}>
                <h5>Author: {el.author}</h5>
                <p>{el.content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Reviews;
