/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    export type HomeTabScreenProps<Screen extends keyof HomeTabParamList> = CompositeScreenProps<
      BottomTabScreenProps<HomeTabParamList, Screen>,
      NativeStackScreenProps<HomeStackParamList>
    >;

    export type SignInStackParamList = {
      SignInScreen: undefined;
      HomeTabNavigator: HomeTabParamList | undefined;
    };

    export type HomeStackParamList = {
      HomeScreen: undefined;
    };

    export type SettingStackParamList = {
      SettingScreen: undefined;
    };

    export type HomeTabParamList = {
      HomeStackNavigator: HomeStackParamList | undefined;
      SettingStackNavigator: SettingStackParamList | undefined;
    };

    interface RootParamList
      extends SignInStackParamList,
        HomeStackParamList,
        SettingStackParamList,
        HomeTabParamList {}
  }
}
