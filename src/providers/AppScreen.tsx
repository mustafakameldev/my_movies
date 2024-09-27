import {themeColor} from '@theme/index';
import React, {FC, ReactNode, Suspense} from 'react';
import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface ScreenProps {
  children: ReactNode;
  safeTop?: boolean;
}
const AppScreen: FC<ScreenProps> = ({children, safeTop = false}) => {
  const {top} = useSafeAreaInsets();
  return (
    <Suspense>
      {safeTop && <View style={{height: top}} />}
      <View style={styles.container}>{children}</View>
    </Suspense>
  );
};

export default AppScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: themeColor.background},
});
