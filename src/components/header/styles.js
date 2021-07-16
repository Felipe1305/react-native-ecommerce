import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      paddingTop: 20,
      paddingBottom: 20,
      backgroundColor: '#111',
      alignItems: 'center'

    },
    headerText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white'
    }, 
    CircleShapeView: {
        //To make Circle Shape
        width: 50,
        height: 50,
        borderRadius: 150 / 2,
        backgroundColor: "#feffff",
        alignSelf: "center",
        justifyContent: 'center',
        alignItems: "center",
    
      },
  });

  export default styles;