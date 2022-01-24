import {createStore,combineReducers} from 'redux';
import {reducertextdata} from '../Redux/reducer';
const rootReducer = combineReducers({
    textInstore:reducertextdata
});
const store  = () =>{
    console.log("reducertextdata",rootReducer)
    return createStore(rootReducer);
}
export default store;