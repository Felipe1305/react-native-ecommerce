import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableHighlight,
  Image,
  TouchableOpacity,
} from "react-native";

import HeaderCart from "../../components/headerCart";
import IconCart from "react-native-vector-icons/AntDesign";

const Carrinho = ({ navigation, route }) => {
  const [num, setNum] = useState(1);
  const [produtos, setProdutos] = useState([]);
  const produto = route.params;
  const bucketUrl = "https://serratec-spring-ionic.s3.sa-east-1.amazonaws.com";

  const getCarrinho = async () => {
    try {
      fetch("http://localhost:8080/produtos/carrinho")
        .then((res) => res.json())
        .then((res) => {
          setProdutos(res);
          return res;
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCarrinho();
  }, []);

  return (
    <>
      <HeaderCart />
      <View style={styles.container}>
        <FlatList
          keyExtractor={(item, index) => String(item.id + index)}
          style={styles.centeredView}
          data={produtos}
          renderItem={({ item }) => (
            <View style={styles.cardView}>
              <View>
                <View style={styles.descriptionText}>
                  <Text style={styles.titleText}>{item.nome}</Text>
                  <Image
                    style={styles.promotionImage}
                    source={{ uri: `${bucketUrl}/prod${item.id}-small.jpg` }}
                  />
                  <Text style={styles.priceText}>R$ {item.preco}</Text>
                </View>

                <View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignSelf: "center",
                      justifyContent: "space-evenly",
                      marginTop: 5,
                      marginBottom: 5,
                    }}
                  >
                    <TouchableOpacity onPress={() => {}}>
                      <IconCart name="minuscircleo" color={"#111"} size={30} />
                    </TouchableOpacity>

                    <Text style={styles.priceText}> {num} </Text>

                    <TouchableOpacity onPress={() => setNum(num+1)}>
                      <IconCart name="pluscircleo" color={"#111"} size={30} />
                    </TouchableOpacity>
                  </View>

                  <TouchableHighlight
                    style={styles.linkButton2}
                    title="Product"
                    onPress={() => {}}
                  >
                    <Text style={styles.textLinkButton}>REMOVER</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </View>
          )}
        />
        <TouchableHighlight
          style={styles.linkButton1}
          title="Product"
          onPress={() => {}}
        >
          <Text style={styles.textLinkButton}>COMPRAR</Text>
        </TouchableHighlight>
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
    marginTop: 30,
    flexDirection: "column",
  },
  cardView: {
    flex: 1,
    justifyContent: "space-between",
    margin: 5,
    backgroundColor: "white",
    borderRadius: 15,
    padding: 20,
    shadowColor: "#000",
    width: "100%",
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
    alignSelf: "center",
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
    fontSize: 25,
    // margin: 5,
    textAlign: "center",
  },
  linkButton: {
    backgroundColor: "#111",
    borderRadius: 15,
    padding: 10,
    elevation: 2,
    margin: 5,
  },
  linkButton1: {
    backgroundColor: "#34A853",
    borderRadius: 15,
    padding: 10,
    elevation: 2,
    margin: 5,
  },
  linkButton2: {
    backgroundColor: "#DE1F1F",
    borderRadius: 15,
    padding: 10,
    elevation: 2,
    margin: 5,
  },
  textLinkButton: {
    color: "#FFFFFF",
    textAlign: "center",
  },
  button: {
    borderRadius: 15,

    margin: 5,
  },
});

export default Carrinho;
