import {useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../config/api.config'

import { createContext } from 'react';


const AuthContext = createContext( [ false, () => { }]);

export default AuthContext;

  