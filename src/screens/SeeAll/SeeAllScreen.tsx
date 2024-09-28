import ErrorMessage from '@components/molecules/Error';
import Loader from '@components/molecules/Loader';
import MoviesCard from '@components/molecules/MovieCard';
import {useGetAllMovies} from '@hooks/useGetAllMovies';
import AppScreen from '@providers/AppScreen';
import {calcHight, calcWidth} from '@utils/layouts';
import React, {useCallback} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Movie} from 'src/types/responses/movies';

const SeeAllScreen = () => {
  const {
    data,
    movies,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isError,
    refetch,
  } = useGetAllMovies();
  const {top} = useSafeAreaInsets();
  const renderItem = useCallback(
    ({item, index}: {item: Movie; index: number}) => (
      <MoviesCard {...item} key={index} />
    ),
    [],
  );
  const onEndReached = () => {
    if (data && !isFetchingNextPage && hasNextPage) {
      fetchNextPage();
    }
  };

  const renderFooter = () => {
    if (!isFetchingNextPage) return null;
    return (
      <View style={styles.footer}>
        <Loader />
      </View>
    );
  };
  return (
    <AppScreen>
      {isError ? (
        <ErrorMessage
          message="Something went wrong, please try again"
          onPressRefresh={refetch}
        />
      ) : (
        <>
          {!isLoading ? (
            <FlatList
              data={movies}
              renderItem={renderItem}
              keyExtractor={(_, index) => index.toString()}
              showsVerticalScrollIndicator={false}
              numColumns={2}
              contentContainerStyle={[{paddingTop: top}, styles.listContent]}
              onEndReachedThreshold={0.01}
              onEndReached={() => onEndReached()}
              ListFooterComponent={renderFooter}
            />
          ) : (
            <Loader isFull />
          )}
        </>
      )}
    </AppScreen>
  );
};

export default SeeAllScreen;

const styles = StyleSheet.create({
  listContent: {
    alignContent: 'center',
    justifyContent: 'center',
    marginHorizontal: calcWidth(6),
    paddingBottom: calcHight(70),
  },
  footer: {
    marginBottom: calcHight(20),
    padding: calcWidth(10),
  },
});
