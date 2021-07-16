import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Routes from './src/Routes/Routes';
import HomePage from './src/views/HomePage/HomePage';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/Routes/index'
// import {AuthProvider} from './src/context/auth';
import AuthContext from './src/context/auth';

export default function App() {

const auth = useState(false)
  return (
    <NavigationContainer>

    <AuthContext.Provider value={auth}>
      <Routes />

    </AuthContext.Provider>



 
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
