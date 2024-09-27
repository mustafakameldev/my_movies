import {queryGetMovies} from '@services/query.getMovies';
import {useQuery} from '@tanstack/react-query';
import {GetMoviesResponse} from 'src/types/responses/movies';

export const useGetMovies = () => {
  const {data, isFetching, isLoading, refetch} = useQuery<GetMoviesResponse>({
    queryKey: ['movies'],
    queryFn: () => queryGetMovies.getMovies(),
  });

  return {data, isFetching, isLoading, refetch};
};
