import {themeColor} from '@theme/index';
import React, {FC} from 'react';
import {ActivityIndicator, StyleSheet, View, ViewStyle} from 'react-native';

interface Props {
  isFull?: boolean;
  containerStyle?: ViewStyle;
}
const Loader: FC<Props> = ({isFull, containerStyle}) => {
  return (
    <View style={[containerStyle, isFull && styles.fullContainer]}>
      <ActivityIndicator
        color={themeColor.gold}
        size={isFull ? 'large' : 'small'}
      />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  fullContainer: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
