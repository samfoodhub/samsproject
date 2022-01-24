import {store_data} from "./action";
const initialstate = {
    storeData: []
}
export const reducertextdata = (state=initialstate,action) => {
    console.log('test',state)
   
    // console.log('storeData', action);
   switch (action.type){
    
   case store_data:
       console.log('store_data',action.payload )
    //    return {
    //        ...state,
    //        storeData: [...state.storeData, action.payload] 
    //     // storeData: [{key: action.payload, value: action.payload}]
    //    }
    return{
        storeData:action.payload
    }
//    return { 
//        state, 
//        storeData: [...state.storeData, action.payload] 
//     }
           default :
           return state;
   }
}; 
