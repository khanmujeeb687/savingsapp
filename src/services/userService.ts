import firestore, {
  Query,
  QuerySnapshot,
} from '@react-native-firebase/firestore';
import {IUSer} from '../models/user';
import awaitTo from 'async-await-error-handling';
import StorageUtil from '../utils/storageUtil';
import {GenUtil} from '../utils/GenUtil';

export class UserService {
  static async authUser(user: IUSer) {
    const querySnapshot = await firestore()
      .collection('user')
      .where('username', '==', user.username)
      .get();
    if (querySnapshot.docs.length === 0) {
      return UserService.saveUser(user);
    } else if (querySnapshot.docs[0].data().pwd !== user.pwd) {
      return ['Wrong password', {}];
    } else {
      return ['', querySnapshot.docs[0].data()];
    }
  }

  static async saveUser(user: IUSer) {
    const [err, data] = await awaitTo(firestore().collection('user').add({...user,...{amount_owe:0,createdAt:new Date().getTime()}}));
    if (err) {
      return [err, {}];
    } else {
      StorageUtil.setUser(user);
      return ['', data];
    }
  }
  static async getMyAccounts() {
    const [err, data] = await awaitTo(
      firestore()
        .collection('account')
        .where('members', 'array-contains', StorageUtil.getUser().username)
        .get(),
    );
    if (err) {
      return [err, {}];
    } else {
      return ['', data?.docs];
    }
  }
}
