import { Link } from 'react-router-dom';

const trendingMovies = [
  { id: '123456', nameTr: 'Trending Name 1' },
  { id: '234567', nameTr: 'Trending Name 2' },
  { id: '345678', nameTr: 'Trending Name 3' },
  { id: '456789', nameTr: 'Trending Name 4' },
  { id: '567890', nameTr: 'Trending Name 5' },
  { id: '678901', nameTr: 'Trending Name 6' },
];

const Home = () => {
  // useEffect(() => {
  //   // HTTP запрос реализуется здесь
  // }, [])

  return (
    <>
      <p>Home page</p>
      <h2>Trending today</h2>
      <ul>
        {trendingMovies.map(trendMovie => {
          return (
            <li key={trendMovie.id}>
              <Link to={`movies/${trendMovie.id}`}>{trendMovie.nameTr}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Home;
