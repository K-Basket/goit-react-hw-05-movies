import { getMovieCredits } from 'Api/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams(); // забираем id из строки запроса
  const [movieCredits, setMovieCredits] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const dataMovieCredits = await getMovieCredits(movieId);

        console.log(dataMovieCredits.cast); // ---temp
        setMovieCredits(dataMovieCredits);
      } catch (error) {
        console.warn(error);
      }
    })();
  }, [movieId]);

  return (
    <>
      <h4>Cast</h4>
      {movieCredits && (
        <ul>
          {movieCredits.cast.map(el => {
            return (
              <li key={el.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${el.profile_path}`}
                  alt={el.name}
                  width={150}
                />

                <p>{el.name}</p>
                <p>Character: {el.character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Cast;
