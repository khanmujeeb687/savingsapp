import React from 'react';
import {Text, View} from 'react-native';
import {Color} from '../../values/color';
import StorageUtil from '../../utils/storageUtil';

const SettingsModal = () => {
  return (
    <View style={{padding: 10, alignItems: 'center'}}>
      <Text onPress={() => StorageUtil.logOut()} style={{color: Color.white}}>
        Logout
      </Text>
    </View>
  );
};
export default SettingsModal;
