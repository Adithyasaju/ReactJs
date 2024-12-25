import React from 'react'
import Message from './Message/Message'
import { Provider } from 'react-redux'
import { store } from './Redux/store'
const App=()=>{
    return(
        <div>
            <Provider store={store}>
            <h2>App Component</h2>
            <Message/>

            </Provider>
        </div>
    )
}
export default App