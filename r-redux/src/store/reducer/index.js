import { INCREMENT } from "../actionType";

const INITIAL_STATE = {
    count: 100,
    users: [],
};

function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + action.payload };
        case "DECREMENT":
            // gak ada logic
            return { ...state, count: state.count - action.payload };
        default:
            return state;
    }
}

export default reducer;
