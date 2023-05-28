import { getMovieCredits } from 'Api/Api';
import { Container } from 'Pages/MovieDetails/MovieDetailsStyled';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastCardStyled, CastsStyled } from './CastStyled';

const Cast = () => {
  const { movieId } = useParams(); // забираем id из строки запроса
  const [movieCredits, setMovieCredits] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const dataMovieCredits = await getMovieCredits(movieId);

        // console.log('dataMovieCredits :>> ', dataMovieCredits); // ---temp
        setMovieCredits(dataMovieCredits);
      } catch (error) {
        console.warn(error);
      }
    })();
  }, [movieId]);

  return (
    <Container>
      <h4>Cast</h4>
      {
        <CastsStyled>
          {movieCredits.map(({ id, profile_path, name, character }) => {
            return (
              profile_path && (
                <CastCardStyled key={id}>
                  <article>
                    <div>
                      {
                        <img
                          src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                          alt=""
                        />
                      }
                    </div>
                    <div>
                      <h5>{name}</h5>
                      <p>Character: {character}</p>
                    </div>
                  </article>
                </CastCardStyled>
              )
            );
          })}
        </CastsStyled>
      }
    </Container>
  );
};

export default Cast;
