import React ,{Component}from "react";
import  Axios  from "axios";
class User extends React.Component{
    state;
    constructor (props){
        super(props);
        this.state={userData:[]}
    }
    componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((resp)=>{
            this.setState({userData:resp.data})
        })
        .catch(()=>{

        })
    }
    render(){
        return <div>
            <pre>{JSON.stringify(this.state.userData)}</pre>
            {
                this.state.userData.length > 0?
                <> 
                    
                    <table border={2}>
                        <thead>
                            <th>Id</th>
                            <th>Name</th>
                            <th>City</th>
                        </thead>
                        <tbody>
                        {
                            this.state.userData.map((user)=>{ 
                                return <tr>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.address.city}</td>
                                    </tr>
                            })
                        }
                        </tbody>
                    </table>
                    </>:<h3>No data</h3>
            }
        </div>
    }
}
export default User