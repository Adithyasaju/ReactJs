//with handler
import React from "react";
const Message=()=>{
    let [msg,setMsg]=React.useState("Hello");
    let gmHandler=()=>{
        setMsg("Good Morning")
    }
    let gnHandler=()=>{
        setMsg("Good Night")
    }
    return<div>
        <h3>Message Component</h3>
        <h3>Message Value"{msg}</h3>
        <button onClick={gmHandler}>GM</button>
        <button onClick={gnHandler}>GN</button>
    </div>

}
export default Message