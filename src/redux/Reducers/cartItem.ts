import { ADD_TO_CART, REMOVE_TO_CART, CLEAR_TO_CART } from "../constant";


const cartItem =(state=[], action)=>{
    switch(action.type){
        case ADD_TO_CART:
            return[...state,action.payload]

        case REMOVE_TO_CART:
            return state.filter(cartItem=> cartItem.product.id !==action.payload.id)   
           
        case CLEAR_TO_CART:
            return state=[]    
    }
 return state
}

export default cartItem