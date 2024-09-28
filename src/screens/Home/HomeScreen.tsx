import AppBar from '@components/molecules/AppBar';
import ErrorMessage from '@components/molecules/Error';
import Loader from '@components/molecules/Loader';
import MainPoster from '@components/molecules/MainPoster';
import MoviesCarousel from '@components/molecules/MoviesCarousel';
import {useGetMovies} from '@hooks/useGetMovies';
import AppScreen from '@providers/AppScreen';
import {calcHight} from '@utils/layouts';
import React from 'react';
import {ScrollView} from 'react-native';

const HomeScreen = () => {
  const {mainMovie, moviesList, isLoading, isError, refetch} = useGetMovies();

  return (
    <AppScreen>
      <AppBar
        title={'Diamond Mall'}
        isAbsolute
        rightIcon="search-outline"
        leftIcon="reorder-four-outline"
      />
      {isError && (
        <ErrorMessage
          message="Something went wrong, please try again"
          onPressRefresh={refetch}
        />
      )}

      {!isLoading ? (
        <ScrollView contentContainerStyle={{paddingBottom: calcHight(70)}}>
          {mainMovie && <MainPoster {...mainMovie} />}
          {moviesList?.length > 0 && <MoviesCarousel movies={moviesList} />}
        </ScrollView>
      ) : (
        <Loader isFull />
      )}
    </AppScreen>
  );
};

export default HomeScreen;
