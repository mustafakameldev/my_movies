import {Dimensions, PixelRatio} from 'react-native';

export const screenWidth = Dimensions.get('screen').width;
export const screenHeight = Dimensions.get('screen').height;
export const designWidth = screenWidth > 600 ? 700 : 375;
const SCALE_HEIGHT = screenHeight / 812;
const SCALE_WIDTH = screenWidth / 375;

export const calcHight = (size: number) => {
  return size * SCALE_HEIGHT;
};

export const calcWidth = (size: number) => {
  return size * SCALE_WIDTH;
};

export const fontSize = (size: number) => {
  const scaleSize = size * SCALE_WIDTH;
  return Math.round(PixelRatio.roundToNearestPixel(scaleSize));
};
