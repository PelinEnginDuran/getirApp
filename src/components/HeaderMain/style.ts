import { StyleSheet, Dimensions, Image } from "react-native";
import { colors } from "../../style/colors";


const {height}=Dimensions.get("window")
const styles=StyleSheet.create({
    headerMain:{
        height:height * 0.075,
        backgroundColor:colors.yellow
    },
    headerOne:{
        backgroundColor:"#fff",
        width:"83%",
        height:height * 0.075,
        flexDirection:"row",
        paddingHorizontal:"2%",
        borderTopRightRadius:25,
        borderBottomRightRadius:25,
        alignItems:"center"
       


    },
    headerOneView:{
        flexDirection:"row",
        alignItems:"center",
        gap:5,
        marginLeft:3,
        borderLeftColor:"#f3f2fd",
        borderLeftWidth:4
    
        

    },
    image:{
        width:30,
        height:30,
       
       
    },
    textStyleHome:{
        fontWeight:"bold",
        fontSize:20
    },
    headerTwo:{
        width:"20%",
        alignItems:"center",
       
       
    },
    

})
export default styles