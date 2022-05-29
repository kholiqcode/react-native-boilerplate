import React from 'react';
import {Home, Setting} from '../../screens';
import {Animation} from '../../theme';
import {tabBarIcon, BottomTabNavigator} from '../components';

export const AppTabScreens: {[key: string]: Screen.RootObject} = {
  Home: {
    component: Home,
    options: {
      title: 'home',
      tabBarIcon: ({color}: {color: string}) =>
        tabBarIcon({color, name: 'home'}),
    },
  },
  Setting: {
    component: Setting,
    options: {
      title: 'setting',
      tabBarIcon: ({color}: {color: string}) =>
        tabBarIcon({color, name: 'cog'}),
    },
  },
};

const AppMenu = () => {
  return <BottomTabNavigator tabScreens={AppTabScreens} />;
};

export default {
  AppMenu: {
    component: AppMenu,
    options: {
      title: 'home',
      cardStyleInterpolator: Animation.bottomToUp,
      headerShown: false,
    },
  },
};
