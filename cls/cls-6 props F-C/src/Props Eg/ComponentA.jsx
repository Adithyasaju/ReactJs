import ComponentB from "./ComponentB"

let ComponentA=()=>{
    let ename='Rahul';
    let eid=101;
    let loc=['Wayanad','Bangalore','New Delhi']

    return <div>
        <h2>ComponentA</h2>
        <hr/>
        <ComponentB Name={ename} Id={eid} Loc={loc}/>
    </div>
    
   
}
export default ComponentA