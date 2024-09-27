export interface GetMoviesResponse {
  total_pages: number;
  total_results: number;
  page: number;
  results: Movie[];
}

export interface Movie {
  adult?: boolean;
  backdrop_path?: string;
  genre_ids?: number[];
  id?: number;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: string;
  poster_path?: string;
  release_date?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
  genreDetails?: Genre[];
}

export interface GenGenresResponse {
  genres: Genre[];
}

export interface Genre {
  id: number;
  name: string;
}
