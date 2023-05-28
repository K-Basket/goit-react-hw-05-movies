import { getMovieCredits } from 'Api/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams(); // забираем id из строки запроса
  const [movieCredits, setMovieCredits] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const dataMovieCredits = await getMovieCredits(movieId);

        console.log('dataMovieCredits :>> ', dataMovieCredits); // ---temp
        setMovieCredits(dataMovieCredits);
      } catch (error) {
        console.warn(error);
      }
    })();
  }, [movieId]);

  return (
    <>
      <h4>Cast</h4>
      {
        <ul>
          {movieCredits.map(({ id, profile_path, name, character }) => {
            return (
              <li key={id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt={name}
                  width={100}
                />

                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            );
          })}
        </ul>
      }
    </>
  );
};

export default Cast;
