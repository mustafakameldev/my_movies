import AppScreen from '@providers/AppScreen';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SeeAllScreen = () => {
  const {navigate} = useNavigation();
  return (
    <AppScreen>
      <View>
        <Text>SeeAllScreen</Text>
      </View>
    </AppScreen>
  );
};

export default SeeAllScreen;

const styles = StyleSheet.create({});
