import React, {useEffect, useState} from 'react';
import StackNavigator from './src/navigation/stackNavigation';
import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import {GenUtil} from './src/utils/GenUtil';
import StorageUtil from './src/utils/storageUtil';
import FullScreenLoader from './src/components/fullScreenLoader';
import LoginScreen from './src/screens/login';

export const navigationRef = React.createRef();

const App = () => {
  const [loggedIn, setLoggedIn] = useState(null);
  useEffect(() => {
    (async () => {
      await GenUtil.init();
      const a =StorageUtil.isLoggedIn();
      console.log(a,'LOL');
      setLoggedIn(StorageUtil.isLoggedIn());
    })();
  }, []);

  if (loggedIn === null) {
    return <FullScreenLoader />;
  }
  if (loggedIn === false) {
    return <LoginScreen />;
  }

  return (
    <NavigationContainer
      theme={DarkTheme}
      ref={navigationRef}
      onReady={() => {
        GenUtil.navigationLoaded();
      }}>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
