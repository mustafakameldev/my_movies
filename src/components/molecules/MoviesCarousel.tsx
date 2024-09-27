import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {FC, useCallback} from 'react';
import {Movie} from 'src/types/responses/movies';
import imagePath from '@constants/imagePath';
import {calcHight, calcWidth, fontSize} from '@utils/layouts';
import {themeColor} from '@theme/index';

interface Props {
  movies: Movie[];
}
const MoviesCarousel: FC<Props> = ({movies}) => {
  const renderItem = useCallback(({item}: {item: Movie}) => {
    return (
      <Image
        source={{uri: imagePath + item.poster_path}}
        style={styles.movieCard}
      />
    );
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Movies</Text>
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default MoviesCarousel;

const styles = StyleSheet.create({
  container: {},
  sectionTitle: {
    color: themeColor.text,
    fontSize: fontSize(18),
    fontWeight: '700',
    paddingStart: calcWidth(16),
    marginTop: calcHight(24),
    marginBottom: calcHight(12),
  },
  movieCard: {
    height: calcHight(170),
    width: calcWidth(140),
    borderRadius: calcWidth(10),
  },
  list: {
    gap: calcWidth(10),
    paddingStart: calcWidth(16),
  },
});
