import { View, Text } from 'react-native'
import React from 'react'
import productGetir from '../../../assets/productGetir'
import ProductItem from "../ProductItem"
import { colors } from '../../style/colors'


export default function index() {
  return (
<View>
<View style={{flexDirection:"row", backgroundColor:"white"}}>
        {productGetir.slice(0,2).map((item)=>(
 <ProductItem key={item.id} item={item} />
        ))}
     
    </View>
    
        <Text style={{color:colors.lightBlack, fontWeight:"bold",fontSize:16,marginTop:20}}>Çubuk</Text>
        <View style={{marginTop:10,flexDirection:"row", flexWrap:"wrap", flex:1, backgroundColor:"white",paddingVertical:10}}>
        {productGetir.slice(2).map((item)=>(
            <ProductItem key={item.id} item={item}/>
        ))}
    </View>
</View>
  )

}