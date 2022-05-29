import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { QueryClientProvider } from 'react-query';
import { LogBox } from 'react-native';
import { persistor, store, queryClient } from './redux';
import Navigator from './navigation';
import { useLayout } from './hooks';
import 'react-native-gesture-handler';

useLayout().setupLayoutAnimation();
LogBox.ignoreAllLogs();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaProvider>
            <Navigator />
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
}
export default App;
