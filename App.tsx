/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import Home from './src/screens';
import { StatusBar } from 'react-native';
import { Theme } from './src/constants';
import { QueryClient, QueryClientProvider } from 'react-query';

const STYLES = ['default', 'dark-content', 'light-content'] as const
const TRANSITIONS = ['fade', 'slide', 'none'] as const;

export const queryClient = new QueryClient();

function App(): React.JSX.Element {
  const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState<typeof STYLES[number]>("default");
  const [statusBarTransition, setStatusBarTransition] = useState<typeof TRANSITIONS[number]>("fade");
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar
        animated={true}
        backgroundColor={Theme.COLORS.PRIMARY}
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition}
        hidden={hidden}
        translucent={true}
      />
      <Home />
    </QueryClientProvider>

  );
}

export default App;
