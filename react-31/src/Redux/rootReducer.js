import { combineReducers } from "redux";
import { messageReducer } from "./Msg/message.reducer";
import { productReducer } from "./Product/product.reducer";

let rootReducer=combineReducers({"product":productReducer,"message":messageReducer})

export{rootReducer}