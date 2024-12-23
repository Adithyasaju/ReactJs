import React from "react"
class Message  extends React.Component{
    constructor(props){
        super(props)
        this.state={
            message:"Hello"
       }
    }
    updateHandler=(value)=>{
        this.setState({
            message:value
        })
    }

    render (){
        return <div>
                <h3>Message Component</h3>
                <h3>Message Value:{this.state.message}</h3>
                <button onClick={this.updateHandler.bind(this,"Good Morning")}>GM</button>
                <button onClick={this.updateHandler.bind(this,"Good Night")}>GN</button>
        </div>
    }
}
export default Message
