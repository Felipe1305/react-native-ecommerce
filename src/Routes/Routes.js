import React, {useContext} from 'react'; 

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CategoriaPage from '../views/CategoriasPage/CategoriaPage';
import HomePage from '../views/HomePage/HomePage';
import Carrinho from '../views/CarrinhoPage/Carrinho';
import Produto from '../views/ProdutoPage/ProdutoPage'
import Detalhes from '../views/DetalhesProdPage/DetalhesProdPage'
import ProfilePage from '../views/ProfilePage/ProfilePage';

import Icon from 'react-native-vector-icons/AntDesign';
import Handbag from 'react-native-vector-icons/SimpleLineIcons';
import PersonOutline from 'react-native-vector-icons/Ionicons';

import AuthContext from '../context/auth';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs () {
  const {signOut} = useContext(AuthContext);
  
  return (
      <Tab.Navigator
    tabBarOptions={{
      activeTintColor: '#000',
    }}>          
      <Tab.Screen 
        name="Home" 
        component={CategoriaPage} 
        options={{
          tabBarLabel: 'HOME',
          tabBarIcon: ({color}) => ( 
          <Icon name="home" color={color} size={25} />
          ),
        }}
      />        
      <Tab.Screen 
        name="Sacola" 
        component={Carrinho} 
        options={{
            tabBarLabel: 'CARRINHO',
          tabBarIcon: ({color}) => (
          <Handbag name="handbag" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen 
        name="Login" 
        component={ProfilePage} 
        options={{
            tabBarLabel: 'SUA CONTA',
          tabBarIcon: ({color}) => (
          <PersonOutline name="person-outline" color={color} size={25} />
          ),
        }}
      />          
    </Tab.Navigator>
            
  );
}


const Routes = () => {
    return (
        <Stack.Navigator initialRouteName="CategoriaPage" >
  
        <Stack.Screen name="CategoriaPage" component={CategoriaPage, MyTabs} options={{ headerShown: false}}/>
        <Stack.Screen name="Carrinho" component={Carrinho} />
        <Stack.Screen name="Produto" component={Produto} />
        <Stack.Screen name="Detalhes" component={Detalhes} />
        <Stack.Screen name="Profile" component={ProfilePage} />
        
     
          
  
        </Stack.Navigator>
    )
}

export default Routes