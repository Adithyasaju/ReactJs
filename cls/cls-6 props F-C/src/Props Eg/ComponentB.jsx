import React from "react";
class ComponentB extends React.Component{
    render(){
        return <div>
            <h3>Component B</h3>
            <pre>{JSON.stringify(this.props)}</pre>
            <h3>Emplooyee Id:{this.props.Id}</h3>
            <h3>Emplooyee Name:{this.props.Name}</h3>
            <h3>Emplooyee Locaton:{this.props.Loc}</h3>
            <h3>Emplooyee Location:{this.props.Loc[1]}</h3>
        </div>
    }
}
export default ComponentB