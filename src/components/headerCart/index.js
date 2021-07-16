import React from 'react';
import { Text, View } from 'react-native';
import Mountains from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

function HeaderCart() {
  return (
    <View style={styles.container}>
        <View style={styles.CircleShapeView}>

      <Mountains name="shopping-cart" color={"#111"} size={35} />
        </View>
      <Text style={styles.headerText}>CARRINHO</Text>
    </View>
  );
}
 
export default HeaderCart;
