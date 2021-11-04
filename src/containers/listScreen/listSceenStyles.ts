import { StyleSheet } from "react-native";
import { Colors } from "../../resources/Colors";

export const listScreenStyles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:Colors.grayWithOpacity
  },
  item:{
    flex:1,
    padding:10,
    marginBottom:10,
    backgroundColor: Colors.white,
    borderWidth:1,
    borderStyle:'solid'
  },
  itemText:{
    fontSize:15,
    color:Colors.black
  },
  footer:{
    flex:1,
    alignItems:'center'
  }
});
