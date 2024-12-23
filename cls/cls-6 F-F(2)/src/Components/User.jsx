import Employee from "./Employee";
let User=()=>{
    let ename='Ram';
    let eid=101
    let sal=45000
    return <div>
        <h2>User Component</h2>
        <hr/>
        <Employee Name={ename} Id={eid} Salary={sal}/>
    </div>
}
export default User