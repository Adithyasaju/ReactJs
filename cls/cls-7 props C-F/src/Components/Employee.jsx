let Employee=(props)=>{
    return <div>
        <pre>{JSON.stringify(props)}</pre>
        <h2>City:{props.data.address.city}</h2>
        <h2>Location:{props.data.loc[1]}</h2>
    </div>
}
export default Employee