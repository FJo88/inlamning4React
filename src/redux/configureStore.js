import {createStore} from "redux"
import AtmReducer from "./ducks/atm"

const store = createStore(AtmReducer);

export default store;