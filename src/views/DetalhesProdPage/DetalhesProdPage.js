import React, {useEffect, useState, useContext} from 'react'
import { View, Text, StyleSheet,Button, FlatList, ActivityIndicator, Image, TouchableHighlight } from 'react-native'
import { addCart } from '../../repository/produtoRepository'

const DetalhesProdPage = ({navigation, route}) => {

    const bucketUrl = "https://serratec-spring-ionic.s3.sa-east-1.amazonaws.com"
    const {produto} = route.params;

   
    const add = async (produto) => {
      const prod = await addCart(produto);
      console.log(produto)
  }
   

   
    return (
   
<View style={ Styles.centeredView }>
<View style={ Styles.cardView }>
  <Image style={ Styles.promotionImage } source={{uri:`${bucketUrl}/prod${produto.id}.jpg`}}   />
  <View style={ Styles.descriptionText }>
    <Text style={ Styles.titleText }>{produto.nome}</Text>
    <Text style={ Styles.priceText }>R$ {produto.preco}</Text>
    <TouchableHighlight
        style={ Styles.linkButton }
        onPress={() => {}}
      >
      <Text style={ Styles.textLinkButton }>COMPRAR</Text>
    </TouchableHighlight>
    <TouchableHighlight
      style={ Styles.linkButton2 }
      title="Product"
      onPress={() => add({produto})}
    >
    <Text style={ Styles.textLinkButton }>ADICIONAR AO CARRINHO</Text>
  </TouchableHighlight>
  </View>
</View>
</View>
    )
}

const Styles = StyleSheet.create({
  centeredView: {
      flex: 1,
      alignItems: "center",
      marginTop: 30
    },
    cardView: {
      flexDirection: 'column',
      margin: 5,
      backgroundColor: "white",
      borderRadius: 15,
      padding: 15,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      width: '94%',
      minHeight: 700
    },
    promotionImage: {
      flex: 2,
      width: '100%'
    },
    descriptionText: {
      flex: 1
    },
    titleText: {
      textAlign: "center",
      color: "black",
      fontWeight: "bold",
      fontSize: 20,
      margin: 10
    },
    priceText: {
      textAlign: "center",
      color: "#111",
      fontWeight: "bold",
      fontSize: 30,
      margin: 10
    },
    linkButton: {
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
    }
  
});

export default DetalhesProdPage
