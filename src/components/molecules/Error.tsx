import {themeColor} from '@theme/index';
import {calcHight} from '@utils/layouts';
import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from './Button';

interface Props {
  message: string;
  onPressRefresh: () => void;
}
const ErrorMessage: FC<Props> = ({message, onPressRefresh}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
      <Button title={'Refresh'} onPress={onPressRefresh} />
    </View>
  );
};

export default ErrorMessage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    color: themeColor.gold,
    fontWeight: '400',
    marginBottom: calcHight(5),
  },
});
