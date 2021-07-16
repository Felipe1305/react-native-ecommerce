import React , {useContext} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import AuthContext from '../../context/auth';
import AsyncStorage from '@react-native-community/async-storage';

const ProfilePage = () => {

  const [signed, setSigned] = useContext(AuthContext);


  function hadleSignOut() {
    setSigned(false);
    const value = "";
    storeData(value)
  }

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@AuthToken:token', value)
    } catch (error) {
      console.log(error)
    }
  }

    return (
       <View style={styles.container}>
           <Text>Profile</Text>

           <TouchableOpacity 
            style={styles.login__button} 
            onPress={() => hadleSignOut()}>
                    <Text style={styles.login__buttonText}>Sair</Text>
            </TouchableOpacity>
       </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    login__button:{
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: 50,
    backgroundColor: '#4285F4',
    marginBottom: 15,
    borderRadius: 20,
},
  });

  export default ProfilePage
