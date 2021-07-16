import React from 'react';
import { Text, View } from 'react-native';
import Mountains from 'react-native-vector-icons/Foundation';

import styles from './styles';

function Header() {
  return (
    <View style={styles.container}>
        <View style={styles.CircleShapeView}>

      <Mountains name="mountains" color={"#111"} size={35} />
        </View>
      <Text style={styles.headerText}>SERRACOMMERCE</Text>
    </View>
  );
}
 
export default Header;
