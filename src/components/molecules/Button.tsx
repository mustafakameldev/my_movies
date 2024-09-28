import {themeColor} from '@theme/index';
import {calcHight, calcWidth} from '@utils/layouts';
import React, {FC} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

interface Props extends TouchableOpacityProps {
  title: string;
}
const Button: FC<Props> = ({title, ...rest}) => {
  return (
    <TouchableOpacity {...rest} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  title: {
    color: themeColor.gold,
  },
  container: {
    paddingVertical: calcHight(5),
    paddingHorizontal: calcWidth(8),
    borderRadius: calcWidth(7),
    borderWidth: calcWidth(0.7),
    borderColor: themeColor.gold,
  },
});
