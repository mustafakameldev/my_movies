import {Genre, Movie} from 'src/types/responses/movies';

export const mapGenres = (genres: Genre[], ids: number[]) => {
  const genreMap = new Map<number, Genre>();
  genres.forEach(genre => genreMap.set(genre.id, genre));

  let movieGenres: Genre[] = [];
  ids.forEach((id: number) => {
    const genre = genreMap.get(id);
    if (genre) {
      movieGenres.push(genre);
    }
  });
  return movieGenres;
};

export const mapMovieWithGenre = (movie: Movie, genres: Genre[]) => {
  let mappedMovie: Movie = {
    ...movie,
    genreDetails: movie?.genre_ids
      ? mapGenres(genres, movie.genre_ids)
      : undefined,
  };

  return mappedMovie;
};
