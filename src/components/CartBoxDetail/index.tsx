import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
import { Product } from '../../models'
import { colors } from '../../style/colors'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { removeToCart } from '../../redux/Actions/cartAction'
import { connect } from 'react-redux'
import * as actions from "../../redux/Actions/cartAction"

const {width, height}= Dimensions.get("window")

type DetailBoxProps={
product: Product,
quantity: number,
removeToCart:(product:Product)=>void
}

 function index({product, quantity, removeToCart}:DetailBoxProps) {
  return (
    <View style={{height:height*0.13, backgroundColor:"white",borderBottomWidth:0.2,
     shadowColor:"lightgray", flexDirection:"row",alignItems:"center",justifyContent:"space-between",
      marginBottom:10}}>
     <View style={{flexDirection:"row", alignItems:"center"}}>
     <Image 
    style={{width:height*0.1, height:height*0.1}}
      source={{uri:product.image}}/>
      <View style={{marginLeft:15, maxWidth:160}}>
      <Text style={{fontWeight:"bold"}}>{product.name}</Text>
      <Text style={{color:"lightgray", fontWeight:"bold"}}>{product.miktar}</Text>
      <Text style={{marginTop:9, color:colors.mor, fontWeight:"bold", fontSize:16}}>{"\u20BA"}{product.fiyat}</Text>
      
     </View>
     
    
     </View>
     <View style={{flexDirection:"row",width:80, height:40, borderColor:"lightgray", borderWidth:1, shadowOpacity:0.5, 
      alignItems:"center", justifyContent:"space-around",borderRadius:10, marginRight:15}}>
      <TouchableOpacity 
      onPress={()=>removeToCart(product)}
      style={{flex:1,alignItems:"center", justifyContent:"center",height:40, width:25}}>
      <Text style={{color:colors.mor, fontSize:24, fontWeight:"bold"}}>-</Text>
      </TouchableOpacity>
     <View style={{backgroundColor:colors.mor, flex:1,alignItems:"center", justifyContent:"center",height:40}}>
     <Text style={{color:"white", fontWeight:"bold",}}>{quantity}</Text>
     </View>
  <View style={{flex:1,alignItems:"center"}}>
  <Text style={{color:colors.mor, fontWeight:"bold",fontSize:20,}}>+</Text>
  </View>
   
     </View>
     
   
    </View>
  )
}

const mapDispatchRemove =(dispatch)=>{
  return {
    removeToCart: (product: Product)=>
      dispatch(actions.removeToCart(product))
  }

}




export default connect(null, mapDispatchRemove)(index)