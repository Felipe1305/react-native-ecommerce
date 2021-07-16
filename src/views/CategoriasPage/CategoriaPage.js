import { constants } from "buffer";
import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableHighlight,
} from "react-native";
import AuthContext from "../../context/auth";
import getCategorias from "../../repository/categoriaRepository";
import AsyncStorage from "@react-native-community/async-storage";
import Header from "../../components/header";

const CategoriaPage = ({ navigation }) => {
  const [categorias, setCategorias] = useState([]);
  const bucketUrl = "https://serratec-spring-ionic.s3.sa-east-1.amazonaws.com";

  const [signed, setSigned] = useContext(AuthContext);

  function hadleSignOut() {
    setSigned(false);
  }

  const carregaCategorias = async () => {
    const categorias = await getCategorias();

    setCategorias(categorias);

    // console.log(categorias)
  };

  useEffect(() => {
    carregaCategorias();
    setSigned(true);
  }, []);

  const renderFooter = () => {
    return <ActivityIndicator size="large" color="#20C0DF" />;
  };

  return (
    <>
    <Header />
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => String(item.id)}
        //   ListFooterComponent={renderFooter}
        style={styles.centeredView}
        data={categorias}
        renderItem={({ item }) => (
          <View style={styles.cardView}>
            <View style={styles.descriptionText}>
              <Text style={styles.titleText}>{item.nome}</Text>
              <Image
                style={styles.promotionImage}
                source={{ uri: `${bucketUrl}/cat${item.id}.jpg` }}
              />
              <TouchableHighlight
                style={styles.linkButton}
                title="Product"
                onPress={() =>
                  navigation.navigate("Produto", { categoria_id: item.id })
                }
              >
                <Text style={styles.textLinkButton}>PRODUTOS</Text>
              </TouchableHighlight>
            </View>
          </View>
        )}
      />
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
 
  },
  div: {
    flex: 1,
    alignContent: "center",
    borderStyle: "solid",
  },
  centeredView: {
    flex: 1,
    // alignItems: "center",
    marginTop: 30,
    flexDirection: "column",
  
  },
  cardView: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignContent: "center",
    margin: 5,
    backgroundColor: "white",
    borderRadius: 15,
    padding: 20,
    shadowColor: "#000",
    width: "60%",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: "94%",
    minHeight: 200,
  },
  promotionImage: {
    width: 160,
    height: 120,
  },
  descriptionText: {
    flex: 1,
    alignSelf: "center",
  },
  titleText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 24,
    margin: 5,
    textAlign: "center",
  },
  priceText: {
    color: "#111",
    fontWeight: "bold",
    fontSize: 16,
    margin: 5,
  },
  linkButton: {
    backgroundColor: "#111",
    borderRadius: 15,
    padding: 10,
    elevation: 2,
    margin: 5,
  },
  textLinkButton: {
    color: "#FFFFFF",
    textAlign: "center",
  },
});

export default CategoriaPage;
