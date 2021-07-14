import React from 'react'; 

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import CategoriaPage from '../views/CategoriasPage/CategoriaPage';
import HomePage from '../views/HomePage/HomePage';
import Carrinho from '../views/CarrinhoPage/Carrinho';



const Stack = createStackNavigator();


const Routes = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="HomePage" >
  
        <Stack.Screen name="CategoriaPage" component={CategoriaPage} />
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="Carrinho" component={Carrinho} />
     
          
  
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default Routes