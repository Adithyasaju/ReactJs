import React,{useEffect,useState} from "react";
import ContactList from "./ContactList";
import ContactDetails from "./ContactDetails";
import Axios from 'axios'; 

let ContactApp =()=>{
    let [contacts,setContacts] = useState([])
    let [selContact,setContact]=useState({})

    useEffect(()=>{
        Axios.get('https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist')
        .then((resp)=>{setContacts(resp.data)})
        .catch()
    },[])

    let useSelectedContact=(contact)=>{
        console.log(contact.name.first);
        setContact(contact)
    }

    return <>
        <div className="container mt-5">
            <h5>Contact App</h5>
            {/* <pre>{JSON.stringify(selContact)}</pre>
            <pre>{JSON.stringify(contacts)}</pre> */}
                {
                    contacts.length >0 ? <> 
                     <div className="row">
                       <div className="col-8">
                         {/*Contact List */}
                         <ContactList contacts={contacts} selContact={useSelectedContact}/>
                    </div>
                    <div className="col-4">
                         {/*Contact Details*/}

                         {
                            Object.keys(selContact).length >0 ? <>
                            <ContactDetails contact={selContact}/>
                            </> :<>No Data</>
                         }
                         
                          
                     </div>

                    </div>

                    
                    </>  :<h3>No Data</h3>
                }

        </div>
    </>       
   
}
export default ContactApp 