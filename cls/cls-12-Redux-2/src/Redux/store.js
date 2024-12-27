import{createStore} from 'redux'
import{composeWithDevTools} from '@redux-devtools/extension'
import {messageReducer} from './Msg/message.reducer'
import { rootReducer } from './rootReducer'

//let store =createStore(messageReducer,composeWithDevTools())
let store =createStore(rootReducer,composeWithDevTools())
export {store} 