import React from "react";
class Employee extends React.Component{
    render(){
        return <div>
            <h2>Employee Component</h2>
            <pre>{JSON.stringify(this.props)}</pre>
            <h2>User Name:{this.props.Name}</h2>
            <h2>Avaliability:{this.props.Avail*1}</h2>
            <h2>Salary:{this.props.Sal}</h2>
            <h2>Last Name:{this.props.data.last_name}</h2>
            <h2>Location:{this.props.data.loc[1]}</h2>
            <h2>PinCode:{this.props.data.address.Pin}</h2>
        </div>
    }
}
export default Employee