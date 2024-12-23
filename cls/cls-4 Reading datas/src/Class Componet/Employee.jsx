import React from "react";
class Employee extends React.Component{
    emp={
        eid:101,
        ename:'Rahul',
        loc:['Wayanad','NewDelhi','Bangalore'],
        address:{ 
            city:'Noida',
            Pin:642896

        }
    }
    render(){
        return <div>
            <pre>{JSON.stringify(this.emp)}</pre>
            <h2>Employee Name:{this.emp.ename}</h2>
            <h2>Location:{this.emp.loc[1]}</h2>
            <h2>City:{this.emp.address.city}</h2>
            <h2>Pin:{this.emp.address.Pin}</h2>
        </div>
        
    }
}
export default Employee