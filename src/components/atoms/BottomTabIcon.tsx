import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TabIcon} from 'src/types/navigation.type';

export const TabBarIcon = ({focused, route, size, color}: TabIcon) => {
  let iconName: string;
  if (route.name === 'Home') {
    iconName = focused ? 'grid' : 'grid-outline';
  } else if (route.name === 'SeeAll') {
    iconName = focused ? 'albums' : 'albums-outline';
  } else {
    iconName = 'grid';
  }
  return <Ionicons name={iconName} size={size} color={color} />;
};
