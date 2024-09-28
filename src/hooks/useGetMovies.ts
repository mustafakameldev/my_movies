import {queryMovies} from '@services/movies';
import {useQuery} from '@tanstack/react-query';
import {mapMovieWithGenre} from '@utils/genres';
import {useMemo} from 'react';
import {GetMoviesResponse, Movie} from 'src/types/responses/movies';
import {useGetGenres} from './useGetGenres';

export const useGetMovies = () => {
  const {
    genres,
    isLoading: isGenresLoading,
    isFetching: isGenresFetching,
  } = useGetGenres();
  const {data, isFetching, isLoading, isError, refetch} =
    useQuery<GetMoviesResponse>({
      queryKey: ['movies'],
      queryFn: () => queryMovies.getMovies(),
    });

  const {mainMovie, moviesList} = useMemo(() => {
    if (
      data?.results?.length &&
      data?.results?.length > 0 &&
      genres?.length &&
      genres?.length > 0
    ) {
      let mappedMovies: Movie[] = [];
      let mappedMainMovie: Movie;
      let firstMovie = data?.results?.[0];
      mappedMainMovie = mapMovieWithGenre(firstMovie, genres);

      mappedMovies = data?.results
        ?.slice(1)
        ?.map(movie => mapMovieWithGenre(movie, genres));
      return {moviesList: mappedMovies, mainMovie: mappedMainMovie};
    }
    return {mainMovie: undefined, moviesList: []};
  }, [genres, data?.results]);
  return {
    data,
    isLoading: isLoading || isGenresLoading || isFetching || isGenresFetching,
    mainMovie,
    moviesList,
    refetch,
    isError,
  };
};
