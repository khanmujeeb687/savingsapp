import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Color} from '../values/color';

const RoundedButton = ({
  onPress,
  text,
}: {
  onPress: (a: any) => void;
  text: string;
}) => {
  return (
    <TouchableOpacity
      style={{
        alignSelf: 'center',
        justifyContent: 'flex-end',
        marginTop: 30,
        backgroundColor: Color.orange,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
      }}
      onPress={onPress}>
      <Text style={{color: Color.white}}>{text}</Text>
    </TouchableOpacity>
  );
};

export default RoundedButton;
