import React, {useState} from 'react';
import {Switch, View} from 'react-native';
import {Input} from 'react-native-elements';
import {Color} from "../values/color";
import CreateButton from "./createButton";

const CreateTransaction = () => {
  const [amount, setAmount] = useState('');
  return (
    <View style={{padding:20}}>
      <Input inputStyle={{color:Color.white}} onChange={a => setAmount(a.text)} value={amount} />
      <Switch value={true} />
      <CreateButton/>
    </View>
  );
};

export default CreateTransaction;
