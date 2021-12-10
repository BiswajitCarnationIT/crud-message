import { FETCH_LIST } from "./Action";

const initialState = {
    list : []
}
const messageReducer = (state = initialState, action) => {
    console.log("reducer", action);
switch (action.type) {
    
    case FETCH_LIST:
      return {
        
        list: action.payload,
        
      };
    
    default:
      return state;
  }
};

export default messageReducer;