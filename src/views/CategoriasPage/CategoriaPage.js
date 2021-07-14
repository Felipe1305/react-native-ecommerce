import { constants } from 'buffer';
import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet,Button, FlatList, ActivityIndicator, Image } from 'react-native'
import getCategorias from '../../repository/categoriaRepository'






const CategoriaPage = ({navigation}) => {
    const [categorias, setCategorias] = useState([]);
    const bucketUrl = "https://serratec-spring-ionic.s3.sa-east-1.amazonaws.com"




    const carregaCategorias = async () => {
        const categorias = await getCategorias();
    
        setCategorias(categorias);
        console.log(categorias)
    }


    useEffect(() => {
        carregaCategorias()

    }, [])

    const renderFooter = () => {
        return <ActivityIndicator size="large" color="#20C0DF"/>
    }


    return (
      <View style={styles.container}>
          <FlatList 
          keyExtractor={item => String(item.id)}
        //   ListFooterComponent={renderFooter}
          style={styles.div} 
          data={categorias}
          
          renderItem={({item}) => (
            <View style={{backgroundColor: 'lightgreen', marginBottom: '5px', alignItems: 'center', padding: 20, borderStyle: 'solid', borderRadius: 12, flexDirection: 'row'}}>
          <View style={{marginBottom: '5px', alignItems: 'center', padding: 20, borderStyle: 'solid', borderRadius: 12}}>
         <Image style={{width: 50, height: 50}} source={{uri:`${bucketUrl}/cat${item.id}.jpg`}} />
          </View>
          <Text style={{textAlign: 'center'}}>{item.nome}</Text>
            </View>
            
        )}/>
          <Text>Categoria Page</Text>
          <Button style={styles.button} title="Carrinho" onPress={() => navigation.navigate('Carrinho')}/>
          <Button style={styles.button} title="Categorias" onPress={() => console.log('oi')}/>
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
    div: {
        flex: 1,
        alignContent: 'center',
        borderStyle: 'solid'
    }
  });

export default CategoriaPage
