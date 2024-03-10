import React, { useEffect, useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from "../screens/HomeScreens"
import { colors } from '../style/colors'
import { Dimensions, Image, Text,View } from 'react-native'
import CategoryFilterScreen from "../screens/CategoryFilterScreen"
import ProductDetailScreen from  "../screens/ProductDetailScreen"
import { TouchableOpacity } from 'react-native'
import Icon from "react-native-vector-icons/Entypo"
import { getFocusedRouteNameFromRoute, useNavigation } from '@react-navigation/native'
import Ionicons from "react-native-vector-icons/Ionicons"
import CartScreen from "../screens/CartScreen"
import { connect } from 'react-redux'
import cartItem from '../redux/Reducers/cartItem'
import { Product } from '../models'
import * as actions from "../redux/Actions/cartAction"
const {width,height}=Dimensions.get("window")


const MyStack = ({navigation, route, cartItem, clearToCart}:{cartItem:{product:Product, quantity:number}[],clearToCart:()=>void}) => {

  const Stack = createStackNavigator()
  const tabHiddenRoutes = ["ProductDetails", "CartScreen"]
  const [TotalPrice,setTotalPrice]=useState<number>(0)
 
 
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route)
    if (tabHiddenRoutes.includes(routeName)) {
      navigation.setOptions({ tabBarStyle: { display: "none" } })
    } else {
      navigation.setOptions({ tabBarStyle: { display: "flex" } })
    }
  }, [navigation, route])


  
  const getProductsPrice=()=>{
    var total = 0;
    cartItem.forEach(cartItem=>{
      const price = (total += cartItem.product.fiyat)
      setTotalPrice(price)
    })

  }
    useEffect(()=>{
      getProductsPrice()
    },[cartItem,navigation,route])

   


  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: { backgroundColor: colors.mor },
          headerTitle: () => (
            <Image source={require("../../assets/getirlogo.png")}
              style={{ width: 70, height: 30 }}
            />
          )
        }}
      />
      <Stack.Screen
        name="CategoryDetails"
        component={CategoryFilterScreen}
        options={{
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: colors.mor },
          headerTitle: () => (
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>Ürünler</Text>
          ),
          headerRight: ()=>(
            <TouchableOpacity 
            onPress={()=>navigation.navigate("CartScreen")}
            style={{backgroundColor:"white", width:width*0.22,height:35, 
            borderRadius:4, marginRight:width*0.02, alignItems:"center", flexDirection:"row"}}>
              <Image style={{width:23,height:23,}} 
              source={require("../../assets/cart.png")}/>
              <View style={{flex:1, alignItems:"center", justifyContent:"center",}}>
              <Text style={{backgroundColor:"#EEEDEB",fontWeight:"bold", fontSize:13}}>{"\u20BA"} {TotalPrice.toFixed(2)}</Text>
              </View>

            </TouchableOpacity>
          )
        }}
      
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailScreen}
        options={{
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: colors.mor },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ padding: 10 }}>
              <Icon name='cross' size={28} color={"white"} />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>Ürün Detayı</Text>
          ),
          headerRight: () => (
            <TouchableOpacity style={{ padding: 10 }}>
              <Icon name='heart' size={27} />
            </TouchableOpacity>
          )
        }}
      />
      <Stack.Screen
      name="CartScreen"
      component={CartScreen}
      options={{
        headerTintColor:"white",
        headerStyle:{backgroundColor:colors.mor},
        headerTitle:"Sepetim",
        headerBackTitleVisible:false,
        headerLeft:()=>(
          <TouchableOpacity onPress={()=>navigation.goBack()}
          style={{paddingLeft:12}}>
            <Icon name='cross' size={28} color={"white"}/>

          </TouchableOpacity>
        ),
        headerRight:()=>(
          <TouchableOpacity 
          onPress={()=> clearToCart()}
          style={{paddingRight:12}}>
            <Ionicons name={"trash-bin-outline"} size={26} color={"white"} />
          </TouchableOpacity>
        )
      }}
      />
    </Stack.Navigator>
  )
}
 const MapPropsToState  =(state)=>{
  const {cartItem}= state
  return{
    cartItem: state.cartItem
  }
 }
 

 const MapDispatchProps =(dispatch)=>{

 return{
  clearToCart:()=> dispatch(actions.clearToCart())
 }


 }
 

function HomeNavigator({navigation, route, cartItem, clearToCart}:{clearToCart:()=>void}) {
  return <MyStack navigation={navigation} route={route} cartItem={cartItem} clearToCart={clearToCart}/>
}

export default connect (MapPropsToState,MapDispatchProps)(HomeNavigator)