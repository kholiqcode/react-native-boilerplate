import { createNavigationContainerRef, NavigatorScreenParams } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(
  name: keyof ReactNavigation.RootParamList,
  params?: NavigatorScreenParams<ReactNavigation.RootParamList>['params'],
) {
  if (navigationRef.isReady() && navigationRef.current) {
    navigationRef.current.navigate(name, params);
  }
}

export function navigateBack() {
  if (navigationRef.isReady() && navigationRef.current) {
    navigationRef.current.goBack();
  }
}

export function currentScreenName() {
  if (navigationRef.isReady() && navigationRef.current) {
    return navigationRef.current.getCurrentRoute();
  }
  return '';
}

export function navigateAndReset(
  name: keyof ReactNavigation.RootParamList,
  params?: NavigatorScreenParams<ReactNavigation.RootParamList>['params'],
) {
  if (navigationRef.isReady() && navigationRef.current) {
    navigationRef.current.resetRoot({
      index: 0,
      routes: [{ name, params }],
    });
  }
}

export default {
  navigate,
  navigateAndReset,
  navigateBack,
  currentScreenName,
};
