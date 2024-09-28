import {queryMovies} from '@services/movies';
import {useInfiniteQuery} from '@tanstack/react-query';
import {mapMovieWithGenre} from '@utils/genres';
import {GetMoviesResponse} from 'src/types/responses/movies';
import {useGetGenres} from './useGetGenres';

export const useGetAllMovies = () => {
  const {
    genres,
    isLoading: isGenresLoading,
    isFetching: isGenresFetching,
  } = useGetGenres();

  const {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    data,
    isLoading,
    isFetching,
  } = useInfiniteQuery<GetMoviesResponse>({
    queryKey: ['allMovies'],
    queryFn: async ({pageParam}) => {
      const response = await queryMovies.getMovies(pageParam as number);
      const mappedResult = response.results.map(movie =>
        mapMovieWithGenre(movie, genres?.length ? genres : []),
      );
      return {...response, results: mappedResult};
    },
    initialPageParam: 1,
    getNextPageParam: lastPage => {
      return lastPage?.total_pages > lastPage.page
        ? lastPage.page + 1
        : undefined;
    },
  });
  return {
    data,
    movies: data?.pages?.flatMap(pageData => pageData.results),
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    isLoading: isGenresFetching || isGenresLoading || isLoading || isFetching,
  };
};
