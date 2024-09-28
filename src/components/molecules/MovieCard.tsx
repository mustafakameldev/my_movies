import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {Movie} from 'src/types/responses/movies';
import imagePath from '@constants/imagePath';
import {calcHight, calcWidth, fontSize} from '@utils/layouts';
import LinearGradient from 'react-native-linear-gradient';
import {themeColor} from '@theme/index';

interface Props extends Movie {}
const MoviesCard: FC<Props> = ({poster_path, title, genreDetails}) => {
  const imageURL = imagePath + poster_path;
  return (
    <ImageBackground
      source={{uri: imageURL}}
      style={styles.container}
      imageStyle={styles.imageStyle}>
      <LinearGradient
        colors={[
          'rgba(0,0,0,0)',
          `${themeColor.background}aa`,
          `${themeColor.background}bb`,
          themeColor.background,
        ]}
        style={styles.bottom}>
        <Text style={styles.title} numberOfLines={2} adjustsFontSizeToFit>
          {title}
        </Text>
        <View style={styles.row}>
          {genreDetails?.map((genre, index) => (
            <View style={styles.genreHolder} key={index}>
              {index !== 0 && <View style={styles.dot} />}
              <Text style={styles.genreText}>{genre.name}</Text>
            </View>
          ))}
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

export default MoviesCard;

const styles = StyleSheet.create({
  container: {
    height: calcHight(250),
    width: calcWidth(160),
    margin: calcWidth(10),
    justifyContent: 'flex-end',
  },
  imageStyle: {
    borderRadius: calcWidth(10),
  },
  title: {
    color: themeColor.text,
    textAlign: 'center',
    marginTop: calcHight(5),
    fontWeight: '700',
  },
  genreText: {
    color: themeColor.gold,
    fontWeight: '500',
    fontSize: fontSize(10),
  },
  genreHolder: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    height: calcHight(2),
    width: calcHight(2),
    backgroundColor: themeColor.gold,
    marginHorizontal: calcWidth(4),
  },
  bottom: {
    paddingBottom: calcHight(20),
    paddingTop: calcHight(20),
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: calcHight(8),
    marginHorizontal: calcWidth(8),
  },
});
