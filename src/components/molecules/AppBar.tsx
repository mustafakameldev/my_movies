import {themeColor} from '@theme/index';
import {calcHight, calcWidth, fontSize} from '@utils/layouts';
import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
interface Props {
  title?: string;
  rightIcon?: string;
  leftIcon?: string;
  isAbsolute?: boolean;
  onPressRightIcon?: () => void;
  onPressLeftIcon?: () => void;
}
const AppBar: FC<Props> = ({title, isAbsolute = true, rightIcon, leftIcon}) => {
  const {top} = useSafeAreaInsets();
  return (
    <>
      {isAbsolute ? (
        <View style={[styles.absoluteContainer]}>
          <LinearGradient
            colors={[
              `${themeColor.background}`,
              `${themeColor.background}bb`,
              'rgba(0,0,0,0)',
            ]}
            style={[styles.linear, {paddingTop: top}]}>
            <AppBarContent
              title={title}
              rightIcon={rightIcon}
              leftIcon={leftIcon}
            />
          </LinearGradient>
        </View>
      ) : (
        <></>
      )}
    </>
  );
};

type AppBarContent = Omit<Props, 'isAbsolute'>;
const AppBarContent: FC<Props> = ({
  leftIcon,
  onPressLeftIcon,
  rightIcon,
  onPressRightIcon,
  title,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconHolder}>
        <Ionicons
          name={leftIcon ?? 'search'}
          color={themeColor.main}
          size={calcWidth(25)}
          onPress={() => onPressLeftIcon && onPressLeftIcon()}
        />
      </View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.iconHolder}>
        <Ionicons
          name={rightIcon ?? 'search'}
          color={themeColor.main}
          size={calcWidth(25)}
          onPress={() => onPressRightIcon && onPressRightIcon()}
        />
      </View>
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: calcWidth(24),
    alignItems: 'center',
  },
  absoluteContainer: {
    height: calcHight(150),
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  },
  relativeContainer: {},
  linear: {
    flex: 1,
  },
  iconHolder: {
    height: calcWidth(30),
    width: calcWidth(30),
    backgroundColor: `${themeColor.background}bb`,
    borderRadius: calcWidth(4),
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: themeColor.text,
    fontSize: fontSize(16),
    fontWeight: '600',
  },
});
