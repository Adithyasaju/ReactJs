let CompD=(props)=>{
    return <div>
        <h3>Component D</h3>
        <pre>{JSON.stringify(props)}</pre>
        <h4>Employee Name:{props.name}</h4>
        <hr/>
    </div>
}
export default CompD