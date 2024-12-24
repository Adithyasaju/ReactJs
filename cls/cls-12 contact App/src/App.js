import React from "react"
import Navbar from "./Components/Navbar"
import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import Home from "./Components/Home"
import ContactApp from "./Contacts/ContactApp"
let App=()=>{
    return <React.Fragment>
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" elememt={<Home/>}/>
                <Route path="/index" element={<Home/>}/>
                <Route path="/contact" element={<ContactApp/>}/>
            </Routes>
        </Router>
    </React.Fragment>
}
export default App
