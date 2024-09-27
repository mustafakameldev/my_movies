import {useGetMovies} from '@hooks/useGetMovies';
import AppScreen from '@providers/AppScreen';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {RootStackParamList} from 'src/types/navigation.type';
import Footer from './Footer';
import {View} from 'react-native';
import {getColor} from '@theme/index';

const HomeScreen = () => {
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {data, isFetching, isLoading, refetch} = useGetMovies();

  return (
    <AppScreen>
      <View style={{backgroundColor: 'red', flex: 1}}></View>
      {/* <Footer /> */}
    </AppScreen>
  );
};

export default HomeScreen;
