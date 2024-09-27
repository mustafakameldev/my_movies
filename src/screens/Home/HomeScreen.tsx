import AppBar from '@components/molecules/AppBar';
import Loader from '@components/molecules/Loader';
import MainPoster from '@components/molecules/MainPoster';
import MoviesCarousel from '@components/molecules/MoviesCarousel';
import {useGetMovies} from '@hooks/useGetMovies';
import AppScreen from '@providers/AppScreen';
import React from 'react';

const HomeScreen = () => {
  const {mainMovie, moviesList, isLoading} = useGetMovies();

  return (
    <AppScreen>
      <AppBar
        title={'Diamond Mall'}
        isAbsolute
        rightIcon="search-outline"
        leftIcon="reorder-four-outline"
      />
      {!isLoading ? (
        <>
          {mainMovie && <MainPoster {...mainMovie} />}
          <MoviesCarousel movies={moviesList} />
        </>
      ) : (
        <Loader isFull />
      )}
    </AppScreen>
  );
};

export default HomeScreen;
