import React, { ReactElement } from 'react';
import { render } from '@testing-library/react-native';
import { NativeBaseProvider } from 'native-base';
import Splash from '../Splash';

const wrapper = (children: ReactElement) => {
  return (
    <NativeBaseProvider
      initialWindowMetrics={{
        frame: { x: 0, y: 0, width: 0, height: 0 },
        insets: { top: 0, left: 0, right: 0, bottom: 0 },
      }}
    >
      {children}
    </NativeBaseProvider>
  );
};

describe('Splash screen', () => {
  it('Render Splash screen', () => {
    const { getByText } = render(<Splash />, { wrapper });
    expect(getByText('Splash')).toBeTruthy();
  });
});
