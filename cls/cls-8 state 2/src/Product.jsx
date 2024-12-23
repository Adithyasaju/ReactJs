import React from "react";
class Product extends React.Component{
    state={
        qty:1
    }
    incrHandler=()=>{
        this.setState({qty:this.state.qty +1})
    }
    decrHandler=()=>{
        this.setState({qty:this.state.qty -1})
    }
render(){
    return <div>
        <h2>Product Component</h2>
        <h2>Product Qty:{this.state.qty}</h2>
        <button onClick={this.decrHandler}>DECR</button>
        <button onClick={this.incrHandler}>INCR</button>
    </div>
}
}
export default Product