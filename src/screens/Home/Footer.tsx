import React from 'react';
import {Button, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Footer = () => {
  return (
    <View style={{alignSelf: 'center', flex: 1, justifyContent: 'center'}}>
      <Text style={'blue'}>refetch data</Text>
      <Ionicons
        name="add-outline"
        size={50}
        color={'blue'}
        onPress={() => {}}
      />
    </View>
  );
};

export default Footer;
