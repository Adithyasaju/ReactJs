//Class Component

import React, { Fragment } from "react";
class Messages extends React.Component{
    msg='Have a nice day';
    price=500;
    colors=['Red','Blue','Green']
    emp={ eid:101,
          ename:'Rahul',
          location:['Wayanad','New Delhi']
        }

    render(){
        return <Fragment>
                    <h3>Message Value:{this.msg}</h3>
                    <h3>Price:{this.price}</h3>
                    <h3>Colours:{this.colors}</h3>
                    <h3>Colours:{this.colors[0]}</h3>
                    
                    <h3>Employee Data:{JSON.stringify(this.emp)}</h3>
                    <pre>{JSON.stringify(this.emp)}</pre>
            
               </Fragment>
    }
}
export default Messages;