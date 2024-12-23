import React, { useState } from 'react'

const Login = () => {
    let [user,setUser]=useState({uName:"",uPassword:"",uMobile:"",uServices:"",uGender:""})
    let updateHandler=(event)=>{
        setUser({...user,[event.target.name]:event.target.value})
    }
    let submitHandler=(event)=>{
        event.preventDefault()
        console.log(user);
        
    }
            return <div>
                    <br />
                    <pre>{JSON.stringify(user)}</pre>
                    <br />
                    <h2>Login Details</h2>
                    <form onSubmit={submitHandler}>
                        <label>User Name:</label>
                        <input name="uName" type="text" onChange={updateHandler}/> <br /><br />
                        <label>Password::::</label>
                        <input name="uPassword" type="text" onChange={updateHandler}/> <br /><br/>
                        <label>Mobile No:</label>
                        <input name="uMobile" type="number" onChange={updateHandler}/> <br/><br/>
                        <label>Services::</label>
                        <select name="uServices" onChange={updateHandler}>
                            <option>--Select One</option>
                            <option>Full stack Web Development</option>
                            <option>Java</option>
                            <option>Python</option>
                        </select> <br/><br/>
                        <input type="submit" value={"Login"} />
                    </form>
            </div>
}
export default Login