import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme, AddIcon } from 'native-base';
import { Home, Setting, SignIn, Splash } from '../screens';
import { NavigationContainer } from '@react-navigation/native';

const SignInStack = createNativeStackNavigator<ReactNavigation.SignInStackParamList>();
function SignInStackNavigator() {
  return (
    <SignInStack.Navigator initialRouteName="SignInScreen" screenOptions={{ headerShown: false }}>
      <SignInStack.Screen name="SignInScreen" component={SignIn} />
      <SignInStack.Screen
        name="HomeTabNavigator"
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        component={HomeTabNavigator}
      />
    </SignInStack.Navigator>
  );
}

const SettingStack = createNativeStackNavigator<ReactNavigation.SettingStackParamList>();
function SettingStackNavigator() {
  return (
    <SettingStack.Navigator initialRouteName="SettingScreen" screenOptions={{ headerShown: false }}>
      <SettingStack.Screen name="SettingScreen" component={Setting} />
    </SettingStack.Navigator>
  );
}

const HomeTab = createBottomTabNavigator<ReactNavigation.HomeTabParamList>();
function HomeTabNavigator() {
  const theme = useTheme();
  const { colors } = theme;

  return (
    <HomeTab.Navigator
      initialRouteName="HomeStackNavigator"
      screenOptions={{
        tabBarActiveTintColor: colors.lightBlue[100],
        tabBarInactiveTintColor: colors.gray[400],
        tabBarShowLabel: false,
        tabBarStyle: {
          borderRadius: 10,
        },
      }}
    >
      <HomeTab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <AddIcon color={focused ? colors.blue[700] : colors.coolGray[900]} size={'3xl'} />
          ),
        }}
        name="HomeStackNavigator"
        component={Home}
      />
      <HomeTab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <AddIcon color={focused ? colors.blue[700] : colors.coolGray[900]} size={'3xl'} />
          ),
        }}
        name="SettingStackNavigator"
        component={SettingStackNavigator}
      />
    </HomeTab.Navigator>
  );
}

const SpashStack = createNativeStackNavigator();
function SplashNavigator() {
  return (
    <SpashStack.Navigator initialRouteName="SplashScreen">
      <SpashStack.Screen
        name="SplashScreen"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />
    </SpashStack.Navigator>
  );
}

function Router() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <NavigationContainer>
      {loading ? <SplashNavigator /> : <SignInStackNavigator />}
    </NavigationContainer>
  );
}

export default Router;
