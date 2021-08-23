// buat store untuk menyimpan state
const { createStore } = require("redux");

// actions type
const actionType = {
    INCREMENT: "INCREMENT",
};

const INITIAL_STATE = {
    count: 0,
    message: "Hello Redux",
};

// reducers
function reducer(state = INITIAL_STATE, action) {
    console.log(action);
    switch (action.type) {
        case actionType.INCREMENT:
            return { ...state, count: state.count + action.payload };
        default:
            return state;
    }
}

// Store
const store = createStore(reducer);

// action creator
function increment(number) {
    return {
        type: actionType.INCREMENT,
        payload: number,
    };
}

// merubah countnya
store.dispatch(increment(10));
store.dispatch(increment(10));
store.dispatch(increment(10));

// CONSUME
console.log(store.getState().count);
