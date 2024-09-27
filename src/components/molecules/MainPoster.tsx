import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {Movie} from 'src/types/responses/movies';
import imagePath from '@constants/imagePath';
import {
  calcHight,
  calcWidth,
  fontSize,
  screenHeight,
  screenWidth,
} from '@utils/layouts';
import {themeColor} from '@theme/index';
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';
interface Props extends Movie {}
const MainPoster: FC<Props> = ({
  poster_path,
  title,
  genreDetails,
  release_date,
}) => {
  const imageURL = imagePath + poster_path;
  return (
    <ImageBackground source={{uri: imageURL}} style={styles.image}>
      <View style={styles.bottom}>
        <LinearGradient
          colors={[
            'rgba(0,0,0,0)',
            `${themeColor.background}99`,
            themeColor.background,
          ]}>
          <Text style={styles.title} numberOfLines={2} adjustsFontSizeToFit>
            {title}
          </Text>
          <View style={styles.row}>
            <Text style={styles.releaseDate}>
              {moment(release_date).format('YYYY')}
            </Text>
            {genreDetails?.map((genre, index) => (
              <View style={styles.genreHolder} key={index}>
                <View style={styles.dot} />
                <Text style={styles.genreText}>{genre.name}</Text>
              </View>
            ))}
          </View>
        </LinearGradient>
      </View>
    </ImageBackground>
  );
};

export default MainPoster;

const styles = StyleSheet.create({
  image: {
    height: screenHeight / 1.6,
    width: screenWidth,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    color: themeColor.text,
    fontSize: fontSize(35),
    fontWeight: '700',
    textAlign: 'center',
    paddingHorizontal: calcWidth(100),
  },
  releaseDate: {
    color: themeColor.gold,
  },
  genreText: {
    color: themeColor.gold,
    fontWeight: '500',
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
  bottom: {width: '100%'},
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: calcHight(10),
  },
});
