const { createStore } = require('redux');

const initialState = {

    name: "initial"

}
const mReducer = (state = initialState, action) => {

    var newState = { ...state };

    if (action.type === "MANU") {

        newState.name = "Manu";

    }

    else if (action.type === "SRUJAL") {

        newState.name = "Srujal";

    }

    else {

        newState = { ...initialState };
    }

    return newState;
};

const mSubscriber = () => {

    console.log("\nName : " + store.getState().name);

}

const store = createStore(mReducer);

store.subscribe(mSubscriber);

store.dispatch({ type: "MANU" });

store.dispatch({ type: "SRUJAL" });

store.dispatch({ type: "RAJIV" });