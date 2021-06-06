import {navigationRef} from '../../App';
import {NavigationScreenNames} from '../navigation/navigationScreenNames';

export interface ICurrentScreen {
  screenName: NavigationScreenNames;
  data: {};
}

export class NavigationUtil {
  static currentScreen: ICurrentScreen;

  static getActiveRouteName() {
    return navigationRef.current?.getCurrentRoute()?.name;
  }
  static navigateScreen(
    routeName: string,
    params: object,
    key: string | undefined,
  ) {
    // const activeRoute = this.getActiveRouteName();
    // const rootState = navigationRef?.current?.getRootState();
    // GenUtil.log({
    //     routeName,
    //     activeRoute,
    //     rootState
    // });

    if (this.getActiveRouteName() != routeName) {
      NavigationUtil.currentScreen = {
        screenName: routeName,
        data: params,
      };

      navigationRef?.current?.navigate({
        name: routeName,
        key,
        params,
      });
    }
  }
}
