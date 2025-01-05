import React from "react";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from "./components/ProductApp/Home";
import Products from "./components/ProductApp/Products";
import Admin from "./components/ProductApp/Admin";
import CreateProduct from "./components/ProductApp/CreateProduct";
import UpdateProduct from "./components/ProductApp/UpdateProduct";


const  App=()=>{
    return(
        <div>
            <Router>
                <Navbar/>
                <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/index" element={<Home/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/admin" element={<Admin/>}/>
                <Route path="/create" element={<CreateProduct/>}/>
                <Route path="/admin/update/:id" element={<UpdateProduct/>}/>
                </Routes>
            </Router>
        </div>
    )
}
export default App