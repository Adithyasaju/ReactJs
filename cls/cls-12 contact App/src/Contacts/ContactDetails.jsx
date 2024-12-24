import React from "react";

const ContactDetails=(props)=>{
    return <div>
        <h2>Contact Details</h2>
        {/* <pre>{JSON.stringify(props.contact)}</pre> */}
        <div className="card">
            <div className="card-header">
                <img src={props.contact.picture.medium}/>
            </div>
            <div className="card-body">
                <ul className="list-group">
                    <li className="list-group-item">{props.contact.gender}</li>
                    <li className="list-group-item">{props.contact.phone}</li>
                    <li className="list-group-item">{props.contact.dob.age}</li>
                    <li className="list-group-item">{props.contact.location.street.name}</li>
                </ul>
            </div>
        </div>
    </div>
}
export default ContactDetails