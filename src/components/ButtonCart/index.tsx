import { View, Text,TouchableOpacity, Button, Dimensions } from 'react-native'
import React from 'react'
import { colors } from '../../style/colors'
import { connect } from 'react-redux'
import * as actions from "../../redux/Actions/cartAction"
import { Product } from '../../models'

type buttonCartType={
  addItemToCart:(a:Product)=> void;
  item:Product

}

const {width,height}=Dimensions.get("window")


function index({item,addItemToCart}:buttonCartType) {
  return (
    <TouchableOpacity
    onPress={() => addItemToCart(item)}
    style={{
      backgroundColor: colors.mor,
      borderRadius: 7,
      justifyContent: "center",
      alignItems: "center",
      width: "90%",
      height: height * 0.07,
      marginHorizontal: 20
    }}>
    <Text style={{ color: "white", fontSize: 16 }}>Sepete Ekle</Text>
  </TouchableOpacity>
)
}


const mapDispatchToProps=(dispatch)=>{
  return{
    addItemToCart:(product:Product)=>
      dispatch(actions.addToCart({quantity:1,product}))
  }

}
export default connect (null,mapDispatchToProps)(index)