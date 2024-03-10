import { View, Text } from 'react-native'
import React from 'react'
import productGetir from '../../../assets/productGetir'
import { colors } from '../../style/colors'

type DetailBoxType={
    fiyat:number,
    name:string,
    miktar:string
}

export default function index({fiyat,name,miktar}:DetailBoxType) {
  return (
    <View style={{alignItems:"center", paddingTop:15, paddingBottom:8, backgroundColor:"white"}}>
        <Text style={{color:colors.mor, fontWeight:"bold", fontSize:20, paddingBottom:20}}>
           <Text>{"\u20BA"}</Text>{fiyat}
        </Text>
        <Text style={{fontWeight:"bold", fontSize:16}}>
           {name}
        </Text>
        <Text>
            {miktar}
        </Text>
    </View>
   
  )
}