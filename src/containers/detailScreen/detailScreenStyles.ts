import { StyleSheet } from "react-native";
import { Colors } from "../../resources/Colors";

export const detailScreenStyles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Colors.white
  },
  commentInput: {
    padding:10,
    minHeight: 50,
    maxHeight:'30%',
    width: "100%",
    backgroundColor: Colors.alto,
    borderWidth:1,
    borderColor: Colors.black
  },
  text: {
    paddingHorizontal:2,
    color:Colors.black
  },
  textTitle: {
    paddingHorizontal:2,
    color:Colors.titanWhite
  },
  textContainer: {
    marginTop:10,
    flexDirection:'row'
  },
  titleContainer:{
    flex:1,
  }
});
