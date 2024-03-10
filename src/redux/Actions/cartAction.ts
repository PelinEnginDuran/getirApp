import { ADD_TO_CART, CLEAR_TO_CART, REMOVE_TO_CART } from "../constant"

export const addToCart=(payload)=>{
    return{
        type: ADD_TO_CART,
        payload
    }
}

export const removeToCart =(payload)=>{
    return{
        type: REMOVE_TO_CART,
        payload
    }
}

export const clearToCart=()=>{
    return{
        type: CLEAR_TO_CART
    }
   
}