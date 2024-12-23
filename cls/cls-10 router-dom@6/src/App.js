import Navbar from "./Navbar/Navbar"
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Contact from './Components/Contact'
let App=()=>{
    return <div>
        {/* <h2>App Component</h2> */}
        <Router>
        <Navbar/>
        <Routes>
            <Route path="/index" element={<Home/>}></Route>
            <Route path="/About" element={<About/>}></Route>
            <Route path="/Services" element={<Services/>}></Route>
            <Route path="/Contact" element={<Contact/>}></Route>
        </Routes>
        </Router>
    </div>
}
export default App
