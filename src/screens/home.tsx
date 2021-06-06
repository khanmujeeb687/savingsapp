import React, {useEffect, useState} from 'react';
import CreateButton from '../components/createButton';
import {SafeAreaView, StatusBar} from 'react-native';
import TransactionsList from '../components/transactions';
import {Color} from '../values/color';
import HomeHeader from '../components/homeHeader';
import {UserService} from '../services/userService';
import {GenUtil} from '../utils/GenUtil';
import FullScreenLoader from '../components/fullScreenLoader';

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      await fetch();
      setLoading(false);
    })();
  }, []);

  const fetch = async () => {
    const [err, data] = await UserService.getMyAccounts();
    if (err) {
      GenUtil.showToast(err);
    } else {
      setData(data);
    }
  };

  if (loading) {
    return <FullScreenLoader />;
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Color.themeSilverGray}}>
      <StatusBar backgroundColor={Color.themeSilverGray} />
      <HomeHeader />
      <CreateButton />
      <TransactionsList />
    </SafeAreaView>
  );
};

export default Home;
