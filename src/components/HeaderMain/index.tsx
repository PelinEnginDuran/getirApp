import React from 'react'
import { View, StyleSheet, Text, Image, SafeAreaView } from 'react-native'
import styles from "./style"
import Icon from 'react-native-vector-icons/AntDesign';
import { colors } from '../../style/colors';

function index () {
  return (


<View style={styles.headerMain}>
  <View style={styles.headerOne}>
    <Image style={styles.image}
     source={require("../../screens/HomeScreens/home.jpg")}/>
    <View style={styles.headerOneView}>
<Text style={styles.textStyleHome}>Ev</Text>
<Text style={{color:colors.lightBlack}}>Kazimiye Mah. Bahçelievler Cad</Text>
<Icon name="right" size={25} color="#000" />
<View style={styles.headerTwo}>
    <Text style={{fontWeight:"bold",fontSize:13}}>TVS</Text>
    <Text style={{fontWeight:"bold",fontSize:23}}>13 dk</Text>
    
</View>
 
</View>
    


  

</View>
<View></View>
  
</View>
 


  )
}

export default index