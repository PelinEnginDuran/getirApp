import { View, Text, Dimensions, Touchable, TouchableOpacity, } from 'react-native'
import React, { useState } from 'react'
import { ScrollView, } from 'react-native-gesture-handler'
import { colors } from '../../style/colors'

const TypeBox =({setCat,item,active}:{setCat:any,item:string,active:string})=>{
    return(
        <TouchableOpacity
        onPress={()=>setCat(item)}
        style={[{flexDirection:"row", alignItems:"center",paddingHorizontal:12,borderRadius:6,marginRight:15,}, item==active? {backgroundColor:colors.mor }:{borderColor:"#F0EFF7",borderWidth:2}]}>
            <Text style={[{fontSize:16,color:colors.mor, fontWeight:"600"},item==active&& {color:"white"}]}>{item}</Text>

        </TouchableOpacity>
    )
}


const {height,width}=Dimensions.get("window")

export default function index() {
    const [category,setCategory]=useState<string>("Birlikte İyi Gider")
  return (
   <ScrollView 
   horizontal={true}
   showsHorizontalScrollIndicator={false}
   bounces={true}
style={{height:height*0.09,width:"100%",
    paddingVertical:9,
    paddingHorizontal:12,
backgroundColor:"white",shadowColor:"black", shadowOpacity:1}}>
 {["Birlikte İyi Gider", "Çubuk","Kutu", "Külah", "Çoklu", "Bar"].map((item)=>(
     <TypeBox 
     setCat={setCategory}
     item={item} active={category}/>

 ))}





   </ScrollView>
  )
}