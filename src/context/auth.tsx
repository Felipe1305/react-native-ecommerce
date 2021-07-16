import {useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../config/api.config'

import { createContext } from 'react';


const AuthContext = createContext( [ false, () => { }]);

export default AuthContext;

  //   useEffect(() => {
  //     async function loadStorageData() {
   
  //     const storagedToken =  await AsyncStorage.getItem('@AuthToken:token');
  //     console.log(storagedToken)

      

  //     if (storagedToken) {
  //       api.defaults.headers['Authorization'] = `${storagedToken}`
       
        
  //     }
  //   }
  // },[])





















// import React, { createContext, useState, useEffect } from 'react';
// import * as auth from '../services/auth'
// import AsyncStorage from '@react-native-community/async-storage';
// // import {View, ActivityIndicator } from 'react-native'
// import api from '../config/api.config'

// interface AuthContextData {
//     signed: boolean;
//     user: object | null;
//     singIn(): Promise<void>
//     signOut(): void;
// }

// const AuthContext = createContext<AuthContextData>({} as AuthContextData);

// export const AuthProvider = ({children}) => {
//  const [user, setUser] = useState<object | null>(null);
//  const [loading, setLoading] = useState(false);


  
    
//     async function singIn() {
//     setLoading(true)
//       const response = await auth.signIn();
//       console.log(response)
//       // const {token, user} = response;

//       setUser(response.user);

//       api.defaults.headers['Authorization'] = `${response.token}`

//       await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
//       await AsyncStorage.setItem('@RNAuth:token', response.token);
//       setLoading(false)
//     }

//     function signOut () {
//        AsyncStorage.clear().then(() => {
//         setUser(null);    
//     }) 
  
//     }

//     useEffect(() => {
//     async function loadStorageData() {
//       const storagedUser =   await AsyncStorage.getItem('@RNAuth:user');
//       const storagedToken =  await AsyncStorage.getItem('@RNAuth:token');

      

//       if (storagedUser && storagedToken) {
//         api.defaults.headers['Authorization'] = `${storagedToken}`
//           setUser(JSON.parse(storagedUser));
//           setLoading(false)
//       }
//     }
//     loadStorageData();
//     }, [])
  


//     return (
//     <AuthContext.Provider value={{signed: Boolean(user), user, loading, singIn, signOut}}>
//         {children}
//     </AuthContext.Provider>
// )
// };
// export default AuthContext