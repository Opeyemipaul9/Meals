import React, {useState} from 'react';
import {RestuarantsScreen} from './src/features/screens/restuatant.screen';
import {ThemeProvider} from 'styled-components';
import {theme} from './src/infrastructure/theme';

const App = () => {
  return;
  <ThemeProvider theme={theme}>
    <RestuarantsScreen />
  </ThemeProvider>;
};
export default App;
