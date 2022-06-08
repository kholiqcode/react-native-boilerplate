import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { LogBox } from 'react-native';
import { persistor, store } from './redux';
import Router from './navigation';
import { useLayout } from './hooks';
import 'react-native-gesture-handler';
import { NativeBaseProvider } from 'native-base';
import { themes } from './theme';

useLayout().setupLayoutAnimation();
LogBox.ignoreAllLogs();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <NativeBaseProvider theme={themes}>
            <Router />
          </NativeBaseProvider>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}
export default App;
