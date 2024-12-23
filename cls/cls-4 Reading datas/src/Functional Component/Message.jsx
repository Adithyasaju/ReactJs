//functional component
import React from "react";
let Message=()=>{
    let msg='Good Morning';
    let price=700;
    let colors=['Red','  Blue',' Green']
                                            //instead of <div></div> we can use <React.Fragment>,<Fragment> and <>(empty fragment)
    let emp={
        eid:101,
        ename:'Rahul',
        Salary:45000
    }
    return <React.Fragment>         
        <h3>Message:{msg}</h3>
        <h3>Price:{price}</h3>
        <h3>Colours:{colors}</h3>
        <h3>Employee Data:{JSON.stringify(emp)} </h3>
    </React.Fragment>
}
export default Message;