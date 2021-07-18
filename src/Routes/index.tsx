import React, {useContext, useEffect} from 'react';
import { View, ActivityIndicator} from 'react-native';
import AuthRoutes from './Auth.routes';
import AuthContext from '../context/auth';
import RoutesApp from './Routes';

const Routes = () => {
    const [signed, setSigned] = useContext(AuthContext);
    
     
         
        
useEffect(() => {
 
}, [])
    
    return signed ? <RoutesApp /> : <AuthRoutes /> ;
};




export default Routes;