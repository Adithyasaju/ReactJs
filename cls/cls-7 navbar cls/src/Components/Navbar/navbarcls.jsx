//class component

import React from "react";
class navbarcls extends React.Component{
    render(){
        return <nav className="navbar navbar-dark bg-dark navbar-expand large">
            <a href="#" className="navbar-brand">Logo</a>
            <div>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </div>
        </nav>
    }
}
export default navbarcls