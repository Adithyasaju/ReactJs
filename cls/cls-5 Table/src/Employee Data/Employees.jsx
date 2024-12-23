//Class Component
import React from "react";
class Employees extends React.Component{
    employees=[{"id":1,"name":"Rycca","gender":"Female"},
        {"id":2,"name":"Filippo","gender":"Male"},
        {"id":3,"name":"Lyndy","gender":"Female"},
        {"id":4,"name":"Herold","gender":"Male"},
        {"id":5,"name":"Silvester","gender":"Male"},
        {"id":6,"name":"Cecelia","gender":"Female"},
        {"id":7,"name":"Kipp","gender":"Male"},
        {"id":8,"name":"Serene","gender":"Female"},
        {"id":9,"name":"Amandie","gender":"Female"},
        {"id":10,"name":"Kennan","gender":"Male"},
        {"id":11,"name":"Callida","gender":"Non-binary"},
        {"id":12,"name":"Clayton","gender":"Male"},
        {"id":13,"name":"Dalia","gender":"Female"},
        {"id":14,"name":"Robinet","gender":"Female"},
        {"id":15,"name":"Jayme","gender":"Genderqueer"},
        {"id":16,"name":"Isis","gender":"Female"},
        {"id":17,"name":"Lucas","gender":"Male"},
        {"id":18,"name":"Harbert","gender":"Male"},
        {"id":19,"name":"Bryant","gender":"Male"},
        {"id":20,"name":"Lew","gender":"Male"},
        {"id":21,"name":"Simeon","gender":"Male"},
        {"id":22,"name":"Osgood","gender":"Male"},
        {"id":23,"name":"Adair","gender":"Male"},
        {"id":24,"name":"Barde","gender":"Male"},
        {"id":25,"name":"Ashlan","gender":"Female"},
        {"id":26,"name":"Elijah","gender":"Male"},
        {"id":27,"name":"Tadd","gender":"Male"},
        {"id":28,"name":"Nissie","gender":"Female"},
        {"id":29,"name":"Odey","gender":"Male"},
        {"id":30,"name":"Amberly","gender":"Female"},
        {"id":31,"name":"Corella","gender":"Female"},
        {"id":32,"name":"Peter","gender":"Male"},
        {"id":33,"name":"Willem","gender":"Male"},
        {"id":34,"name":"Hannis","gender":"Female"},
        {"id":35,"name":"Debor","gender":"Female"},
        {"id":36,"name":"Michaelina","gender":"Female"},
        {"id":37,"name":"Annecorinne","gender":"Female"},
        {"id":38,"name":"Lucretia","gender":"Female"},
        {"id":39,"name":"Sheilah","gender":"Female"},
        {"id":40,"name":"Lavinia","gender":"Female"},
        {"id":41,"name":"Gino","gender":"Male"},
        {"id":42,"name":"Zed","gender":"Genderfluid"},
        {"id":43,"name":"Mirna","gender":"Female"},
        {"id":44,"name":"Jaclyn","gender":"Female"},
        {"id":45,"name":"Alexi","gender":"Female"},
        {"id":46,"name":"Manny","gender":"Male"},
        {"id":47,"name":"Erina","gender":"Female"},
        {"id":48,"name":"Mahmoud","gender":"Male"},
        {"id":49,"name":"Daniela","gender":"Female"},
        {"id":50,"name":"Hazel","gender":"Male"}]
    render(){
        return<>
         <h2>Employees Data</h2>
        <table border={2}>
            <thead>
                <th>Id</th>
                <th>Name</th>
                <th>Gender</th>
            </thead>
            <tbody>
                {
                 this.employees.map((emp)=>{
                    return <tr>
                        <td>{emp.id}</td>
                        <td>{emp.name}</td>
                        <td>{emp.gender}</td>
                       </tr>

                    })
                
                }
            </tbody>
        </table>
        </>
            
        
    }
}
export default Employees