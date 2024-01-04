import 'react-native-gesture-handler';

import React from 'react';
import { PaperProvider } from 'react-native-paper';
import {Routes} from "./src/routes";
import {theme} from "./src/styles/theme";

export default function App() {
  return (
      <PaperProvider theme={theme}>
        <Routes />
      </PaperProvider>
  );
}
