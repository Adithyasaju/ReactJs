import Header from './components/Header'
import Product from './components/Product'
import Services from './components/Services'
import Footer from './components/Footer'
function App(){
    return <div>
             <h1>App Component</h1>
             <hr/>
             <Header/>
             <hr/>
             <Product/>
             <hr/>
             <Services/>
             <hr/>
             <Footer/>
        
           </div>
}
export default App

/*
Fat Arrow Function
let App=()=>{
  return <div>
     <h1> App Component</h1>
     </div>
  }
     export default App
*/