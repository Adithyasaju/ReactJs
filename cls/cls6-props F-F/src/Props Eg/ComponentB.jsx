let ComponentB=(props)=>{
    return <div>
        <h2>ComponentB</h2>
        <hr/>                                     
        <pre>{JSON.stringify(props)}</pre>         
        <h3>Employee Name:{props.Name}</h3>
        <h3>Employee Id:{props.Id}</h3>
        <h3>Locations:{props.Loc}</h3>
        <h3>Location:{props.Loc[1]}</h3>
    </div>
}
export default ComponentB