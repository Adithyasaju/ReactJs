import CompC from "./CompC"
let CompB=(props)=>{
    return <div>
        <h3>Component B</h3>
        <pre>{JSON.stringify(props)}</pre>
        <hr/>
        <CompC name={props.name}/>
    </div>
}
export default CompB