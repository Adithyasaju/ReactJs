import React from "react";
class Message extends React.Component{
    msg="Hello";
    gmHandler=()=>{
        console.log("Test case:123");
        this.msg="Good Morning";
        this.forceUpdate();
    }
    render(){
        console.log("Test Case 124");
        
        return <div>
            
            <h3>Value:{this.msg}</h3>
            <button onClick={this.gmHandler}>GM</button>
            <button>GN</button>
        </div>
    }
}
export default Message