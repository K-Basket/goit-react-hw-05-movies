import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/trending/all/day',
  params: { language: 'en-US' },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYTE3MThlNWQ1NDhkODg4MDEzODNmYmFlOWVkMDhjMCIsInN1YiI6IjY0NzBiMzVhNzI2ZmIxMDBjMmU1ZDlhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OsStYVQowb3r8uBKh_yvVUgt-6im-LahqBvtNCcHJ8w',
  },
};

const getTrending = async () => {
  const { data } = await axios.request(options);
  return data.results;
};

// getTrending().then(data => console.log('getTrending :>> ', data));

export default getTrending;
