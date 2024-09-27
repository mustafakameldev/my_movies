import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';

import {TabBarIcon} from '@components/atoms/BottomTabIcon';
import {themeColor} from '@theme/index';
import {StyleSheet} from 'react-native';
import {homeTabRoutes} from './routes';
export default function Navigation() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: props => <TabBarIcon route={route} {...props} />,
        tabBarActiveTintColor: themeColor.text,
        tabBarInactiveTintColor: themeColor.secondary,
        headerShown: false,
        tabBarStyle: styles.tabBar,
      })}>
      {homeTabRoutes.map((tabRoute, index) => (
        <Tab.Screen {...tabRoute} key={index} />
      ))}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    backgroundColor: `${themeColor.background}bf`,
    borderTopWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
    height: 90,
  },
});
