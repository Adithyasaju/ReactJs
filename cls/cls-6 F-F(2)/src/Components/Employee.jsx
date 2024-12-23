let Employee =(props)=>{

    return <div>
        <h2>Employee Component</h2>
        <pre>{JSON.stringify(props)}</pre>
        <h3>Employee Name:{props.Name}</h3>
        <h3>Employee Id:{props.Id}</h3>
        <h3>Employee Salary:{props.Salary}</h3>
    </div>
}
export default Employee