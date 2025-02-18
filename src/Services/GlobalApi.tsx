
// import axios from 'axios';

// const baseURL = 'https://api.themoviedb.org/3';
// const bearerToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMmRhYzExNDMyYzE5NjA3MDc2YWE0NTUyM2FmYzMwNiIsIm5iZiI6MTczOTcwNTMzNi40NjgsInN1YiI6IjY3YjFjYmY4MTY5ZTM2NWFmNjlmYTc0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kJvGurrcNnqFn-K_IS_j5_fQC7n0gVXQx666FsUnLR4";

// const apiClient = axios.create({
//   baseURL: baseURL,
//   headers: {
//     Authorization: `Bearer ${bearerToken}`,
//     accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
// });

// const getMovieByGenreId = (id: number) => {
//   return apiClient.get('/discover/movie', {
//     params: {
//       with_genres: id,
//       language: 'en-US',
//       page: 1
//     }
//   });
// };

// export default {
//   getPopularMovies: () => apiClient.get('/movie/popular'),
//   getMovieByGenreId
// };
import axios from 'axios';

const baseURL = 'https://api.themoviedb.org/3';
const bearerToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMmRhYzExNDMyYzE5NjA3MDc2YWE0NTUyM2FmYzMwNiIsIm5iZiI6MTczOTcwNTMzNi40NjgsInN1YiI6IjY3YjFjYmY4MTY5ZTM2NWFmNjlmYTc0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kJvGurrcNnqFn-K_IS_j5_fQC7n0gVXQx666FsUnLR4";

const apiClient = axios.create({
  baseURL: baseURL,
  headers: {
    Authorization: `Bearer ${bearerToken}`,
    accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

// Add new function to get movie videos
const getMovieVideos = (movieId: number) => {
  return apiClient.get(`/movie/${movieId}/videos`, {
    params: {
      language: 'en-US'
    }
  });
};

export default {
  getPopularMovies: () => apiClient.get('/movie/popular'),
  getMovieByGenreId: (id: number) => apiClient.get('/discover/movie', {
    params: {
      with_genres: id,
      language: 'en-US',
      page: 1
    }
  }),
  getMovieVideos
};