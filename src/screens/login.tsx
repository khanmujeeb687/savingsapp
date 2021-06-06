import React, {useState} from 'react';
import {StatusBar, View} from 'react-native';
import {Input} from 'react-native-elements';
import {Color} from '../values/color';
import RoundedButton from '../components/roundedButton';
import {GenUtil} from '../utils/GenUtil';
import {UserService} from '../services/userService';
import {IUSer} from '../models/user';
import RoundedButtonWithLoader from "../components/RoundedButtonWithLoader";

const {width} = GenUtil.getDimension();
const LoginScreen = () => {
  const [value, setValue] = useState('');
  const [pwd, setPwd] = useState('');
  const submit = async () => {
    if (value && value.length > 3 && pwd && pwd.length > 3) {
      const [err, data] = await UserService.authUser({
        username: value,
        pwd,
      } as IUSer);
      if (err) {
        GenUtil.showToast(err);
      } else {
        GenUtil.restartApp();
      }
    } else {
      GenUtil.showToast(
        'Please enter a username and password more than 3 characters',
      );
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Color.themeSilverGray,
        alignContent: 'center',
        justifyContent: 'center',
      }}>
      <StatusBar backgroundColor={Color.themeSilverGray} />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={{width: width - 100, alignItems: 'flex-end'}}>
          <Input
            label={'Enter username'}
            inputStyle={{color: Color.white}}
            value={value}
            onChangeText={a => setValue(a)}
          />
          <Input
            label={'Enter password'}
            inputStyle={{color: Color.white}}
            value={pwd}
            onChangeText={a => setPwd(a)}
          />
        </View>
        <View>
          <RoundedButton onPress={submit} text={'Login'} />
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
