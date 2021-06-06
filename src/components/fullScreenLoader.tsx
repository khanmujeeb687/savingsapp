import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {Color} from '../values/color';
import {GenUtil} from '../utils/GenUtil';

const {height, width} = GenUtil.getDimension();
const FullScreenLoader = () => {
  return (
    <View
      style={{
        backgroundColor: Color.themeSilverGray,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width,
        height,
      }}>
      <ActivityIndicator size={'large'} color={Color.orange} />
      <Text style={{color: Color.white}}>Fetching....</Text>
    </View>
  );
};

export default FullScreenLoader;
