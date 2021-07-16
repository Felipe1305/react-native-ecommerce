import React, {useContext, useEffect} from 'react';
import { View, ActivityIndicator} from 'react-native';
import AuthRoutes from './Auth.routes';
import AuthContext from '../context/auth';
import RoutesApp from './Routes';

const Routes = () => {
    const [signed, setSigned] = useContext(AuthContext);
    
     
            // return (<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}> 
            // <ActivityIndicator size='large' color='#666'/>
            // </View>)
        
useEffect(() => {
 
}, [])
    
    return signed ? <RoutesApp /> : <AuthRoutes /> ;
};




export default Routes;