import Navbar from "./Navbar/Navbar"
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Contact from './Components/Contact'
let App=()=>{
    return <div>
        {/* <h2>App Component</h2> */}
        <Router>
        <Navbar/>
        <Switch>
            <Route path="/index" component={Home}></Route>
            <Route path="/About" component={About}></Route>
            <Route path="/Services" component={Services}></Route>
            <Route path="/Contact" component={Contact}></Route>
        </Switch>
        </Router>
    </div>
}
export default App
