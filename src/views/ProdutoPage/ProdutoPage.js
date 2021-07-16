import { constants } from 'buffer';
import React, {useEffect, useState, useContext} from 'react'
import { View, Text, StyleSheet,Button, FlatList, ActivityIndicator, Image, TouchableHighlight } from 'react-native'
import AuthContext from '../../context/auth';
import getProdutos from '../../repository/produtoRepository'
import {addCart}  from '../../repository/produtoRepository'


const ProdutoPage = ({route, navigation}) => {
    const [produtos, setProdutos] = useState([]);
    const [showDefault, setShowDefault] = useState("");
    const bucketUrl = "https://serratec-spring-ionic.s3.sa-east-1.amazonaws.com"

   
    const { categoria_id } = route.params;
   
    const add = async (produto) => {
      console.log(produto)
      await addCart({produto});
  }


    const carregaProdutos = async () => {
        const produtos = await getProdutos(categoria_id);
        
        setProdutos(produtos);
        console.log(produtos.content)
    }


    useEffect(() => {
     
        carregaProdutos();
    }, [])

    
 
        


        return (
        <View style={styles.container}>


         
        <FlatList 
        keyExtractor={item => String(item.id)}
      //   ListFooterComponent={renderFooter}
        style={styles.centeredView} 
        data={produtos.content}
        
        renderItem={({item}) => (
          <View style={styles.cardView} >
    <View> 
        <View style={styles.descriptionText} >
        <Text style={ styles.titleText }>{item.nome}</Text>
              <Image
    style={styles.promotionImage}
    source={{uri: `${bucketUrl}/prod${item.id}-small.jpg`}}
 
    />
     <Text style={ styles.priceText }>R$ {item.preco}</Text>
     </View>


     <View>
     <TouchableHighlight
      style={ styles.linkButton }
      title="Product"
      onPress={() => navigation.navigate('Detalhes', {produto: item})}
    >
    <Text style={ styles.textLinkButton }>DETALHES</Text>
  </TouchableHighlight>



  <TouchableHighlight
      style={ styles.linkButton1 }
      title="Product"
      onPress={() => {}}
    >
    <Text style={ styles.textLinkButton }>COMPRAR</Text>
  </TouchableHighlight>

  <TouchableHighlight
      style={ styles.linkButton2 }
      title="Product"
      onPress={() => add(item)}
    >
    <Text style={ styles.textLinkButton }>ADICIONAR AO CARRINHO</Text>
  </TouchableHighlight>
  </View>
        </View>



       
       
      
          </View>
            )}/>
           
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  div: {
      flex: 1,
      alignContent: 'center',
      borderStyle: 'solid'
  },
    centeredView: {
        flex: 1,
        // alignItems: "center",
        marginTop: 30,
        flexDirection: 'column'
      },
      cardView: {
        flex: 1,
        // flexDirection: 'row',
        justifyContent: 'space-between',
        // alignContent: 'center',
        margin: 5,
        backgroundColor: "white",
        borderRadius: 15,
        padding: 20,
        shadowColor: "#000",
        width: '100%',
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: '94%',
        minHeight: 200
      },
      promotionImage: {
        width: 160,
        height: 120,
        alignSelf: 'center'

      },
      descriptionText: {
        flex: 1,
        alignSelf: 'center',
      
      },
      titleText: {
        color: "black",
        fontWeight: "bold",
        fontSize: 24,
        margin: 5, 
        textAlign: 'center'
      },
      priceText: {
        color: "#111",
        fontWeight: "bold",
        fontSize: 16,
        margin: 5,
        textAlign: 'center'
      },
      linkButton: {
        backgroundColor: "#111",
        borderRadius: 15,
        padding: 10,
        elevation: 2,
        margin: 5
      },
      linkButton1: {
        backgroundColor: "#34A853",
        borderRadius: 15,
        padding: 10,
        elevation: 2,
        margin: 5
      },
      linkButton2: {
        backgroundColor: "#4285F4",
        borderRadius: 15,
        padding: 10,
        elevation: 2,
        margin: 5
      },
      textLinkButton: {
        color: "#FFFFFF",
        textAlign: 'center'
      },
      button: {
      borderRadius: 15,
     
     
      margin: 5},
    
});
export default ProdutoPage
