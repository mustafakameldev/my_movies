import {API_KEY} from '@constants/httpConstants';
import {HttpClient} from '@services/HttpClinet';
import {AxiosResponse} from 'axios';
import {GetMoviesResponse} from 'src/types/responses/movies';
export const queryMovies = {
  getMovies: () =>
    HttpClient.get(
      `/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`,
    ).then((res: AxiosResponse<GetMoviesResponse>) => res.data),
  getGenres: () =>
    HttpClient.get(`/genre/movie/list?api_key=${API_KEY}`).then(
      res => res.data,
    ),
};
