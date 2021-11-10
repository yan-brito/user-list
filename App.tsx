import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import theme from './src/global/styles/theme';

import { UserList } from './src/pages/UserList';

export default function App() {
  return(
    <ThemeProvider theme={theme}>
      <StatusBar
        translucent
        backgroundColor="transparent"
      />
      <UserList/>
    </ThemeProvider>
  );
};