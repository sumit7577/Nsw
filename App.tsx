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

const STYLES = ['default', 'dark-content', 'light-content'] as const
const TRANSITIONS = ['fade', 'slide', 'none'] as const;

function App(): React.JSX.Element {
  const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState<typeof STYLES[number]>("default");
  const [statusBarTransition, setStatusBarTransition] = useState<typeof TRANSITIONS[number]>("fade");
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor={Theme.COLORS.PRIMARY}
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition}
        hidden={hidden}
        translucent={true}
      />
      <Home />
    </>

  );
}

export default App;
