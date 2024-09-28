import {queryClient} from '@providers/ReactQuiry.provider';
import {queryMovies} from '@services/movies';
import {useQuery} from '@tanstack/react-query';
import {GenGenresResponse} from 'src/types/responses/movies';

export const useGetGenres = () => {
  const data = queryClient.getQueryData(['genres']);
  const query = useQuery<GenGenresResponse>({
    queryKey: ['genres'],
    queryFn: () => queryMovies.getGenres(),
    enabled: !data,
  });
  return {...query, genres: query?.data?.genres};
};
