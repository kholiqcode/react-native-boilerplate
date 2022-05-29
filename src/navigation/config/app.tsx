import React from 'react';
import {Home, Setting} from '../../screens';
import {Animation} from '../../theme';
import {tabBarIcon, BottomTabNavigator} from '../components';

export const MainTabScreens: {[key: string]: Screen.RootObject} = {
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

const MainMenu = () => {
  return <BottomTabNavigator tabScreens={MainTabScreens} />;
};

export default {
  MainMenu: {
    component: MainMenu,
    options: {
      title: 'home',
      cardStyleInterpolator: Animation.bottomToUp,
      headerShown: false,
    },
  },
};
