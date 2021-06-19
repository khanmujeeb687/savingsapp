import SyncStorage from 'sync-storage';
import {Constant} from '../values/constant';
import {IUSer} from '../models/user';
import {GenUtil} from './GenUtil';

export default class StorageUtil {
  static setKey(key: string, value: object | string | number | boolean) {
    SyncStorage.set(key, value);
  }

  static getKey(key: string): string {
    return SyncStorage.get(key);
  }

  static setObject(key: string, value: object) {
    const str = JSON.stringify(value);
    StorageUtil.setKey(key, str);
  }

  static getObject(key: string): object {
    const str = SyncStorage.get(key);
    return !str ? {} : JSON.parse(str);
  }

  static getNumber(key: string): number {
    const value = StorageUtil.getKey(key);
    return parseInt(value) || 0;
  }

  static setNumber(key: string, val: number) {
    return SyncStorage.set(key, val);
  }

  static getBoolean(key: string): boolean {
    const value = StorageUtil.getKey(key);
    return !!value;
  }

  static setBoolean(key: string, val: boolean) {
    return StorageUtil.setKey(key, val);
  }

  static removeKey(key: string) {
    SyncStorage.remove(key);
  }

  static setUser(user: IUSer) {
    StorageUtil.setObject(Constant.USER_DATA, user);
  }

  static getUser(): IUSer {
    return StorageUtil.getObject(Constant.USER_DATA) as IUSer;
  }
  static isLoggedIn(): boolean {
    return !GenUtil.isEmpty(StorageUtil.getUser());
  }
  static logOut(): boolean {
    StorageUtil.setUser({} as IUSer);
    GenUtil.restartApp();
  }
}
