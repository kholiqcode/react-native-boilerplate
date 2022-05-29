import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTranslation} from 'react-i18next';
import {BaseColor, BaseStyle, useTheme} from '../../../theme';

const BottomTab: any = createBottomTabNavigator();

export const BottomTabNavigator = ({
  tabScreens = {},
}: {
  tabScreens: {[key: string]: Tab.ITabScreens};
}): JSX.Element => {
  const {t} = useTranslation();
  const {colors} = useTheme();
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        showIcon: true,
        showLabel: true,
        activeTintColor: colors.primary,
        inactiveTintColor: BaseColor.grayColor,
        style: BaseStyle.tabBar,
        labelStyle: {
          fontSize: 12,
        },
      }}>
      {Object.keys(tabScreens).map((name, index) => {
        const {options, component} = tabScreens[name];
        return (
          <BottomTab.Screen
            key={index}
            name={name}
            component={component}
            options={{
              ...options,
              title: t(options.title),
              headerShown: false,
            }}
          />
        );
      })}
    </BottomTab.Navigator>
  );
};
