import {combineReducers} from "redux"
import userReducer from "./reducers/userReducer"

const reducer =combineReducers({
    userState:userReducer,
})

export default reducer