//without Handler
import React from "react";
const Messages = ()=>{
    let [msg,setMsg]=React.useState("Hello");
    return <div>
        <h3>Message Component</h3>
        <h3>Message Value:{msg}</h3>
        <button onClick={()=>{
            setMsg("Good Morning")
        }}>GM</button>
        <button onClick={()=>{
            setMsg("Good Night")
        }}>GN</button>
    </div>
}
export default Messages