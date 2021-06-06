import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {Color} from '../values/color';
import {Icon} from 'react-native-elements';
import {GenUtil} from '../utils/GenUtil';
import RawBottomSheet from './RawBottomSheet';
import SettingsModal from './modals/settingsModal';

const {width} = GenUtil.getDimension();
const HomeHeader = () => {
  const [settings, setSettings] = useState(false);
  return (
    <View style={{paddingHorizontal: 10, paddingTop: 20, width}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{color: Color.white, marginBottom: 10}}>SavingsApp</Text>
        <Icon
          onPress={() => setSettings(true)}
          name="settings"
          color={Color.white}
          containerStyle={{marginRight: 20}}
        />
      </View>

      <Text style={{color: Color.white, alignSelf: 'center'}}>
        You Owe <Text style={{color: Color.whatsAppGreen}}>Rs. 2000</Text>
      </Text>
      <RawBottomSheet
        component={<SettingsModal />}
        modalVisible={settings}
        cancellable={true}
        onHideSheet={() => setSettings(false)}
      />
    </View>
  );
};
export default HomeHeader;
