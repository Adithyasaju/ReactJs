import React from 'react'
import {incrAction,decrAction} from '../redux/Product/product.action'
import { useSelector,useDispatch } from 'react-redux'
const Product = () => {
       let product=useSelector((state)=>{
        return state.product
       })
  
      let dispatch = useDispatch();

        return <div>
        <pre>{JSON.stringify(product)}</pre>
        <h3>Product Name:{product.product_Name}</h3>
        <h3>Price:{product.price}</h3>
        <h3>Total:{product.price * product.qty}</h3>
        <button onClick={()=>{dispatch(decrAction())}}>DECR</button>{product.qty}<button onClick={()=>{dispatch(incrAction())}}>INCR</button>
        </div>
}

export default Product