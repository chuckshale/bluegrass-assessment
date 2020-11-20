import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ThemeProvider from './components/ThemeProvider';
import MainStackNavigator from './routes/MainStackNavigator';
import Context from './context/context';

export default function App() {
  return (
    <Context.Provider>
      <ThemeProvider>
        <NavigationContainer>
          <MainStackNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </Context.Provider>
  );
}
