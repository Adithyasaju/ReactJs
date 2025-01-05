import React ,{useRef}from "react";

const Login =()=>{
    let btnRef=useRef()
 
    let enableBtnHandler =(event)=>{
        if(event.target.checked==true){
            btnRef.current.disabled=false
        }
        else{
            btnRef.current.disabled=true
        }
    }
   
    return <div>
    <h3>Login Details</h3>
    <form >
        <label >Email Id::::</label>
        <input type="text" /> <br />
        <label >Password:</label>
        <input type="password" /> <br />
        <input type="checkbox" onClick={enableBtnHandler}/> Please Accept T&C <br />
        <input type="submit" value="Login" disabled ref={btnRef}/>
    </form>
</div>

}
export default Login