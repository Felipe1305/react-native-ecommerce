import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';




const api = axios.create({
    baseURL: 'http://localhost:8080/',
    
 
    
})

export default api;

// const response =  await AsyncStorage.getItem('@AuthToken:token');
      
// api.defaults.headers['Authorization'] = `${response}`