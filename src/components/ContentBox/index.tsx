import { View, Text } from 'react-native'
import React from 'react'
import { colors } from '../../style/colors'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { ScrollView } from 'react-native-gesture-handler'


export default function index() {
  return (
    <ScrollView style={{backgroundColor:"white", width:"100%", height:"100%"}}>
      <Text style={{paddingBottom:15, paddingHorizontal:15,paddingTop:15, 
        fontSize:14, color:colors.lightBlack,}}>
            Sütlü kıtır çikolata kaplama, badem parçacıkları...</Text>
           
            <View style={{flexDirection:"row",justifyContent:"space-between",paddingBottom:10, paddingTop:15, paddingHorizontal:15}} >
            <Text>İçindekiler</Text>
            <MaterialIcons name={"keyboard-arrow-down"} size={22}/>
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-between",paddingBottom:10, paddingTop:15, paddingHorizontal:15}} >
            <Text>Kullanım</Text>
            <MaterialIcons name={"keyboard-arrow-down"} size={22}/>

            </View>
            <View style={{flexDirection:"row",justifyContent:"space-between",paddingBottom:10, paddingTop:15, paddingHorizontal:15}} >
            <Text>Besin Değerleri</Text>
            <MaterialIcons name={"keyboard-arrow-down"} size={22}/>
            
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-between",paddingBottom:10, paddingTop:15, paddingHorizontal:15}} >
            <Text>Ek Bilgiler</Text>
            <MaterialIcons name={"keyboard-arrow-down"} size={22}/>
            </View>
            </ScrollView>
           
  )
}