import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from 'src/types/navigation.type';

const SeeAllScreen = () => {
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View>
      <Text>SeeAllScreen</Text>
    </View>
  );
};

export default SeeAllScreen;

const styles = StyleSheet.create({});
