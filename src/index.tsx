import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

import themes from './global/styles/themes';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './routes/app.routes';
import { QuestionsProvider } from './hooks/question';


const App = ()=> {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  }); 

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return (
    <ThemeProvider theme={themes}>
        <NavigationContainer>
          <QuestionsProvider>
            <AppRoutes/>
          </QuestionsProvider>
        </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
