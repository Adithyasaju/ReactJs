import React from "react";
class Message extends React.Component{
    state={
        msg:"Hello"
    }
    gmHandler=()=>{
        this.setState({msg:"Good Morning"})
    }
    gnHandler=()=>{
        this.setState({msg:"Good Night"})
    }
    render(){
        return <div>
            <button onClick={this.gmHandler}>GM</button>
            <button onClick={this.gnHandler}>GN</button>
        </div>
    }
}
export default Message