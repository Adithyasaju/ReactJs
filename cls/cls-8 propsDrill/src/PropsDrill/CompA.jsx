import CompB from "./CompB"
let CompA=()=>{
    let ename="Rahul"
    return <div>
        <h3>Component A</h3>
        <hr/>
        <CompB name={ename}/>
    </div>
}
export default CompA