import React from 'react'
import Header  from './Component/Header';
import Product from './Component/Product';
import Service from './Component/Service';
import Footer from './Component/Footer';
class App extends React.Component{
   render(){
    return <div>
        <h1>App Component</h1>
       
        <Header/>
       
        <Product/>
       
        <Service/>
       
        <Footer/>
        
    </div>
   }
}
export default App; 