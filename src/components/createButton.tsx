import React, {useState} from 'react';
import {View} from 'react-native';
import RawBottomSheet from './RawBottomSheet';
import CreateTransaction from './createTransaction';
import RoundedButton from './roundedButton';
import {UserService} from '../services/userService';

const CreateButton = () => {
  const [visible, setVisible] = useState(false);

  return (
    <View>
      <RawBottomSheet
        component={<CreateTransaction />}
        modalVisible={visible}
        cancellable={true}
        onHideSheet={() => setVisible(false)}
      />
      <RoundedButton
        onPress={() => {
          UserService.authUser('mujeebkhan', '@mujeeb');
        }}
        text={'+ create Account'}
      />
    </View>
  );
};

export default CreateButton;
