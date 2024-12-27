import { INCR,DECR } from "./product.action";
let initialstate={
    product_Name:"Marker Pen",
    price:30,
    qty:1,
    image:""
}

let productReducer =(state=initialstate,action)=>{
    switch(action.type){
        case 'INCR':
            return{...state,qty:state.qty+1}
        case 'DECR':
            return{...state,qty:state.qty-1}
        default:
            return state
    }

}
export{productReducer}