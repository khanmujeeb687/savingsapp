import {Dimensions, ToastAndroid} from 'react-native';
import {v4 as uuidv4} from 'uuid';
import firebase from '@react-native-firebase/app';
import SyncStorage from 'sync-storage';
import RNRestart from 'react-native-restart';
import StorageUtil from "./storageUtil";



export class GenUtil {
  static isNavigationLoaded = false;
  static getDimension() {
    const {width, height} = Dimensions.get('window');
    return {width, height};
  }
  static isEmpty(obj: object): boolean {
    return obj == null || Object.keys(obj).length === 0;
  }

  static showToast(msg: string) {
    ToastAndroid.show(msg, 1000);
  }
  static navigationLoaded() {
    this.isNavigationLoaded = true;
  }
  static getUuid(): string {
    return uuidv4();
  }

  static async init() {
    await SyncStorage.init();
    // const firebaseConfig = {
    //   apiKey: 'AIzaSyCrvlpV-s5bWghQ9XJaZTcD19jDC7uVBJc',
    //   authDomain: 'savingsapp-17793.firebaseapp.com',
    //   projectId: 'savingsapp-17793',
    //   storageBucket: 'savingsapp-17793.appspot.com',
    //   messagingSenderId: '756070644908',
    //   appId: '1:756070644908:web:0c7a4c483875e75d7ab309',
    //   measurementId: 'G-8WPNTYQ5T7',
    // };
    // await firebase.initializeApp(firebaseConfig);
  }


  static async restartApp() {
    RNRestart.Restart();
    // NativeChangaUtil.restartApp();
  }
}
