import { enableExpoCliLogging } from 'expo/build/logs/Logs';
import React from 'react'
import { StyleSheet, Text, View, Image, SafeAreaView, TextInput, Button } from 'react-native';


const Separator = () => (
  <View style={styles.separator} />
);

// login() {

// }



// login() {
//   this.auth.authenticate(this.creds)
//   .subscribe(response => {
//     console.log(this.creds)
//     this.auth.successfulLogin(response.headers.get('Authorization'));
//     this.navCtrl.setRoot('CategoriaPage');
//   }, error =>{})

// }

const HomePage = ({navigation}) => {
  
    return (
      <SafeAreaView>

        <View style={styles.container}>
            <Text>Ecommerce React Native</Text>
            <Image style={{marginTop: 25, width: 300, height: 300, borderRadius: 150}} source={require("../../assets/images/telainicial.JPG")}/>
        </View>
       
      <TextInput
        style={styles.input}
        // value={text}
        placeholder="exemplo@exemplo.com.br"
      />
      <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        // value={password}
        textContentType={'password'}
     
        placeholder="12345"
      
      />
       <Button style={styles.button} title="Entrar" onPress={() => navigation.navigate('CategoriaPage')}/>
       <Separator />
       <Button  color="#B5B3B5" title="Cadastrar" />

      </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      
    },
    button: {
      justifyContent: 'center',
      width: '80%',
      height: 50,
      backgroundColor: 'blue'
  },
  btnCadastro: {
    justifyContent: 'center',
    width: '80%',
    height: 50,
    backgroundColor: 'white'
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  });
export default HomePage
