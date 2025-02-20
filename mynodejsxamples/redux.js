const {createStore} = require('redux');

const initialState = {
    name : "initial"
}
const mReducer = (state = initialState,action)=>{

    const newState = {...state};

    if(action.type==="MANU"){
        newState.name = "Manu";
    }

    if(action.type==="SRUJAL"){
        newState.name = "Srujal";
    }

    return newState;
};

const mSubscriber = ()=>{
    console.log("Name : " + store.getState().name);
}

const store = createStore(mReducer);
store.subscribe(mSubscriber);
store.dispatch({type:"MANU"});
store.dispatch({type:"SRUJAL"});
store.dispatch({type:"RAJIV"});