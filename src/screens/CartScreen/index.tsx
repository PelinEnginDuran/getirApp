import { View, Text, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import CartBoxDetail from "../../components/CartBoxDetail"
import productGetir from '../../../assets/productGetir'
import { FlatList } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { colors } from '../../style/colors'
import { connect } from 'react-redux'
import { Product } from '../../models'
import * as actions from "../../redux/Actions/cartAction"


const {width, height}= Dimensions.get("window")

function index({cartItem}:{cartItem: {product:Product, quantity:number}[]}) {

  const [totalPrice, setTotalPrice]=useState(0)
  const getTotalPrice =()=>{
    let total=0;
    cartItem.forEach(item=>{
      total +=item.product.fiyat
      setTotalPrice(total)
    
    })
    cartItem.length ? null : setTotalPrice(0)
  }
  useEffect(()=>{
    console.log("neden")
    getTotalPrice()

  },[cartItem])

  return (
   <View style={{flex:1}}>
     <FlatList 
     data={cartItem}
     renderItem={({item})=> <CartBoxDetail product={item.product} quantity={item.quantity}/>}

     />
     <View style={{backgroundColor: '#fff',flexDirection:"row",alignItems:"center", 
      paddingHorizontal:"4%",height:height*0.12, shadowOpacity:0.1}} >
      <TouchableOpacity style={{height:height*0.08,flex:3,backgroundColor:colors.mor, 
        justifyContent:"center", alignItems:"center", borderTopLeftRadius:8, 
        borderBottomLeftRadius:8, }}>
        <Text style={{color:"white", fontWeight:"bold", fontSize:16}}>Devam</Text>
      </TouchableOpacity>
      <View style={{flex:1, height:height*0.08, justifyContent:"center", 
      alignItems:"center",backgroundColor:"white",borderTopRightRadius:8, 
      borderBottomRightRadius:8,
       }}>
      <Text style={{color:colors.mor, fontWeight:"bold", fontSize:18}}>
      {"\u20BA"}{totalPrice.toFixed(2)}</Text>
      </View>
     </View>
  </View>
  )
}


const MapPropsToStore =(state)=>{
  const {cartItem} = state;
  return{
    cartItem:state.cartItem
  }

}
export default connect (MapPropsToStore,null)(index)