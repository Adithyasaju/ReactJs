import React, { useState } from "react"

let Reg=()=>{
    let [user,setUser]=useState({uname:"",email:"",mobile:""})

    let updateHandler=(event)=>{
        setUser({...user,[event.target.name]:event.target.value})
    }

    let submitHandler=(event)=>{
        event.preventDefault()
        //Axios.post(url,user).then().catch()
        console.log(user);
        
    }

    return <div>
        <pre>{JSON.stringify(user)}</pre>
            <form onSubmit={submitHandler}>
                <label>UserName: :</label>
                <input type="text" onChange={updateHandler} name="uname"/> <br/>
                <label>Email : : :</label>
                <input type="email" onChange={updateHandler} name="email"/> <br/>
                <label>Mobile : : </label>
                <input type="number" onChange={updateHandler} name="mobile"/> <br/>
                <input type="submit" value="Register"/>
            </form>
    </div>

}
export default Reg