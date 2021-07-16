import { enableExpoCliLogging } from 'expo/build/logs/Logs';
import React, {useContext, useState, useEffect} from 'react'
import { StyleSheet, Text, View, Image, SafeAreaView, TextInput, Button, TouchableOpacity } from 'react-native';
import  CredenciaisDTO  from '../../models/credencias.dto';
import AuthContext from '../../context/auth';
import api from '../../config/api.config';
import AsyncStorage from '@react-native-community/async-storage';






const Separator = () => (
  <View style={styles.separator} />
);




const HomePage = ({navigation}) => {
  const [signed, setSigned] = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');



  const authenticate = async (creds) => {
   
   
    try {
        const authorization = await api.post(`/login`,creds, [{observe: 'response', responseType: 'text'}]) 
        console.log(authorization.status)   
        if(authorization.status === 200 ) {
          setSigned(true);
          
          const token = authorization.headers.authorization;
          console.log(token)
     
         

         
          storeData(token)
       
  
          return authorization.headers.authorization;
        } 
        return null;
  
    } catch (error) {
        alert('Usuário ou senha inválidos!')
        setSigned(false);
   
       
    }
  }

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@AuthToken:token', value)
    } catch (error) {
      console.log(error)
    }
  }

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@AuthToken:token')
      if(value === null) {
        alert("Token null")
      }
      return value;
    } catch (error) {
      
    }
  }

  useEffect(() => {
    async function loadStorageData() {
      const storagedToken = await AsyncStorage.getItem('@AuthToken:token')

      if(storagedToken){
        setSigned(true)
      }
     
    }
    loadStorageData();
  }, [])
  
  function hadleSignIn(email,senha) {


    const creds = {
  email: email,
  senha: senha,
};


   
      const token = authenticate(creds)
      console.log(token)
      
// if(token !== null) {
//   setSigned(true);
//   // singIn(creds, token);
//   console.log("Entrou")
// } else {
//  setSigned(false)
 
// }

      
   
    
  }




  //Utilizando async e awai
  // const SingIn = () => {
  //   async function hadleSignIn() {
  //     const response = await signIn();
  //     console.log(response);
  //   }
  // }
  
    return (
      // <SafeAreaView>

        <View style={styles.container}>
            <Text style={styles.texto}>SERRACOMMERCE</Text>
            <Image style={{marginTop: 25, width: 200, height: 200, borderRadius: 150}} source={require("../../assets/images/telainicial.JPG")}/>
      
       
      <TextInput
        style={styles.login__input}
        // value={text}
        placeholder="exemplo@exemplo.com.br"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.login__input}
        // onChangeText={onChangeNumber}
        // value={password}
        value={senha}
        onChangeText={setSenha}
        secureTextEntry={true} 
     
        placeholder="12345"
        
        
      
      />
        <TouchableOpacity 
            style={styles.login__button} 
            onPress={() => hadleSignIn(email, senha)}>
                    <Text style={styles.login__buttonText}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.cadastro__button} 
            onPress={() => {}}>
                    <Text style={styles.cadastro__buttonText}>Cadastrar</Text>
            </TouchableOpacity>
            </View>

      //  {/* <Button style={styles.button} title="Entrar" onPress={() => hadleSignIn(email, senha)} />
      //  <Separator />
      //  <Button  color="#B5B3B5" title="Cadastrar" /> */}

      // {/* </SafeAreaView> */}
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fff",
},

texto: {
    fontSize: 30,
    marginBottom: 20,
    color: "#111",
    fontWeight:"bold",
},
login__input:{
    backgroundColor: "#fff",
    fontSize: 19,
    padding: 7,
    marginBottom: 15,
    width: "90%",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#111",
    borderRadius: 20,
    
},

// login__input.hover: {
//   border: '1px solid transparent'
// },

login__button:{
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: 50,
    backgroundColor: '#4285F4',
    marginBottom: 15,
    borderRadius: 20,
},

login__buttonText:{
    fontWeight:"bold",
    fontSize: 25,
    color:"white"
},
cadastro__button:{
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: 50,
    backgroundColor: '#111',
    marginBottom: 15,
    borderRadius: 20,
},
cadastro__buttonText:{
    fontWeight:"bold",
    fontSize: 25,
    color:"white"
},
sair__button:{
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
    height: 50,
    backgroundColor: '#fff',
    marginBottom: 15,
    borderRadius: 20        
},
sair__buttonText:{
    fontWeight:"bold",
    fontSize: 25,
    color:"#111"
},



  //   container: {
  //     flex: 1,
  //     backgroundColor: '#fff',
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //   },
  //   input: {
  //     height: 40,
  //     margin: 12,
  //     borderWidth: 1,
      
  //   },
  //   button: {
  //     justifyContent: 'center',
  //     width: '80%',
  //     height: 50,
  //     backgroundColor: 'blue'
  // },
  // btnCadastro: {
  //   justifyContent: 'center',
  //   width: '80%',
  //   height: 50,
  //   backgroundColor: 'white'
  // },
  // separator: {
  //   marginVertical: 8,
  //   borderBottomColor: '#737373',
  //   borderBottomWidth: StyleSheet.hairlineWidth,
  // },

  
  });
export default HomePage
