import { View, Text, ActivityIndicator, Button, TouchableOpacity, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import {Product} from "../../models/index"
import ImageCorousel from "../../components/ImageCorousel"
import { colors } from '../../style/colors'
import DetailBox from "../../components/DetailBox"
import ContentBox from "../../components/ContentBox"
import { ScrollView } from 'react-native'
import ButtonCart from "../../components/ButtonCart"


export default function index(prop) {

  const [product, setProduct]=useState<Product>()
  useEffect(()=>{

    setProduct(prop.route.params.product)
  },[])
  if(!product){
    return <ActivityIndicator  color={colors.mor}/>
  }
  return (
    <View>
      <ScrollView>
  
  <ImageCorousel images={product.images} />
  <DetailBox fiyat={product.fiyat} name={product.name} miktar={product.miktar}/>
  <Text style={{paddingTop:10, paddingHorizontal:15, paddingBottom:10,
    fontSize:18, fontWeight:"bold",color:"gray"}}>Detaylar</Text>
  <ContentBox />
  
  
 </ScrollView>
 <ButtonCart item={product} />
    </View>
  )
}
