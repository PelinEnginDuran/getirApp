import React from 'react'
import { TouchableOpacity, Text, Image, Dimensions } from 'react-native'
import { colors } from '../../style/colors'
import { Categories } from '../../models'
import { useNavigation } from '@react-navigation/native'
import HomeNavigator from '../../navigators/HomeNavigator'



 const {width, height}=Dimensions.get("window")
 type categoriesItemProps={
  item: Categories
 }
const index = ({item}:categoriesItemProps) => {
  const navigation=useNavigation()
  return (
   <TouchableOpacity 
   onPress={()=>navigation.navigate("CategoryDetails", {Categories:item})}
   style={{width:width*0.25,height:width*0.25,
   marginTop:10, flexDirection:"column",
   alignItems:"center",justifyContent:"space-between"}}>
     <Image 
    source={{uri:item.src}}
    width={width*0.18}
    height={width*0.18}
    borderRadius={8}
    />
    <Text style={{fontSize:14, color:colors.lightBlack, fontWeight:"500"}}>{item.name}</Text>
   </TouchableOpacity>
  )
}

export default index