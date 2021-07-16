import React from 'react'; 

import HomePage from '../views/HomePage/HomePage';

import { createStackNavigator} from '@react-navigation/stack';

const AuthStack = createStackNavigator();

const AuthRoutes = () => (
    <AuthStack.Navigator>

        <AuthStack.Screen name="HomePage"  component={HomePage} options={{ headerShown: false}}/>
    </AuthStack.Navigator>
);

export default AuthRoutes;