import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import i18n from 'i18next';
import React, { useEffect, useRef } from 'react';
import { initReactI18next } from 'react-i18next';
import { Platform, StatusBar, useColorScheme, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { BaseSetting } from '../config';
import { useLayout } from '../hooks';
import { onChangeLanguage } from '../redux';
import { useTheme } from '../theme';
import { AllScreens, ModalScreens } from './config';

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

function MainScreens() {
  return (
    <MainStack.Navigator
      initialRouteName={BaseSetting.firstScreen}
      screenOptions={{
        headerShown: false,
      }}
    >
      {Object.keys(AllScreens).map((name) => {
        const { component, options } = AllScreens[name];
        return <MainStack.Screen key={name} name={name} component={component} options={options} />;
      })}
    </MainStack.Navigator>
  );
}

/**
 * Navigators allow you to define your application's navigation structure.
 * Navigators also render common elements such as headers and tab bars which you can configure.
 */
function Navigator() {
  // HOOKS
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const isDarkMode = useColorScheme() === 'dark';
  const { enableExperimental } = useLayout();
  const navigationRef: any = useRef(null);
  const { language } = useSelector((state: any) => state.application);

  // EFFECTS
  useEffect(() => {
    // Config status bar
    if (Platform.OS == 'android') {
      StatusBar.setBackgroundColor(isDarkMode ? 'black' : 'white', true);
    }
    StatusBar.setBarStyle(isDarkMode ? 'light-content' : 'dark-content', true);
  }, [isDarkMode]);

  useEffect(() => {
    // Startup Process
    const onProcess = async () => {
      setTimeout(() => {
        navigationRef?.current?.dispatch(StackActions.replace('SignIn'));
      }, 2000);
      // Get current language of device
      const languageCode = language ?? BaseSetting.defaultLanguage;
      dispatch(onChangeLanguage(language));
      // Config language for app
      await i18n.use(initReactI18next).init({
        compatibilityJSON: 'v3',
        lng: languageCode,
        resources: BaseSetting.resourcesLanguage,
        fallbackLng: BaseSetting.defaultLanguage,
      });
      enableExperimental();
    };
    onProcess();
  }, []);

  /**
   * HANDLER
   */

  return (
    <View
      style={{
        flex: 1,
        position: 'relative',
      }}
    >
      <NavigationContainer theme={theme} ref={navigationRef}>
        <RootStack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: 'transparent' },
            cardOverlayEnabled: true,
            cardStyleInterpolator: ({ current: { progress } }) => ({
              cardStyle: {
                opacity: progress.interpolate({
                  inputRange: [0, 0.5, 0.9, 1],
                  outputRange: [0, 0.25, 0.7, 1],
                }),
              },
              overlayStyle: {
                opacity: progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 0.5],
                  extrapolate: 'clamp',
                }),
              },
            }),
            presentation: 'modal',
          }}
        >
          <RootStack.Screen name="MainScreens" component={MainScreens} />
          {Object.keys(ModalScreens).map((name) => {
            const { component, options } = ModalScreens[name];
            return (
              <RootStack.Screen key={name} name={name} component={component} options={options} />
            );
          })}
        </RootStack.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default Navigator;
