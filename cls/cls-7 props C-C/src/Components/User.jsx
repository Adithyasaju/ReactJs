import React from "react";
import Employee from "./Employee";
class User extends React.Component{
    username='Sam';
    avail=true;
    sal=45000.45;
    user_data={
        last_name:'Rahul',
        loc:['Wayanad','Bangalore','NewDelhi'],
        address:{
            city:'Marthahalli',
            Pin:560038
        }
    }

    render(){
        return <div>
            <h2>User Component</h2>
            <Employee Name={this.username} Avail={this.avail} Sal={this.sal} data={this.user_data}/>
        </div>
    }
}
export default User